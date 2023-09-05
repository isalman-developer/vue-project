<script setup>
import {useRouter} from 'vue-router';
import { defineProps } from 'vue';
const { path, title } = defineProps(["path", "title"]);
const router = useRouter();

const navigateBack = () => {
    if (path) {
        router.push(path);
    } else {
        router.go(-1);
    }
}

</script>

<template>
    <div>
        <RouterLink :to="path || ''" @click="navigateBack">{{ title || 'Back' }}</RouterLink>
    </div>
</template>