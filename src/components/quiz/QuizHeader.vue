<script setup>
import { defineProps } from "vue";
import RedirectButton from "../common/redirectbutton.vue";

const { questionStatus, barPercentage } = defineProps([
    "questionStatus",
    "barPercentage",
]);

</script>

<template>
    <header>
        <div style="display: flex; justify-content: space-between;">
            <h4>Question {{ questionStatus }}</h4>
            <RedirectButton />
        </div>
        
        <div class="bar">
            <div class="completion" :style="{ width: barPercentage }"></div>
        </div>
    </header>
</template>

<style scoped>
header {
    margin-top: 20px;
}

header h4 {
    width: 25%;
    font-size: 30px;
}

.bar {
    width: 300px;
    height: 50px;
    border: 3px solid bisque;
}

.completion {
    height: 100%;
    width: 0%;
    background-color: bisque;
}
</style>
