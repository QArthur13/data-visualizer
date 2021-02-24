<template>
    <table class="table table-bordered">
        <thead>
            <tr class="text-center" style="background-color: darkgreen; color:white">
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Genre</th>
                <th>Email</th>
                <th>Adresse</th>
                <th>Ville</th>
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
            <tr v-for="user in list" :key="user.ID">
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
                <td><router-link class="btn btn-warning" type="button" v-bind:to="{ name: 'Update', params: { name: user.id }}">Modify</router-link></td>
            </tr>
        </tbody>
    </table>

</template>

<script>
export default {
    name: 'List',
    data() {

        return{

            list: []
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