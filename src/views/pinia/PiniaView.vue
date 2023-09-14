<script setup>
import ChildPinia from '../../components/pinia/ChildPinia.vue';
import { useNumbersStore } from '../../stores/numbersStore';
const { numbers, addNumber } = useNumbersStore();
</script>
<template>
    <div>
        <h1>Pinia</h1>
        <p>
            used for state management and allowing accessing data and states across the every components in the application.
        </p>
    </div>
    <div style="margin-top: 50px;">
        <h2>Parent Pinia</h2>
        <button @click="addNumber(10)">
            Add Number 10
        </button>

        <div class="line">
            {{ numbers }}
        </div>
        <span style="margin-left: 100px;">
            Here we are calling actions/functions from numbersStore
        </span>
    </div>

    <div style="margin-top: 50px;">
        <ChildPinia />
    </div>
</template>