<script setup>
import {ref, reactive} from 'vue';

const red = ref(0);
const green = ref(0);
const blue = ref(0);
// you can declare these all as an object and in template you have to access it with object.key
// ref and reactive are similar in functionality but different in syntax.

const color = reactive({
    red : 0,
    green : 0,
    blue : 0,
})
</script>

<template>
    <main :style="{backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`}">
        <div>
        <input type="number" v-model="color.red" placeholder="red">
        <input type="number" v-model="color.green" placeholder="green">
        <input type="number" v-model="color.blue" placeholder="blue">
    </div>
    </main>
</template>

<style scoped>
main{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
div{
    display: flex;
    flex-direction: column;
}

input{
    margin: 10px 0px;
}
</style>