<script setup>
import {inject} from "vue";

const numbers = inject("numbers");
const addNumber = () => {
    numbers.value.push(9)
}
</script>

<template>
    <div>
        <h1>Greate Grand Component {{ numbers }}</h1>
        <button @click="addNumber">Add 9</button>

        <div class="line"></div>
    </div>
</template>