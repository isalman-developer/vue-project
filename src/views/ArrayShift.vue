<script setup>
import { ref } from 'vue';

const names = ref(["Azan", "Talha"]);
const nameInput = ref("");

const addPerson = () => {
    // unshift enter new item at very first index
    names.value.unshift(nameInput.value);
    nameInput.value = "";
}

const removePerson = (name) => {
    names.value = names.value.filter(n => n !== name);
}
</script>

<template>
    <div id="parent">
        <div id="left">
            <h1>Array Shift</h1>
            it actually insert the new item at the very beginning of the Array.
        </div>
        <div id="right">
            <div class="container">
                <input type="text" v-model="nameInput" placeholder="Add person." @keypress.enter="addPerson">
                <ol>
                    <li v-for="name in names" :key="name" @click="removePerson(name)">{{ name }}</li>
                </ol>
            </div>

        </div>
    </div>
</template>
<style scoped>
#parent {
    display: flex;
    width: 100%;
}

#left {
    width: 50%;
    border-right: 1px solid red;
    min-height: 500px;
}

#right {
    height: 500px;
    max-width: 50%;
    margin: 0 auto;
}

#right input {
    width: 300px;
    border-radius: 5px;
    border: 1px solid rgba(128, 128, 128, 0.13);
    padding: 10px;
    margin-bottom: 20px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
}

ol {
    display: inline;
    margin: 0px;
    padding: 0px;
}

li {
    width: 300px;
    border-radius: 5px;
    padding: 5px 10px;
    margin-top: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
    text-align: center;
    cursor: pointer;
}
</style>
