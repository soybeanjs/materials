<template>
  <div>
    <h3 class="text-red">App</h3>
    <admin-layout />
    <button @click="toggleMode('chrome')">切换chrome</button>
    <button @click="toggleMode('button')">切换button</button>
    <div>{{ mode }}</div>
    <admin-tab mode="button" class="mr-10px" />
    <admin-tab mode="button" class="mr-10px" />
    <admin-tab mode="button" :is-active="true" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AdminLayout, AdminTab } from '@soybeanjs/vue-materials';
import type { AdminTabMode } from '@soybeanjs/vue-materials';
// import '@soybeanjs/vue-materials/dist/style.css';

const mode = ref<AdminTabMode>('chrome');

function toggleMode(val: AdminTabMode) {
  mode.value = val;
}
</script>

<style scoped></style>
