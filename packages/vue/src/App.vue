<template>
  <div class="h-full">
    <AdminLayout
      :mode="layoutMode"
      :scroll-mode="scrollMode"
      :fixed-top="fixedTop"
      :header-visible="headerVisible"
      :tab-visible="tabVisible"
      :sider-visible="siderVisible"
      :sider-collapse="siderCollapse"
      :sider-collapsed-width="80"
      :full-content="full"
      :footer-visible="footerVisible"
      :footer-height="64"
      :fixed-footer="fixedFooter"
      :right-footer="rightFooter"
      class="bg-#f2f3f4"
    >
      <template #header>
        <div class="h-full p-2px bg-white rd-10px">
          <div class="card">Header</div>
        </div>
      </template>
      <template #tab>
        <div class="h-full p-2px bg-white rd-10px">
          <div class="card">Tab</div>
        </div>
      </template>
      <template #sider>
        <div class="h-full p-2px bg-white rd-12px">
          <div class="card">Sider</div>
        </div>
      </template>
      <template #footer>
        <div class="h-full p-2px bg-white rd-12px">
          <div class="card">Footer</div>
        </div>
      </template>
      <div class="rd-4px">
        <div v-for="i in 50" :key="i">{{ i }}</div>
      </div>
    </AdminLayout>
  </div>
  <div class="fixed left-400px top-120px h-480px overflow-auto px-12px whitespace-nowrap z-101">
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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBoolean } from './hooks';
import AdminLayout from './libs/admin-layout/index.vue';
import { LAYOUT_SCROLL_EL_ID } from './libs/admin-layout/shared';
import type { LayoutMode, ScrollMode } from './libs/admin-layout/types';

defineOptions({
  name: 'App'
});

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
  const dom = document.querySelector(`#${LAYOUT_SCROLL_EL_ID}`);
  dom?.scrollTo({ top: 100, behavior: 'smooth' });
}
</script>

<style scoped>
.card {
  @apply flex-center h-full b-1px b-solid b-#3491FA bg-#3491FA bg-opacity-20% rd-4px;
}
</style>
