<template>
    <div>
        <h3 class="text-center">List of favorite Animal</h3>
        <pie-chart-animal></pie-chart-animal>
    </div>
</template>

<script>
import PieChartAnimal from '../components/PieChartAnimal.vue'

export default {
    components: {
        PieChartAnimal,
    }
}
</script>