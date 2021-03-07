<template>

    <input type="text" v-model="search" class="form-control" placeholder="Search a LastName">
    <table class="table table-bordered">
        <thead>
            <tr class="text-center" style="background-color: darkgreen; color:white">
                <th v-on:click="sort('id')">ID</th>
                <th v-on:click="sort('lastname')">Nom</th>
                <th v-on:click="sort('firstname')">Prénom</th>
                <th v-on:click="sort('gender')">Genre</th>
                <th v-on:click="sort('contact.email')">Email</th>
                <th>Adresse</th>
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
                <td><router-link class="btn btn-warning" type="button" v-bind:to="{ name: 'Update', params: { id: user.id }}">Modify</router-link></td>
            </tr>
        </tbody>
    </table>

</template>

<script>
export default {
    name: 'List',
    data() {

        return {
            list: [],
            search: '',
            default_sort_name: 'user.',
            default_sort_direction: 'asc'
        }
        
    },
    computed: {
        filterList(){
            return this.list.filter(user => {
                return user.lastname.toLowerCase().includes(this.search.toLowerCase())
            }).sort((a, b) => {

                let modifier = 1

                if (this.default_sort_direction === 'desc') {
                    
                    modifier = -1
                }

                if (a[this.default_sort_name] < b[this.default_sort_name]) {
                    
                    return -1 * modifier 
                }

                if (a[this.default_sort_name] > b[this.default_sort_name]) {
                    
                    return 1 * modifier 
                }

                return 0
            })
        }
    },
    methods:{
        sort:function(sort) {

            if (sort === this.default_sort_name) {

                this.default_sort_direction = this.default_sort_direction === 'asc' ? 'desc' : 'asc'
            }

            this.default_sort_name = sort
        }
    },
    mounted() {
        fetch("https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7")
        .then(response => response.json())
        .then(data => {
            this.list = data.people;
        })
    }
}
</script>