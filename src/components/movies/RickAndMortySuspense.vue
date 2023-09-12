<script setup>
import MovieCards from "../movies/MovieCards.vue";
</script>

<template>
    <div>
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