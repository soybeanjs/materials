<template>
  <div :class="[':soy: relative h-full', commonClass]" :style="cssVars">
    <div
      :id="isWrapperScroll ? scrollElId : undefined"
      :class="[
        ':soy: flex flex-col h-full',
        commonClass,
        scrollWrapperClass,
        { ':soy: overflow-y-auto': isWrapperScroll }
      ]"
    >
      <!-- 头部 -->
      <template v-if="showHeader">
        <header
          v-show="!fullContent"
          :class="[
            style['layout-header'],
            ':soy: flex-shrink-0',
            commonClass,
            headerClass,
            headerLeftGapClass,
            { ':soy: absolute top-0 left-0 w-full': fixedHeaderAndTab }
          ]"
        >
          <slot name="header"></slot>
        </header>
        <div
          v-show="!fullContent && fixedHeaderAndTab"
          :class="[style['layout-header-placement'], ':soy: flex-shrink-0 overflow-hidden']"
        ></div>
      </template>

      <!-- 页签 -->
      <template v-if="showTab">
        <div
          v-show="!fullContent"
          :class="[
            style['layout-tab'],
            ':soy: flex-shrink-0',
            commonClass,
            tabClass,
            { 'top-0!': !showHeader },
            leftGapClass,
            { ':soy: absolute left-0 w-full': fixedHeaderAndTab }
          ]"
        >
          <slot name="tab"></slot>
        </div>
        <div
          v-show="!fullContent && fixedHeaderAndTab"
          :class="[style['layout-tab-placement'], ':soy: flex-shrink-0 overflow-hidden']"
        ></div>
      </template>

      <!-- 侧边栏 -->
      <template v-if="showSider">
        <aside
          v-show="!fullContent"
          :class="[
            ':soy: absolute left-0 top-0 h-full',
            commonClass,
            siderClass,
            siderPaddingClass,
            siderCollapse ? style['layout-sider_collapsed'] : style['layout-sider']
          ]"
        >
          <slot name="sider"></slot>
        </aside>
      </template>

      <!-- 移动端的侧边栏 -->
      <template v-if="showMobileSider">
        <aside
          :class="[
            ':soy: absolute left-0 top-0 w-0 h-full bg-white',
            commonClass,
            mobileSiderClass,
            style['layout-mobile-sider'],
            siderCollapse ? 'overflow-hidden' : style['layout-sider']
          ]"
        >
          <slot name="sider"></slot>
        </aside>
        <div
          :class="[':soy: absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.2)]', style['layout-mobile-sider-mask']]"
        ></div>
      </template>

      <!-- 主体 -->
      <main
        :id="isContentScroll ? scrollElId : undefined"
        :class="[
          ':soy: flex flex-col flex-grow',
          commonClass,
          contentClass,
          leftGapClass,
          { ':soy: overflow-y-auto': isContentScroll }
        ]"
      >
        <slot></slot>
      </main>

      <!-- 底部 -->
      <template v-if="showFooter">
        <footer
          v-show="!fullContent"
          :class="[
            style['layout-footer'],
            ':soy: flex-shrink-0',
            commonClass,
            footerClass,
            footerLeftGapClass,
            { ':soy: absolute left-0 bottom-0 w-full': fixedFooter }
          ]"
        >
          <slot name="footer"></slot>
        </footer>
        <div
          v-show="!fullContent && fixedFooter"
          :class="[style['layout-footer-placement'], ':soy: flex-shrink-0 overflow-hidden']"
        ></div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { LayoutProps } from './types';
import { LAYOUT_SCROLL_EL_ID, LAYOUT_MAX_Z_INDEX, createLayoutCssVars } from './shared';
import style from './index.module.css';

defineOptions({
  name: 'AdminLayout'
});

const props = withDefaults(defineProps<LayoutProps>(), {
  mode: 'vertical',
  scrollMode: 'content',
  scrollElId: LAYOUT_SCROLL_EL_ID,
  commonClass: 'transition-all-300',
  fixedTop: true,
  maxZIndex: LAYOUT_MAX_Z_INDEX,
  headerVisible: true,
  headerHeight: 56,
  tabVisible: true,
  tabHeight: 48,
  siderVisible: true,
  siderCollapse: false,
  siderWidth: 220,
  siderCollapsedWidth: 64,
  footerVisible: true,
  footerHeight: 48,
  rightFooter: false
});

type SlotFn = (props?: Record<string, unknown>) => any;

type Slots = {
  /** 插槽：主体 */
  default?: SlotFn;
  /** 插槽：头部 */
  header?: SlotFn;
  /** 插槽：页签 */
  tab?: SlotFn;
  /** 插槽：侧边栏 */
  sider?: SlotFn;
  /** 插槽：底部 */
  footer?: SlotFn;
};
const slots = defineSlots<Slots>();

/** CSS 变量 */
const cssVars = computed(() => createLayoutCssVars(props));

// 各部分的可见性
const showHeader = computed(() => Boolean(slots.header) && props.headerVisible);
const showTab = computed(() => Boolean(slots.tab) && props.tabVisible);
const showSider = computed(() => !props.isMobile && Boolean(slots.sider) && props.siderVisible);
const showMobileSider = computed(() => props.isMobile && Boolean(slots.sider) && props.siderVisible);
const showFooter = computed(() => Boolean(slots.footer) && props.footerVisible);

// 滚动模式
const isWrapperScroll = computed(() => props.scrollMode === 'wrapper');
const isContentScroll = computed(() => props.scrollMode === 'content');

// 布局模式：水平、垂直
const isVertical = computed(() => props.mode === 'vertical');
const isHorizontal = computed(() => props.mode === 'horizontal');

/** 固定头部和页签 */
const fixedHeaderAndTab = computed(() => props.fixedTop || (isHorizontal.value && isWrapperScroll.value));

// class样式

const leftGapClass = computed(() => {
  if (!props.fullContent && showSider.value) {
    return props.siderCollapse ? style['left-gap_collapsed'] : style['left-gap'];
  }

  return '';
});

const headerLeftGapClass = computed(() => (isVertical.value ? leftGapClass.value : ''));

const footerLeftGapClass = computed(() => {
  const condition1 = isVertical.value;
  const condition2 = isHorizontal.value && isWrapperScroll.value && !props.fixedFooter;
  const condition3 = Boolean(isHorizontal.value && props.rightFooter);

  if (condition1 || condition2 || condition3) {
    return leftGapClass.value;
  }

  return '';
});

const siderPaddingClass = computed(() => {
  let cls = '';

  if (showHeader.value && !headerLeftGapClass.value) {
    cls += style['sider-padding-top'];
  }
  if (showFooter.value && !footerLeftGapClass.value) {
    cls += ` ${style['sider-padding-bottom']}`;
  }

  return cls;
});
</script>

<style scoped></style>
