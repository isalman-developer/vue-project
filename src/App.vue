<script setup>
import q from './data/quizes.json';
import {ref, watch} from 'vue';
import Card from './components/Card.vue'

const quizes = ref(q);
const search = ref("")

// short syntax
watch(search, ()=> {
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
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..." />
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" :salman="quiz.id"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
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

</style>
