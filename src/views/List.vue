<template>
    <table class="table table-bordered">
        <thead>
            <tr>
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
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in list" :key="user.ID">
                <th>{{user.id}}</th>
                <th>{{user.lastname}}</th>
                <th>{{user.firstname}}</th>
                <th>{{user.gender}}</th>
                <th>{{user.contact.email}}</th>
                <th>{{user.contact.address}}</th>
                <th>{{user.contact.city}}</th>
                <th>{{user.contact.country}}</th>
                <th>{{user.contact.location.lon}}</th>
                <th>{{user.contact.location.lat}}</th>
                <th>{{user.contact.phone}}</th>
                <th>{{user.preferences.favorite_pet}}</th>
                <th>{{user.preferences.favorite_fruit}}</th>
                <th>{{user.preferences.favorite_color}}</th>
                <th>{{user.preferences.favorite_movie}}</th>
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