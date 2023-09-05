<script setup>
import Question from "../components/Question.vue"
import QuizHeader from "../components/QuizHeader.vue"
import Result from '../components/Result.vue'
import { useRoute } from "vue-router"
import { computed, ref } from "vue";
import quizes from "../data/quizes.json"
import RedirectButton from "../components/RedirectButton.vue";

const route = useRoute()
const quizId = parseInt(route.params.id);
const quiz = quizes.find(q => q.id === quizId)
const currentQuestionIndex = ref(0);

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`);
const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length * 100}%`);
const numberOfCorrectAnswers = ref(0);

const getEmittedValue = (isCorrect) => {
    // if answer is corrent increse the number of accurate answers
    if(isCorrect){
        numberOfCorrectAnswers.value++;
    }

    // whether the question is wrong or correct move to the next question
    currentQuestionIndex.value++;
}
</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
        <div>
            <Question
                v-if="currentQuestionIndex < quizes.length" 
                :question="quiz.questions[currentQuestionIndex]" 
                @selectedOptionEmit="getEmittedValue"
            />

            <!-- when you want to listen to emmit, call it with @emit-name in child component, here emit-name is selectedOptionEmit in Question.vue -->
            <Result 
                v-else
                :totalQuestionsLength="quizes.length"
                :correctAnswersLength="numberOfCorrectAnswers"
                />
        </div>
        
    </div>
</template>
