<template>
  <component :is="activeTabComponent.component" :class="activeTabComponent.class" :style="cssVars" v-bind="bindProps">
    <template #prefix>
      <slot name="prefix"></slot>
    </template>
    <slot></slot>
    <template #suffix>
      <slot name="suffix">
        <IconClose v-if="closable" :class="[style['icon-close']]" @click="handleClose" />
      </slot>
    </template>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Component } from 'vue';
import { createTabCssVars, ACTIVE_COLOR } from './shared';
import ChromeTab from './chrome-tab.vue';
import ButtonTab from './button-tab.vue';
import IconClose from './icon-close.vue';
import style from './index.module.css';
import type { TabProps, TabMode } from './types';

defineOptions({
  name: 'PageTab'
});

const props = withDefaults(defineProps<TabProps>(), {
  mode: 'chrome',
  commonClass: 'transition-all-300',
  activeColor: ACTIVE_COLOR,
  closable: true
});

interface Emits {
  (e: 'close'): void;
}

const emit = defineEmits<Emits>();

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

const activeTabComponent = computed(() => {
  const { mode, chromeClass, buttonClass } = props;

  const tabComponentMap = {
    chrome: {
      component: ChromeTab,
      class: chromeClass
    },
    button: {
      component: ButtonTab,
      class: buttonClass
    }
  } satisfies Record<TabMode, { component: Component; class?: string }>;

  return tabComponentMap[mode];
});

const cssVars = computed(() => createTabCssVars(props.activeColor));

const bindProps = computed(() => {
  const { chromeClass: _chromeCls, buttonClass: _btnCls, ...rest } = props;

  return rest;
});

function handleClose() {
  emit('close');
}
</script>

<style scoped></style>
