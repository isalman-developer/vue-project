<script setup>
import { ref } from "vue";
import Hero from "../../components/movies/Hero.vue";
import BreakingBadCardSuspense from '../../components/movies/BreakingBadCardSuspense.vue';
import RickAndMortySuspense from '../../components/movies/RickAndMortySuspense.vue';

const isBreakingBad = ref(false);
</script>
<template>
    <div>
        <!-- isBreakingBad is a prop which send data to Hero
            @selectShow is actually an emit from Hero, when it receives this emit, we toogle status isBreakingBad -->
        <Hero :isBreakingBad="isBreakingBad" @selectShow="isBreakingBad = !isBreakingBad" />
        <KeepAlive>
            <Component :is="isBreakingBad ? BreakingBadCardSuspense : RickAndMortySuspense" />
        </KeepAlive>
    </div>
</template>

<style scoped>
.cards {
    height: 700px;
    background-color: rgb(27, 26, 26);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>