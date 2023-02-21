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
  </div>
</template>

<script setup lang="ts">
import { AdminTab } from '@soybeanjs/vue-materials';

function handleClose() {
  console.log('点击关闭');
}
</script>

<style scoped></style>
