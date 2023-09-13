<script setup>
import useNumberComposable from '../../composables/userNumbers';
const {numbers, filterNumber} = useNumberComposable()
</script>

<template>
    <div>
        <h4>Child Composable ==> {{ filterNumber(5) }} Filter Number greater than 5</h4> 
        <div class="line"></div>
    </div>
</template>