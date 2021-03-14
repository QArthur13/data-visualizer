<template>
    <div>
        <div id="border">

            <h1 class="display-1; text-center">Welcome to Arthur Data-visualizer :)</h1>
            <p>You can go to see the list where you can find some LastName and sort ID, Lastname, Firstanme and the gender.</p>
            <br>
            <p>Or you can see the Pie and the Bar.</p>
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