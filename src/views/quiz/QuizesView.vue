<script setup>
import { ref, watch } from 'vue';

import q from '../../data/quizes.json';
import Card from '../../components/quiz/Card.vue';
import RedirectButton from '../../components/common/RedirectButton.vue';

const quizes = ref(q);
const search = ref("")

// short syntax
watch(search, () => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})

/* full syntax
watch(search, function() {

  //quizes.value should be equal to ==> filtering q (data from json file), where we are passing each of the object from q to function
  // and in function we are checking that whether it contains the searched keyword return otherwise dont return it 

  quizes.value = q.filter(function(quiz){
    return quiz.name.toLowerCase().includes(search.value.toLowerCase())
  })
})

*/

</script>

<template>
    <div>
        <header>
            <div id="searchDiv">
                <h1>Quizes</h1>
                <input v-model.trim="search" type="text" placeholder="Search..." />
            </div>
            <div>
                <RedirectButton :path="'/'" :title="'Home'"/>
            </div>
        </header>
        <div class="options-container">
            <transition-group name="card" appear>
                <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
            </transition-group>
        </div>
    </div>
</template>

<style scoped>
header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#searchDiv {
    display: flex;
}

header h1 {
    font-weight: bold;
    margin-right: 30px;
}

header input {
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
}

.options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}

.btn {
    float: right;
    box-sizing: border-box;
    background-color: transparent;
    border: 2px solid red;
    border-radius: 0.6em;
    color: red;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    padding: 1em 2.8em;
    text-align: center;
    font-weight: 700;
    text-decoration: none;
}

.card-enter-from{
    transform: translateY(-50px);
    opacity: 0;
}
.card-enter-to{
    transform: translateY(0);
    opacity: 1;
}
.card-enter-active{
    transition: all 0.5s ease;
}
</style>
