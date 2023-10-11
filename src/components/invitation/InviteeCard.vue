<script setup lang="ts">
import { defineProps } from "vue";

enum GENDER {
    MALE,
    FEMALE
}
// using typescript you can define props this way, and we havent defined single attribute props. we just add the annotation of the type we want to acccept.
defineProps<{
    invitee: {
        id: number,
        name: string,
        gender: GENDER,
    }
}>()

</script>

<template>
    <div :style="{ backgroundColor: invitee.gender === GENDER.MALE ? 'brown' : 'pink' }">
        {{ invitee.name }}
    </div>
</template>

<style scoped>
div {
    border-radius: 5px;
    margin-top: 5px;
    text-align: center;
    padding: 3px;
    color: white;
}
</style>