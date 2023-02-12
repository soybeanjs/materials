<template>
  <admin-layout
    :mode="layoutMode"
    :scroll-mode="scrollMode"
    :fixed-top="fixedTop"
    :header-visible="headerVisible"
    :tab-visible="tabVisible"
    :sider-visible="siderVisible"
    :sider-collapse="siderCollapse"
    :full-content="full"
    :footer-visible="footerVisible"
    :fixed-footer="fixedFooter"
    :right-footer="rightFooter"
  >
    <template v-if="headerVisible" #header>
      <div class="h-full p-2px">
        <div class="card">Header</div>
      </div>
    </template>
    <template #tab>
      <div class="h-full p-2px">
        <div class="card">Tab</div>
      </div>
    </template>
    <template #sider>
      <div class="h-full p-2px">
        <div class="card">Sider</div>
      </div>
    </template>
    <template #footer>
      <div class="h-full p-2px">
        <div class="card">Footer</div>
      </div>
    </template>
    <div>
      <div v-for="i in 50" :key="i" class="bg-#ddd">{{ i }}</div>
    </div>
  </admin-layout>
  <div class="fixed right-0 top-120px h-480px overflow-auto px-12px whitespace-nowrap">
    <div class="font-bold">layoutMode:</div>
    <div v-for="item in layoutModeList" :key="item">
      <span class="pr-8px">{{ item }}</span>
      <input
        type="radio"
        name="layoutMode"
        :value="item"
        :checked="item === layoutMode"
        class="cursor-pointer"
        @change="setLayoutMode(item)"
      />
    </div>
    <div class="font-bold">scrollMode:</div>
    <div v-for="item in scrollModeList" :key="item">
      <span class="pr-8px">{{ item }}</span>
      <input
        type="radio"
        name="scrollMode"
        :value="item"
        :checked="item === scrollMode"
        class="cursor-pointer"
        @change="setScrollMode(item)"
      />
    </div>
    <div class="pt-24px">
      <span class="pr-8px">headerVisible</span>
      <input class="cursor-pointer" type="checkbox" :checked="headerVisible" @change="toggleHeaderVisible" />
    </div>
    <div class="pt-24px">
      <span class="pr-8px">tabVisible</span>
      <input class="cursor-pointer" type="checkbox" :checked="tabVisible" @change="toggleTabVisible" />
    </div>
    <div class="pt-24px">
      <span class="pr-8px">siderVisible</span>
      <input class="cursor-pointer" type="checkbox" :checked="siderVisible" @change="toggleSiderVisible" />
    </div>
    <div class="pt-24px">
      <span class="pr-8px">footerVisible</span>
      <input class="cursor-pointer" type="checkbox" :checked="footerVisible" @change="toggleFooterVisible" />
    </div>
    <div class="pt-24px">
      <span class="pr-8px">fixedTop</span>
      <input class="cursor-pointer" type="checkbox" :checked="fixedTop" @change="togglefixedTop" />
    </div>
    <div class="pt-24px">
      <span class="pr-8px">fixedFooter</span>
      <input class="cursor-pointer" type="checkbox" :checked="fixedFooter" @change="toggleFixedFooter" />
    </div>
    <div class="pt-24px">
      <span class="pr-8px">siderCollapse</span>
      <input class="cursor-pointer" type="checkbox" :checked="siderCollapse" @change="toggleSiderCollapse" />
    </div>
    <div class="pt-24px">
      <span class="pr-8px">rightFooter</span>
      <input class="cursor-pointer" type="checkbox" :checked="rightFooter" @change="toggleRightFooter" />
    </div>
    <div class="pt-24px">
      <span class="pr-8px">full content</span>
      <input class="cursor-pointer" type="checkbox" :checked="full" @change="toggleFull" />
    </div>
    <div class="pt-24px">
      <button @click="scrollEl">滚动</button>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBoolean } from './hooks';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AdminLayout, AdminTab, SCROLL_EL_ID } from '@soybeanjs/vue-materials';
import type { LayoutMode, ScrollMode } from '@soybeanjs/vue-materials';

const layoutMode = ref<LayoutMode>('vertical');
const layoutModeList: LayoutMode[] = ['vertical', 'horizontal'];
function setLayoutMode(value: LayoutMode) {
  layoutMode.value = value;
}

const scrollMode = ref<ScrollMode>('wrapper');
const scrollModeList: ScrollMode[] = ['wrapper', 'content'];
function setScrollMode(value: ScrollMode) {
  scrollMode.value = value;
}

const { bool: headerVisible, toggle: toggleHeaderVisible } = useBoolean(true);
const { bool: tabVisible, toggle: toggleTabVisible } = useBoolean(true);
const { bool: siderVisible, toggle: toggleSiderVisible } = useBoolean(true);
const { bool: footerVisible, toggle: toggleFooterVisible } = useBoolean(true);
const { bool: fixedTop, toggle: togglefixedTop } = useBoolean(true);
const { bool: fixedFooter, toggle: toggleFixedFooter } = useBoolean(true);
const { bool: siderCollapse, toggle: toggleSiderCollapse } = useBoolean(true);
const { bool: rightFooter, toggle: toggleRightFooter } = useBoolean();
const { bool: full, toggle: toggleFull } = useBoolean();

function scrollEl() {
  const dom = document.querySelector(`#${SCROLL_EL_ID}`);
  dom?.scrollTo({ top: 100, behavior: 'smooth' });
}
</script>

<style scoped>
.card {
  @apply flex-center h-full b-1px b-solid b-#3491FA bg-#3491FA bg-opacity-20% rd-4px;
}
</style>
