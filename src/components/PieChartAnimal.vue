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
                labels: ["Bird", "Cat", "Dog", "Rat"],
                datasets: [{
                    label: "Favorite Animals",
                    data: [29, 30, 25, 24],
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