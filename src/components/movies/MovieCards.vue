<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import MovieCard from './MovieCard.vue';

const characters = ref(null);
const page = ref(1);

const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page.value}`);
characters.value = response.data.results;

watch(page, async () => {
    const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${page.value}`);
    characters.value = res.data.results;
})

</script>
<template>
    <div class="container">
        <div class="cards">
            <MovieCard v-for="character in characters" :key="character.id" :image="character.image" :name="character.name">
                <!-- slot -->
                <p>
                    {{ character.origin.name == 'unknown' ? character.location.name : character.origin.name }}
                </p>
            </MovieCard>
        </div>
        <div class="button-container">
            <button @click="page--">&lt;</button>
            <button @click="page++">&gt;</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: rgb(27, 26, 26);
    padding: 30px
}

.cards {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}

.cards h3 {
    font-weight: bold;
}

.cards p {
    font-size: 10px;
}

.button-container {
    display: flex;
    justify-content: center;
    padding-top: 30px
}

.button-container button {
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 0 5px;
    cursor: pointer;
}
</style>