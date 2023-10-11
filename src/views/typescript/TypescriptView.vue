<script setup lang="ts">
import { ref } from "vue";
const number = ref(0);

// using TS, declaring variable and then re assigning the values will throw warning.
let name = "Azan";
let age = 5;
let occupation = "Student";
occupation = false;

// we can add annotation to each of the variable so that we will know which values to be assigned
let name2: string = "Ahmad";
let age2: number = 5;
let occupation2: boolean = true;

//===================================== array notation starts ==============================================================
// array annotation, will only take NUMBER, down we pass the string which throws warning
let arrayOf: number[] = [];
arrayOf.push(10);
arrayOf.push("Talha"); //this array only stores numbers

// array notaion, will take string, number and boolean, when we push the data it won't throw warnings
let mixArray: (string | number | boolean | [])[] = [];
mixArray.push("Azan");
mixArray.push(true);
mixArray.push(30);
mixArray.push([]);
mixArray.push([1, 2]);
//===================================== array notation ends ==============================================================
// ============================================object annotation starts==========================================================
const person: {
    name: string,
    age: number,
    skill?: string, // skill will either be undefined or string
} = {
    name: "Salman",
    age: 25,
}

//can assign or edit values but according to annotated types
person.age = 27;
person.skill = "Web";

//can add new data but will get the error as they are not defined while we define the person object
person.occupation = "Job";


// another way to add annotation using interface and enum
enum GENDER {
    MALE,
    FEMALE
}

interface personAnnotation {
    name : string,
    age : number,
    gender : GENDER,
    adult : boolean
} 
const person1 : personAnnotation = {
    name : "Ahmad",
    age : 2,
    adult : false,
    gender : GENDER.MALE
}
// ============================================object annotation ends==========================================================
</script>

<template>
    <div>
        <h1>Type Script</h1>
        <p>
            it allows you specifying the types of data being passed around within the code, and has the ability to report
            errors when the types don't match.
        </p>

        <h3 style="margin: 10px 0px; font-style: italic !important; font-weight: bold;">
            it only thorws error in IDE, but the code will work.
        </h3>

        <div style="margin: 20px 0px;">
            When you declare a state as string and later you assign integer to it, then you will note a warning in editor
            explaining something related to type.
        </div>

        <p>
            Kindly enter number 100
        </p>

        <input type="number" v-model="number">

        <p v-if="number === 100">
            You have enter the correct number.
        </p>

        <h1>Check Code For Full Explaination.</h1>
    </div>
</template>