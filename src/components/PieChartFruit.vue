<template>
<div class="chart-container">
    <canvas id="chart" width="200px" height="200px"></canvas>
</div>
</template>
<script>
import Chart from 'chart.js'

export default {
    
    data() {
        return {
        }
    },
    mounted (){
        console.log('MOUNTED => build chart')
        new Chart(document.getElementById('chart').getContext('2d'), {
            type:'pie',
            data: {
                labels: ["Apple", "Mango", "Orange", "Pear", "Pineapple", "Strawberry"],
                datasets: [{
                    label: "Favorite Fruit",
                    data: [18, 25, 22, 10, 20, 11],
                    borderColor: [
                        'rgb(173, 255, 47)',
                        'rgb(255, 215, 0)',
                        'rgb(255, 165, 0)',
                        'rgb(154, 205, 50)',
                        'rgb(255, 255, 0)',
                        'rgb(255, 0, 0)'
                    ],
                    backgroundColor: [
                        'rgb(173, 255, 47)',
                        'rgb(255, 215, 0)',
                        'rgb(255, 165, 0)',
                        'rgb(154, 205, 50)',
                        'rgb(255, 255, 0)',
                        'rgb(255, 0, 0)'
                    ],
                    borderWidth: 1
                }],
            },
        })
    }
        
}
</script>
<style>
.chart-container{
    display: block;
    position:relative;
    width: 400px;
    height: 400px;


}
</style>