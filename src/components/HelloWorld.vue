<script setup>
import { ref } from "vue";
import 'mike-vue-ui/dist/index.css';

const count = ref(0);

const add = () => {
  count.value++;
};
</script>

<template>
  <button type="button" @click="add">count is {{ count }}</button>
</template>

<style scoped>
button {
  width: 200px;
  height: 50px;
}
</style>
