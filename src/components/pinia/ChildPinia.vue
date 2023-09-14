
<script setup>
import {useNumbersStore} from '../../stores/numbersStore';
const {numbers, filterNumbers} = useNumbersStore();
</script>
<template>
    <div>
        <h2>Child Pinia</h2>
        <div class="line">
            {{ filterNumbers(5) }}
        </div>
        <span style="margin-left: 100px;">Here we are calling getter methods, filterNumbers </span>
    </div>
</template>