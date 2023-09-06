<script setup>
import {defineProps} from 'vue';

const {totalQuestionsLength, correctAnswersLength} = defineProps(["totalQuestionsLength","correctAnswersLength"]);

</script>

<template>
    <!-- <RedirectButton /> -->
    <div class="results">
        <p>Your Results...</p>
        <h1>
            {{ correctAnswersLength }}/{{ totalQuestionsLength }}
        </h1>
    </div>
</template>

<style scoped>
    .results {
        text-align: center;
        padding: 100px 0;
    }

    p {
        font-size: 25px;
    }

    h1 {
        font-size: 80px;
    }
</style>