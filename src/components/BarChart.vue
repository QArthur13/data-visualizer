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
            type:'bar',
            data: {
                labels: ["Bird", "Cat", "Dog", "Rat", "Apple", "Mango", "Orange", "Pear", "Pineapple", "Strawberry", "Blue", "Green", "Orange", "Red", "Yellow"],
                datasets: [{
                    label: "Female",
                    data: [12, 15, 12, 11, 9, 12, 9, 3, 12, 5, 10, 7, 9, 5, 9],
                    borderColor: [
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)'
                        
                    ],
                    backgroundColor: [
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)',
                        'rgb(255, 192, 203)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Male",
                    data: [15, 13, 11, 11, 8, 11, 11, 7, 7, 6, 10, 14, 4, 9, 6],
                    borderColor: [
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)'
                    ],
                    backgroundColor: [
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)'
                    ],
                    borderWidth: 1
                }],
            }
        })
    }
        
}
</script>
<style>
.chart-container{
    display: block;
    position:relative;
    width: 600px;
    height: 600px;


}
</style>