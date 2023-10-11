<script setup lang="ts">
import { ref } from "vue";
import InviteeCard from "../../components/invitation/InviteeCard.vue";
import {GENDER, Invitees} from '../../typeScript/types'

const name = ref<string>("");
const gender = ref<GENDER>(GENDER.MALE);
const invitees = ref<Invitees[]>([]);

const addInvitee = () => {
    if (name.value) {
        invitees.value.push({
            id: Math.floor(Math.random() * 100000),
            name: name.value,
            gender: gender.value
        })
        name.value = ""
        gender.value = GENDER.MALE
    }
}

</script>

<template>
    <div>
        <h1>Invitation App Using TypeScript</h1>
    </div>
    <main>
        <div class="input-container">
            <input type="text" placeholder="Enter Name" v-model="name" @keypress.enter="addInvitee">
            <select v-model="gender">
                <option :value="GENDER.MALE">MALE</option>
                <option :value="GENDER.FEMALE">FEMALE</option>
            </select>
            <div class="cards-container">
                <InviteeCard v-for="invitee in invitees" :key="invitee.id" :invitee="invitee" />
                <!-- we are passing whole object as props because in InviteeCard we have define props this way -->
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: antiquewhite;
}

input,
select {

    width: 100%;
    padding: 5px;
    margin-bottom: 2px;
}
</style>