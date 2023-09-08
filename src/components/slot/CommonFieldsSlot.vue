<script setup>
import {defineProps} from 'vue';
const {name, date} = defineProps(["name", "date"]);
</script>
<template>
    <div>
        <h2> {{ name }}</h2>
        <h2> {{ date }}</h2>
        <slot></slot>
    </div>
</template>