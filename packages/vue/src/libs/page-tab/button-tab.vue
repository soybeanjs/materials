<template>
  <div
    :class="[
      ':soy: relative inline-flex justify-center items-center gap-12px px-12px py-4px border-1px border-solid rounded-4px cursor-pointer whitespace-nowrap',
      style['button-tab'],
      { [style['button-tab_dark']]: darkMode },
      { [style['button-tab_active']]: active },
      { [style['button-tab_active_dark']]: active && darkMode }
    ]"
  >
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="suffix"></slot>
  </div>
</template>

<script setup lang="ts">
import style from './index.module.css';
import type { TabProps } from './types';

defineOptions({
  name: 'ButtonTab'
});

defineProps<TabProps>();

type SlotFn = (props?: Record<string, unknown>) => any;

type Slots = {
  /** 插槽：Tab中间内容 */
  default?: SlotFn;
  /** 插槽: Tab前缀 */
  prefix?: SlotFn;
  /** 插槽: Tab后缀 */
  suffix?: SlotFn;
};
defineSlots<Slots>();
</script>

<style scoped></style>
