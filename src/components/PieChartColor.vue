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
                labels: ["Blue", "Green", "Orange", "Red", "Yellow"],
                datasets: [{
                    label: "Favorite Color",
                    data: [21, 23, 14, 15, 16],
                    borderColor: [
                        'rgb(0, 0, 255)',
                        'rgb(0, 255, 0)',
                        'rgb(255, 165, 0)',
                        'rgb(255, 0, 0)',
                        'rgb(255, 255, 0)'
                    ],
                    backgroundColor: [
                        'rgb(0, 0, 255)',
                        'rgb(0, 255, 0)',
                        'rgb(255, 165, 0)',
                        'rgb(255, 0, 0)',
                        'rgb(255, 255, 0)'
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