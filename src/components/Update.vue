<template>
    <h1 class="text-center">Modify</h1>

    <form action="#" v-for="user in list" :key="user.ID">

        <div class="mb-3">
            <label for="lastname">Last name:</label>
            <input type="text" class="form-control" id="lastname" name="lastname">{{user.lastname}}
        </div>

        <div class="mb-3">
            <label for="firstname">First name:</label>
            <input type="text" class="form-control" id="firstname" name="firstname">{{user.firstname}}
        </div>

        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" value="Female" id="gender" name="gender">
            <label class="form-check-label" for="gender">
                Female
            </label>
        </div>

        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" value="Male" id="gender" name="gender">
            <label class="form-check-label" for="gender">
                Male
            </label>
        </div>

        <div class="mb-3">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" name="email">{{user.contact.email}}
        </div>

        <div class="mb-3">
            <label for="address">Address:</label>
            <input type="text" class="form-control" id="address" name="address">{{user.contact.address}}
        </div>

        <div class="mb-3">
            <label for="city">City:</label>
            <input type="text" class="form-control" id="city" name="city">{{user.contact.city}}
        </div>

        <div class="mb-3">
            <label for="country">Country:</label>
            <input type="text" class="form-control" id="country" name="country">{{user.contact.country}}
        </div>

        <div class="mb-3">
            <label for="lon">Longitude:</label>
            <input type="text" class="form-control" id="lon" name="lon">{{user.contact.location.lon}}
        </div>

        <div class="mb-3">
            <label for="lat">Lattitude:</label>
            <input type="text" class="form-control" id="lat" name="lat">{{user.contact.location.lat}}
        </div>

        <div class="mb-3">
            <label for="phone">Lattitude:</label>
            <input type="tel" class="form-control" id="phone" name="phone">{{user.contact.phone}}
        </div>

        <div class="mb-3">
            <label for="favorite_pet">Favorite Pet:</label>
            <input type="text" class="form-control" id="favorite_pet" name="favorite_pet">{{user.preferences.favorite_pet}}
        </div>

        <div class="mb-3">
            <label for="favorite_fruit">Favorite Fruit:</label>
            <input type="text" class="form-control" id="favorite_fruit" name="favorite_fruit">{{user.preferences.favorite_fruit}}
        </div>

        <div class="mb-3">
            <label for="favorite_color">Favorite Color:</label>
            <input type="text" class="form-control" id="favorite_color" name="favorite_color">{{user.preferences.favorite_color}}
        </div>

        <div class="mb-3">
            <label for="favorite_movie">Favorite Movie:</label>
            <input type="text" class="form-control" id="favorite_movie" name="favorite_movie">{{user.preferences.favorite_movie}}
        </div>

        <div class="mb-3">
            <button class="btn btn-warning" type="submit" value="Submit"></button>
        </div>

    </form>

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