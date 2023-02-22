<template>
  <div class="flex gap-12px p-12px">
    <AdminTab mode="button" :closable="false">ButtonTab</AdminTab>
    <AdminTab mode="button" :active="true">ButtonTab</AdminTab>
    <AdminTab mode="button" @close="handleClose">ButtonTab</AdminTab>
  </div>

  <div class="flex gap-12px p-12px bg-#222222 text-white">
    <AdminTab mode="button" :dark-mode="true">ButtonTab</AdminTab>
    <AdminTab mode="button" :active="true" :dark-mode="true">ButtonTab</AdminTab>
  </div>
  <div class="flex p-12px">
    <AdminTab mode="chrome" :closable="false">ChromeTab</AdminTab>
    <AdminTab mode="chrome" :active="true">ChromeTab</AdminTab>
    <AdminTab mode="chrome">ChromeTab</AdminTab>
  </div>

  <div class="flex p-12px bg-#222222 text-white">
    <AdminTab mode="chrome" :dark-mode="true">ChromeTab</AdminTab>
    <AdminTab mode="chrome" :active="true" :dark-mode="true" @close="handleClose">ChromeTab</AdminTab>
    <AdminTab mode="chrome" :dark-mode="true" @close="handleClose">ChromeTab</AdminTab>
  </div>

  <div class="mt-12px p-12px" :class="{ '!bg-dark text-white': darkMode }">
    <AdminTab :mode="mode" :dark-mode="darkMode" @click="handleClickTab" @close="handleClose"> ChromeTab </AdminTab>
  </div>

  <div class="flex gap-12px p-12px">
    <button @click="handleMode('button')">切换为ButtonTab</button>
    <button @click="handleMode('chrome')">切换为ChromeTab</button>
    <button @click="setDarkMode(true)">切换为暗黑模式</button>
    <button @click="setDarkMode(false)">切换为亮色模式</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TabMode } from '@soybeanjs/vue-materials';
import { AdminTab } from '@soybeanjs/vue-materials';

function handleClickTab() {
  console.log('点击了Tab');
}
function handleClose() {
  console.log('点击关闭');
}

const mode = ref<TabMode>('chrome');

function handleMode(m: TabMode) {
  mode.value = m;
}

const darkMode = ref(false);
function setDarkMode(dark: boolean) {
  darkMode.value = dark;
}
</script>

<style scoped></style>
