<script setup>
import MovieCards from "../../components/movies/MovieCards.vue";
</script>
<template>
    <div>
        <h2>Heros</h2>
        <Suspense>
            <template #default>
                <MovieCards />
            </template>
            <template #fallback>
                <div class="cards">
                    <n-space>
                        <n-spin size="large" />
                    </n-space>
                </div>
            </template>
        </Suspense>
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