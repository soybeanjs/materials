<template>
  <div>
    <PageTabDemo v-if="showTab" />
    <AdminLayoutDemo v-else />
  </div>
</template>

<script setup lang="ts">
import AdminLayoutDemo from './demos/admin-layout.vue';
import PageTabDemo from './demos/page-tab.vue';

defineOptions({
  name: 'App'
});
const showTab = true;
</script>

<style scoped></style>
