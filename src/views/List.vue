<template>

    <input type="text" v-model="search" class="form-control" placeholder="Search a LastName">
    <table class="table table-bordered">
        <thead>
            <tr class="text-center" style="background-color: darkgreen; color:white">
                <th v-on:click="sort('id')">ID</th>
                <th v-on:click="sort('lastname')">Nom</th>
                <th v-on:click="sort('firstname')">Prénom</th>
                <th v-on:click="sort('gender')">Genre</th>
                <th v-on:click="sort('user.contact.email')">Email</th>
                <th v-on:click="sort('address')">Adresse</th>
                <th v-on:click="sort('contact.country')">Ville</th>
                <th>Pays</th>
                <th>Longitude</th>
                <th>Lattitude</th>
                <th>Téléphone</th>
                <th>Animal Préférer</th>
                <th>Fruit Préférer</th>
                <th>Couleur Préférer</th>
                <th>Film Préférer</th>
                <th>Modifier</th>
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
                <td v-on:click="modifyUser(user)"><a class="btn btn-warning" type="button" >Modify</a></td>
            </tr>
        </tbody>
    </table>

    <!-- <button class="btn btn-info ms-2" v-on:click="previousPage">Previous</button>
    <button class="btn btn-info ms-5" v-on:click="nextPage">Next</button> -->

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
            default_sort_name: 'lastname',
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
                if (a[this.default_sort_name] < b[this.default_sort_name]) {
                    
                    return -1 * modifier 
                }

                /**
                 * Sinon on repart on ordre croissant.
                 */
                if (a[this.default_sort_name] > b[this.default_sort_name]) {
                    
                    return 1 * modifier 
                }

                return 0

            })/* .filter((row, index) => {

                let start = (this.page_current-1) * this.page_size

                let end = this.page_current * this.page_size

                if (index >= start && index <= end) {
                    
                    return true
                }
            }) */
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

            if ((this.page_current * this.page_size) < this.user.length) {
                
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
        ...mapActions(['setUserToUpdate'])
    },
    
}
</script>