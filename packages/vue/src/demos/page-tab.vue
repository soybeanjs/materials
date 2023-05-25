<template>
  <div class="flex gap-12px p-12px">
    <PageTab mode="button" :closable="false">ButtonTab</PageTab>
    <PageTab mode="button" :active="true">ButtonTab</PageTab>
    <PageTab mode="button" @close="handleClose">ButtonTab</PageTab>
  </div>

  <div class="flex gap-12px p-12px bg-#222222 text-white">
    <PageTab mode="button" :dark-mode="true">ButtonTab</PageTab>
    <PageTab mode="button" :active="true" :dark-mode="true">ButtonTab</PageTab>
  </div>
  <div class="flex p-12px">
    <PageTab mode="chrome" :closable="false">ChromeTab</PageTab>
    <PageTab mode="chrome" :active="true">ChromeTab</PageTab>
    <PageTab mode="chrome">ChromeTab</PageTab>
  </div>

  <div class="flex p-12px bg-#222222 text-white">
    <PageTab mode="chrome" :dark-mode="true">ChromeTab</PageTab>
    <PageTab mode="chrome" :active="true" :dark-mode="true" @close="handleClose">ChromeTab</PageTab>
    <PageTab mode="chrome" :dark-mode="true" @close="handleClose">ChromeTab</PageTab>
  </div>

  <div class="mt-12px p-12px" :class="{ '!bg-dark text-white': darkMode }">
    <PageTab :mode="mode" :dark-mode="darkMode" @click="handleClickTab" @close="handleClose">ChromeTab</PageTab>
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
import { PageTab } from '../libs/page-tab';
import type { TabMode } from '../libs/page-tab';

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
