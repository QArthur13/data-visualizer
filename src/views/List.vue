<template>

    <input type="text" v-model="search" class="form-control" placeholder="Search a LastName">
    <table class="table table-bordered table-sm">
        <thead>
            <tr class="text-center" style="background-color: darkgreen; color:white">
                <th v-on:click="sort('id')">ID</th>
<<<<<<< HEAD
                <th v-on:click="sort('lastname')">LastName</th>
                <th v-on:click="sort('firstname')">FirstName</th>
                <th v-on:click="sort('gender')">Gender</th>
                <th v-on:click="sort('user.contact.email')">Email</th>
                <th v-on:click="sort('address')">Address</th>
                <th v-on:click="sort('contact.city')">City</th>
                <th>Country</th>
                <th>Longitude</th>
                <th>Lattitude</th>
                <th>Phone</th>
                <th>Favorite Animal</th>
                <th>Favorite Fruit</th>
                <th>Favorite Coulor</th>
                <th>Favorite Movie</th>
=======
                <th v-on:click="sort('lastname')">Last name</th>
                <th v-on:click="sort('firstname')">First name</th>
                <th v-on:click="sort('gender')">Gender</th>
                <th v-on:click="sort('contact.email')">Email</th>
                <th v-on:click="sort('contact.address')">Address</th>
                <th v-on:click="sort('contact.city')">City</th>
                <th v-on:click="sort('contact.country')">Country</th>
                <th v-on:click="sort('contact.location.lon')">Longitude</th>
                <th v-on:click="sort('contact.loaction.lat')">Lattitude</th>
                <th v-on:click="sort('contact.phone')">Phone</th>
                <th v-on:click="sort('preferences.favorite_pet')">Favorite Pet</th>
                <th v-on:click="sort('preferences.favorite_fruit')">Favorite Fruit</th>
                <th v-on:click="sort('preferences.favorite_color')">Favorite Color</th>
                <th v-on:click="sort('preferences.favorite_movie')">Favorite Movie</th>
>>>>>>> test-json
                <th>Modify</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in filterList" :key="user.ID">
                <th class="text-center" style="background-color: darkgreen; color:white">{{user.id}}</th>
                <td>{{user.lastname}}</td>
                <td>{{user.firstname}}</td>
                <td>{{user.gender}}</td>
                <td>{{user.contact.email}}</td>
                <td>{{user.contact.address}}</td>
                <td>{{user.contact.city}}</td>
                <td>{{user.contact.country}}</td>
                <td>{{user.contact.location.lon}}</td>
                <td>{{user.contact.location.lat}}</td>
                <td>{{user.contact.phone}}</td>
                <td>{{user.preferences.favorite_pet}}</td>
                <td>{{user.preferences.favorite_fruit}}</td>
                <td>{{user.preferences.favorite_color}}</td>
                <td>{{user.preferences.favorite_movie}}</td>
                <td v-on:click="modifyUser(user)"><a class="btn btn-success" type="button" >Modify</a></td>
            </tr>
        </tbody>
    </table>

    <button class="btn btn-info ms-2" v-on:click="previousPage">Previous</button>
    <button class="btn btn-info ms-5" v-on:click="nextPage">Next</button>

    <br>

    <button class="btn btn-success ms-2 mt-3" v-on:click="JSONDownload()">Download Data Json</button>

</template>

<script>
/**
 * La liste des données de l'api.
 */
import { mapActions, mapState } from 'vuex'

export default {
    name: 'List',
    data() {

        return {
            search: '',
            default_sort_name: '',
            default_sort_direction: 'asc',
            page_size: 10,
            page_current: 1
        }
        
    },
    computed: {
        /**
         * filterList permet de rechercher un nom d'une personne, ainsi que le trie et la pagination.
         */
        filterList(){
            return this.userList.filter(user => {
                return user.lastname.toLowerCase().includes(this.search.toLowerCase())
            }).sort((a, b) => {

                console.log(a)

                console.log(this.default_sort_name)

                console.log(this.get(a, this.default_sort_name))

                /**
                 * Notre variable qui permet de faire par ordre croissant et décroissant.
                 */
                let modifier = 1

                /**
                 * On teste si notre direction est appeller par ordre décroissant.
                 */
                if (this.default_sort_direction === 'desc') {
                    
                    //Si c'est vrai alors on part par ordre décroissant.
                    modifier = -1
                }

                /**
                 * Si l'une des tables est inférieur à celle de sont autre tables, alors on part en décroissant.
                 */
                if (this.get(a, this.default_sort_name) < this.get(b, this.default_sort_name)) {
                    
                    return -1 * modifier 
                }

                /**
                 * Sinon on repart on ordre croissant.
                 */
                if (this.get(a, this.default_sort_name) > this.get(b, this.default_sort_name)) {
                    
                    return 1 * modifier 
                }

                return 0

            }).filter((row, index) => {

                let start = (this.page_current-1) * this.page_size

                let end = this.page_current * this.page_size

                if (index >= start && index <= end) {
                    
                    return true
                }
            })
        },
        ...mapState(['updateToUser', 'userList'])
    },
    methods:{
        sort:function(sort) {

            if (sort === this.default_sort_name) {

                this.default_sort_direction = this.default_sort_direction === 'asc' ? 'desc' : 'asc'
            }

            this.default_sort_name = sort
        },
        nextPage: function(){

            if ((this.page_current * this.page_size) < this.userList.length) {
                
                this.page_current++
            }
        },
        previousPage: function() {
            
            if (this.page_current > 1) {
                
                this.page_current--
            }
        },
        modifyUser(user){
            this.$router.push({ name: 'Update', params: { id: user.id }})
            this.setUserToUpdate(user)
        },
        download: function(content, fileName, contentType) {

            const a = document.createElement("a")
            const file = new Blob([content], { type: contentType })
            a.href = URL.createObjectURL(file)
            a.download = fileName
            a.click()
        },
        JSONDownload: function(){

            this.download(JSON.stringify(this.userList), "UserModify.json", "text/plain")
        },
        get: function(object, path, definition){

            let stringToPath = function(path){

                if (typeof path !== 'string') {
                    
                    return path
                }

                let output = new Array()

                path.split('.').forEach(function (item) {

                    item.split(/\[([^}]+)\]/g).forEach(function (key){

                        if (key.length > 0) {
                            
                            output.push(key)
                        }
                    })
                })

                return output
            }
            
            path = stringToPath(path)

            let current = object;

            for (let i = 0; i < path.length; i++) {
                
                if (! current[path[i]]) {
                    
                    return definition
                }

                current = current[path[i]]
            }

            return current
        },
        ...mapActions(['setUserToUpdate'])
    },
    
}
</script>