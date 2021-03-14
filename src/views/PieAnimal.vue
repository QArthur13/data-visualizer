<template>
    <div>
        <h3 class="text-center">List of favorite Animal</h3>
        <pie-chart-animal></pie-chart-animal>
    </div>
</template>

<script>
/**
 * Les PieChartAnimal, Color et Fruit permet de mettre un cammembert et de récupérer les données dans les components de chaque Pie.
 */
import PieChartAnimal from '../components/PieChartAnimal.vue'

export default {
    components: {
        PieChartAnimal,
    }
}
</script>