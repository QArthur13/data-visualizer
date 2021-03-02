<template>
    <div>
        <div id="border">

            <h1 class="display-1; text-center">Welcome</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius, reprehenderit fugit sequi, quo, laborum voluptatum adipisci inventore natus doloremque repellat sunt id nisi deserunt quas animi tenetur voluptates labore.</p>
            <p class="fst-italic">{{ text }}</p>

        </div>
    </div>

</template>

<script>
export default {
    name: 'Home',

    data(){

        return{

            text: 'End :)'
        }
    }
}
</script>

<style>
    #border {

        margin-top: 30px;
        background-color: silver;
    }
</style>