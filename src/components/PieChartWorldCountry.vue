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
                    "Argentina", "Bolivia", "Botswana", "Brazil", 
                    "Chile", "China", "Colombia" ,"Costa Rica", 
                    "Croatia", "Cyprus", "Czech Republic", "Egypt",
                    "Finland", "France", "Georgia", "Germany",
                    "Greece", "Indonesia", "Ireland", "Italy",
                    "Jamaica", "Japan", "Latvia", "Lithuania",
                    "Mexico", "Pakistan", "Peru", "Philippines",
                    "Poland", "Republic of the Congo", "Russia",
                    "South Africa", "South Korea", "Suriname",
                    "Sweden", "Syria", "Thailand", "Ukraine",
                    "United Kingdom", "United States", "Venezuela"
                    ],
                datasets: [{
                    label: "List of people where they lives",
                    data: [
                        1, 1, 1, 1,
                        3, 19, 1, 1,
                        1, 1, 2, 3,
                        1, 3, 2, 1,
                        1, 10, 1, 1,
                        2, 1, 1, 1,
                        4, 1, 5, 5,
                        7, 1, 6,
                        1, 1, 1,
                        2, 2, 5, 1,
                        2, 4, 4
                        ],
                    borderColor: [
                        'rgb(135, 206, 235)', 'rgb(255, 0, 0)', 'rgb(135, 206, 235)', 'rgb(0, 255, 0)', 
                        'rgb(255, 0, 0)', 'rgb(255, 0, 0)', 'rgb(255, 215, 0)' ,'rgb(255, 0, 0)', 
                        'rgb(255, 0, 0)', 'rgb(255, 215, 0)', 'rgb(0, 0, 255)', 'rgb(0, 0, 0)',
                        'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(0, 0, 0)',
                        'rgb(70, 130, 180)', 'rgb(255, 0, 0)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)'
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