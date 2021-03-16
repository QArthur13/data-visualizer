<template>
    <div>

        <h1 class="text-center">Modify</h1>

        <form>
            <!-- {{user}} -->
            <div class="mb-3">
                <label for="lastname">Last name:</label>
                <input type="text" class="form-control" id="lastname" name="lastname" v-model="user.lastname">
            </div>

            <div class="mb-3">
                <label for="firstname">First name:</label>
                <input type="text" class="form-control" id="firstname" name="firstname" v-model="user.firstname">
            </div>

        <div class="mb-3">
                <label for="gender">Gender:</label>
                <input type="text" class="form-control" id="gender" name="gender" v-model="user.gender">
            </div>

            <div class="mb-3">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" name="email" v-model="user.contact.email">
            </div>

            <div class="mb-3">
                <label for="address">Address:</label>
                <input type="text" class="form-control" id="address" name="address" v-model="user.contact.address">
            </div>

            <div class="mb-3">
                <label for="city">City:</label>
                <input type="text" class="form-control" id="city" name="city" v-model="user.contact.city">
            </div>

            <div class="mb-3">
                <label for="country">Country:</label>
                <input type="text" class="form-control" id="country" name="country" v-model="user.contact.country">
            </div>

            <div class="mb-3">
                <label for="lon">Longitude:</label>
                <input type="text" class="form-control" id="lon" name="lon" v-model="user.contact.location.lon">
            </div>

            <div class="mb-3">
                <label for="lat">Lattitude:</label>
                <input type="text" class="form-control" id="lat" name="lat" v-model="user.contact.location.lat">
            </div>

            <div class="mb-3">
                <label for="phone">Lattitude:</label>
                <input type="tel" class="form-control" id="phone" name="phone" v-model="user.contact.phone">
            </div>

            <div class="mb-3">
                <label for="favorite_pet">Favorite Pet:</label>
                <input type="text" class="form-control" id="favorite_pet" name="favorite_pet" v-model="user.preferences.favorite_pet"> 
            </div>

            <div class="mb-3">
                <label for="favorite_fruit">Favorite Fruit:</label>
                <input type="text" class="form-control" id="favorite_fruit" name="favorite_fruit" v-model="user.preferences.favorite_fruit">
            </div>

            <div class="mb-3">
                <label for="favorite_color">Favorite Color:</label>
                <input type="text" class="form-control" id="favorite_color" name="favorite_color" v-model="user.preferences.favorite_color">
            </div>

            <div class="mb-3">
                <label for="favorite_movie">Favorite Movie:</label>
                <input type="text" class="form-control" id="favorite_movie" name="favorite_movie" v-model="user.preferences.favorite_movie">
            </div>

            <div class="mb-3">
                <button class="btn btn-success" v-on:click="modifyData(user)">Update :)</button>
            </div>

        </form>
        
    </div>
</template>

<script>
/**
 * Mets à jour les données d'une colonne.
 * 
 * On fait aussi appelle à Vuex, pour pouvoir mieux sauvegarder et changer les données.
 */
import { mapActions, mapState } from 'vuex'

export default {
    
    name:'Update',

    data() {

        return{
            user: {}
        }
    },
    computed:{
        ...mapState(['userToUpdate'])
    },
    created(){
        this.user = this.userToUpdate;
    },
    methods:{
        modifyData(user){
            this.updateUser(user)
            this.$router.push({name: 'List'})
        },
        ...mapActions(['updateUser'])
    }
}
</script>