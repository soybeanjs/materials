<template>
  <div class="admin-layout-demo h-full">
    <AdminLayout
      :mode="layoutMode"
      :is-mobile="true"
      :scroll-mode="scrollMode"
      :fixed-top="fixedTop"
      :header-visible="headerVisible"
      header-class="py-16px pr-16px"
      :header-height="88"
      :tab-visible="tabVisible"
      tab-class="pb-16px pr-16px"
      :tab-height="64"
      :sider-visible="siderVisible"
      sider-class="p-16px"
      :sider-collapse="siderCollapse"
      :sider-collapsed-width="96"
      :full-content="full"
      :footer-visible="footerVisible"
      footer-class="py-16px pr-16px"
      :footer-height="80"
      :fixed-footer="fixedFooter"
      :right-footer="rightFooter"
      class="bg-#f2f3f4"
      @click-mobile-sider-mask="toggleSiderCollapse"
    >
      <template #header>
        <div class="h-full p-2px bg-white rd-12px">
          <div>Header</div>
        </div>
      </template>
      <template #tab>
        <div class="h-full p-2px bg-white rd-10px">
          <div>Tab</div>
        </div>
      </template>
      <template #sider>
        <div class="h-full p-2px bg-white rd-16px">
          <div>Sider</div>
        </div>
      </template>
      <template #footer>
        <div class="h-full p-2px bg-white rd-12px">
          <div>Footer</div>
        </div>
      </template>
      <div>
        <div v-for="i in 50" :key="i">{{ i }}</div>
      </div>
    </AdminLayout>
  </div>
  <div class="config-card fixed left-40px top-200px w-320px h-480px overflow-auto px-12px whitespace-nowrap z-101">
    <div class="flex">
      <div class="flex-1">
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
      </div>
      <div class="flex-1">
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
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-1/2 pt-24px">
        <span class="pr-8px">headerVisible</span>
        <input class="cursor-pointer" type="checkbox" :checked="headerVisible" @change="toggleHeaderVisible" />
      </div>
      <div class="w-1/2 pt-24px">
        <span class="pr-8px">tabVisible</span>
        <input class="cursor-pointer" type="checkbox" :checked="tabVisible" @change="toggleTabVisible" />
      </div>
      <div class="w-1/2 pt-24px">
        <span class="pr-8px">siderVisible</span>
        <input class="cursor-pointer" type="checkbox" :checked="siderVisible" @change="toggleSiderVisible" />
      </div>
      <div class="w-1/2 pt-24px">
        <span class="pr-8px">footerVisible</span>
        <input class="cursor-pointer" type="checkbox" :checked="footerVisible" @change="toggleFooterVisible" />
      </div>
      <div class="w-1/2 pt-24px">
        <span class="pr-8px">fixedTop</span>
        <input class="cursor-pointer" type="checkbox" :checked="fixedTop" @change="togglefixedTop" />
      </div>
      <div class="w-1/2 pt-24px">
        <span class="pr-8px">fixedFooter</span>
        <input class="cursor-pointer" type="checkbox" :checked="fixedFooter" @change="toggleFixedFooter" />
      </div>
      <div class="w-1/2 pt-24px">
        <span class="pr-8px">siderCollapse</span>
        <input class="cursor-pointer" type="checkbox" :checked="siderCollapse" @change="toggleSiderCollapse" />
      </div>
      <div class="pt-24px">
        <span class="pr-8px">rightFooter</span>
        <input class="cursor-pointer" type="checkbox" :checked="rightFooter" @change="toggleRightFooter" />
      </div>
      <div class="w-1/2 pt-24px">
        <span class="pr-8px">full content</span>
        <input class="cursor-pointer" type="checkbox" :checked="full" @change="toggleFull" />
      </div>
    </div>
    <div class="pt-24px">
      <button @click="scrollEl">滚动</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBoolean } from '../hooks';
import AdminLayout from '../libs/admin-layout/index.vue';
import { LAYOUT_SCROLL_EL_ID } from '../libs/admin-layout/shared';
import type { LayoutMode, ScrollMode } from '../libs/admin-layout/types';

defineOptions({
  name: 'AdminLayoutDemo'
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

<style lang="scss">
#__SCROLL_EL_ID__ {
  @include scrollbar(8px, #ccc);
}

.config-card {
  @include scrollbar(8px, #ccc);
}
</style>
