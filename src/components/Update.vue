<template>
    <h1 class="text-center">Bonjour</h1>

    <div v-for="user in list" :key="user.ID">

        <label for="lastname">Last name:</label>
        <input type="text" class="form-control" id="lastname">{{user.lastname}}

    </div>

</template>

<script>
export default {
    
    name:'Update',

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