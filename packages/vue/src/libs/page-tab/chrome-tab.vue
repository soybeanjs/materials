<template>
  <div
    :class="[
      ':soy: relative inline-flex justify-center items-center gap-16px -mr-18px px-24px py-6px cursor-pointer whitespace-nowrap',
      style['chrome-tab'],
      { [style['chrome-tab_dark']]: darkMode },
      { [style['chrome-tab_active']]: active },
      { [style['chrome-tab_active_dark']]: active && darkMode }
    ]"
  >
    <div :class="[':soy: absolute left-0 top-0 -z-1 w-full h-full pointer-events-none', style['chrome-tab__bg']]">
      <ChromeTabBg />
    </div>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="suffix"></slot>
    <div :class="[':soy: absolute right-7px w-1px h-16px bg-#1f2225', style['chrome-tab-divider']]"></div>
  </div>
</template>

<script setup lang="ts">
import ChromeTabBg from './chrome-tab-bg.vue';
import style from './index.module.css';
import type { TabProps } from './types';

defineOptions({
  name: 'ChromeTab'
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
