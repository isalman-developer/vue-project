<script setup>
import {ref, provide} from "vue";
import Child from "./Child.vue";

// using provide function, then you have to inject it in the required component ==> check GreatGrandChild.vue
const numbers = ref([1,2,3,4,5,6,7,8]);
provide("numbers", numbers);


</script>

<template>
    <div>
        <h1>Parent {{ numbers }}</h1>
        <div class="line"></div>
        <Child />
    </div>
</template>