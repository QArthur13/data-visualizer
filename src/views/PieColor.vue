<template>
    <div>
        <h3 class="text-center">List of favorite Color</h3>
        <pie-chart-color></pie-chart-color>
    </div>
</template>

<script>
import PieChartColor from '../components/PieChartColor.vue'

export default {
    components: {
        PieChartColor
    }
}
</script>