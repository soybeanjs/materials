<template>
  <div class="flex gap-12px p-12px">
    <AdminTab mode="button">ButtonTab</AdminTab>
    <AdminTab mode="button" :active="true">ButtonTab</AdminTab>
  </div>

  <div class="flex gap-12px p-12px bg-#18181c text-white">
    <AdminTab mode="button" :dark-mode="true">ButtonTab</AdminTab>
    <AdminTab mode="button" :active="true" :dark-mode="true">ButtonTab</AdminTab>
  </div>
</template>

<script setup lang="ts">
import { AdminTab } from '@soybeanjs/vue-materials';
</script>

<style scoped></style>
