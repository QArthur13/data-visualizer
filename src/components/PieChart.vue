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
                labels: ["Bouches-du-Rhone", "Var", "Alpes-Maritimes", "Alpes-de-Haute-Provence", "Vaucluse", "Hautes-Alpes"],
                datasets: [{
                    label: "PACA",
                    data: [2030360, 1070700, 1090220, 160070, 560790, 140700],
                    borderColor: [
                        'rgb(0, 0, 139)',
                        'rgb(0, 0, 255)',
                        'rgb(173, 216, 230)',
                        'rgb(165, 42, 42)',
                        'rgb(230, 230, 250)',
                        'rgb(139, 69, 19)'
                    ],
                    backgroundColor: [
                        'rgb(0, 0, 139)',
                        'rgb(0, 0, 255)',
                        'rgb(173, 216, 230)',
                        'rgb(165, 42, 42)',
                        'rgb(230, 230, 250)',
                        'rgb(139, 69, 19)'
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