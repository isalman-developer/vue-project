<script setup>
import userNumber from '../../composables/userNumbers';
import ChildComposable from './ChildComposable.vue';

const { numbers, addNumber } = userNumber()
</script>
<template>
    <div>
        <h1>Composables</h1>
        <p>are like trait that can be used for the code reusability.</p>
    </div>
    <div style="margin-top: 50px;">
        <h4>Parent Component ==> {{ numbers }} <button @click="addNumber(10)">Add Number</button></h4>
        <div class="line"></div>
        <ChildComposable />

        <h4 style="margin-top: 40px;">
            if you look at the script tag of each component you will notice that i have defined addNumber or filterNumber function. but i have imported something called userNumber, which is a composables(trait)
        </h4>
    </div>

  <h1>Same thing has been done by <RouterLink to="pinia">Pinia</RouterLink> </h1>

</template>