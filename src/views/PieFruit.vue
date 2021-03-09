<template>
    <div>
        <h3 class="text-center">List of favorite Fruit</h3>
        <pie-chart-fruit></pie-chart-fruit>
    </div>
</template>

<script>
import PieChartFruit from '../components/PieChartFruit.vue'

export default {
    components: {
        PieChartFruit,
    }
}
</script>