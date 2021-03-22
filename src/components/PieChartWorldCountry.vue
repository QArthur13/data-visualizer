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
                labels: [
                    "Antilles", "Central Africa", "Central America", "Eastern Europe", 
                    "East Asia", "North Africa", "North America" ,"North Asia", 
                    "Northern Europe", "Western Asia", "Western Europe", "South America",
                    "South Asia", "Southeast Asia", "Southern Africa", "Southern Europe"
                    ],
                datasets: [{
                    label: "List of people where they lives",
                    data: [27, 28, 23, 22],
                    borderColor: [
                        'rgb(0, 0, 255)',
                        'rgb(0, 255, 255)',
                        'rgb(0, 100, 0)',
                        'rgb(255, 0, 0)'
                    ],
                    backgroundColor: [
                        'rgb(0, 0, 255)',
                        'rgb(0, 255, 255)',
                        'rgb(0, 100, 0)',
                        'rgb(255, 0, 0)',
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