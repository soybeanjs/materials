import { defineComponent, computed } from 'vue-demi';
import type { PropType, FunctionalComponent } from 'vue-demi';
import { initComponentProps } from '../../shared';
import type {
  LayoutMode,
  LayoutProps,
  ScrollMode,
  HeaderProps,
  TabProps,
  ContentProps,
  SiderProps,
  FooterProps
} from './type';

/** 头部组件 */
const AdminHeader: FunctionalComponent<HeaderProps> = (props, { slots }) => {
  return (
    props.visible && (
      <header
        class={[':soy: flex-shrink-0', props.class, { 'absolute top-0 left-0 w-full': props.fixed }]}
        style={{
          height: `${props.height}px`,
          paddingLeft: `${props.paddingLeft}px`
        }}
      >
        {slots.default?.()}
      </header>
    )
  );
};

/** Tab页签组件 */
const AdminTab: FunctionalComponent<TabProps> = (props, { slots }) => {
  return (
    props.visible && (
      <div
        class={[':soy: flex-shrink-0', props.class, { 'absolute left-0 w-full': props.fixed }]}
        style={{
          top: `${props.top}px`,
          height: `${props.height}px`,
          paddingLeft: `${props.paddingLeft}px`
        }}
      >
        {slots.default?.()}
      </div>
    )
  );
};

/** 侧边栏组件 */
const AdminSider: FunctionalComponent<SiderProps> = (props: SiderProps, { slots }) => {
  return (
    props.visible && (
      <aside
        class={[':soy: absolute left-0 top-0 h-full', props.class]}
        style={{
          width: `${props.width}px`,
          paddingTop: `${props.paddingTop}px`,
          paddingBottom: `${props.paddingBottom}px`
        }}
      >
        {slots.default?.()}
      </aside>
    )
  );
};

/** 主体内容组件 */
const LayoutContent: FunctionalComponent<ContentProps> = (props: ContentProps, { slots }) => {
  return (
    <main class={[':soy: flex flex-col flex-grow', props.class, { 'overflow-auto': props.overScroll }]}>
      {slots.default?.()}
    </main>
  );
};

/** 底部组件 */
const AdminFooter: FunctionalComponent<FooterProps> = (props, { slots }) => {
  return (
    props.visible && (
      <footer
        class={[':soy: flex-shrink-0', props.class, { 'absolute left-0 bottom-0 w-full': props.fixed }]}
        style={{
          height: `${props.height}px`,
          paddingLeft: `${props.paddingLeft}px`
        }}
      >
        {slots.default?.()}
      </footer>
    )
  );
};

/** 管理系统的布局组件 */
const AdminLayout = defineComponent<LayoutProps>({
  name: 'AdminLayout',
  setup(props, { slots }) {
    const siderWidth = computed(() => (props.siderCollapse ? props.siderCollapsedWidth : props.siderWidth));

    const topPlacementHeight = computed(() => {
      let h = props.headerVisible ? props.headerHeight || 0 : 0;
      if (props.tabVisible) {
        h += props.tabHeight || 0;
      }
      return props.fixedTop ? h : 0;
    });

    const tabTop = computed(() => (props.headerVisible ? props.headerHeight : 0));

    const footerPlacementHeight = computed(() => (props.footerVisible && props.fixedFooter ? props.footerHeight : 0));

    const containerPaddingLeft = computed(() => {
      let p = 0;

      if (props.mode === 'horizontal' && props.siderVisible) {
        p = props.siderCollapse ? props.siderCollapsedWidth || 0 : props.siderWidth || 0;
      }
      return p;
    });

    const tabPaddingLeft = computed(() => {
      let p = siderWidth.value || 0;

      if (!props.siderVisible || (props.mode === 'horizontal' && !props.fixedTop)) {
        p = 0;
      }

      return p;
    });

    const headerPaddingLeft = computed(() =>
      props.mode === 'horizontal' && props.siderVisible && props.fixedTop ? siderWidth.value : 0
    );

    const footerPaddingLeft = computed(() => {
      let p = 0;
      if (props.siderVisible) {
        if ((props.mode === 'horizontal' && props.fixedFooter) || (props.mode === 'vertical' && props.rightFooter)) {
          p = siderWidth.value || 0;
        }
      }

      return p;
    });

    const siderPaddingTop = computed(() => (props.mode === 'vertical' && props.headerVisible ? props.headerHeight : 0));
    const siderPaddingBottom = computed(() => {
      let p = 0;
      if (
        props.mode === 'vertical' &&
        props.footerVisible &&
        (props.scrollMode === 'content' || props.fixedFooter) &&
        !props.rightFooter
      ) {
        p = props.footerHeight || 0;
      }

      return p;
    });

    return () => (
      <div
        class={[':soy: relative h-full', props.commonClass]}
        style={{ paddingLeft: `${containerPaddingLeft.value}px` }}
      >
        <div class={[':soy: flex flex-col h-full', { 'overflow-auto': props.scrollMode === 'wrapper' }]}>
          <AdminHeader
            visible={props.headerVisible}
            fixed={props.fixedTop}
            class={[props.commonClass, props.headerClass]}
            height={props.headerHeight}
            paddingLeft={headerPaddingLeft.value}
          >
            {slots.header?.()}
          </AdminHeader>
          <AdminTab
            visible={props.tabVisible}
            fixed={props.fixedTop}
            top={tabTop.value}
            class={[props.commonClass, props.tabClass]}
            height={props.tabHeight}
            paddingLeft={tabPaddingLeft.value}
          >
            {slots.tab?.()}
          </AdminTab>
          <div class="flex-shrink-0 overflow-hidden" style={{ height: `${topPlacementHeight.value}px` }}></div>
          <AdminSider
            visible={props.siderVisible}
            class={[props.commonClass, props.siderClass]}
            width={siderWidth.value}
            paddingTop={siderPaddingTop.value}
            paddingBottom={siderPaddingBottom.value}
          >
            {slots.sider?.()}
          </AdminSider>
          <LayoutContent overScroll={props.scrollMode === 'content'} class={[props.commonClass, props.contentClass]}>
            {slots.default?.()}
          </LayoutContent>
          <AdminFooter
            visible={props.footerVisible}
            fixed={props.fixedFooter}
            class={[props.commonClass, props.footerClass]}
            height={props.footerHeight}
            paddingLeft={footerPaddingLeft.value}
          >
            {slots.footer?.()}
          </AdminFooter>
          {<div class="flex-shrink-0 overflow-hidden" style={{ height: `${footerPlacementHeight.value}px` }}></div>}
        </div>
      </div>
    );
  }
});

initComponentProps<LayoutProps>(AdminLayout, {
  mode: {
    type: String as PropType<LayoutMode>,
    default: 'horizontal'
  },
  scrollMode: {
    type: String as PropType<ScrollMode>,
    default: 'wrapper'
  },
  commonClass: {
    type: String,
    default: 'transition-all-300'
  },
  fixedTop: {
    type: Boolean,
    default: true
  },
  headerVisible: {
    type: Boolean,
    default: true
  },
  headerClass: {
    type: String,
    default: ''
  },
  headerHeight: {
    type: Number,
    default: 56
  },
  tabVisible: {
    type: Boolean,
    default: true
  },
  tabClass: {
    type: String,
    default: ''
  },
  tabHeight: {
    type: Number,
    default: 48
  },
  siderVisible: {
    type: Boolean,
    default: true
  },
  siderClass: {
    type: String,
    default: ''
  },
  siderCollapse: {
    type: Boolean,
    default: false
  },
  siderWidth: {
    type: Number,
    default: 220
  },
  siderCollapsedWidth: {
    type: Number,
    default: 64
  },
  contentClass: {
    type: String,
    default: ''
  },
  footerVisible: {
    type: Boolean,
    default: true
  },
  footerClass: {
    type: String,
    default: ''
  },
  fixedFooter: {
    type: Boolean,
    default: true
  },
  footerHeight: {
    type: Number,
    default: 48
  },
  rightFooter: {
    type: Boolean,
    default: false
  }
});

export { AdminLayout };
