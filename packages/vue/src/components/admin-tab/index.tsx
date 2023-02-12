import { defineComponent, computed } from 'vue-demi';
import type { PropType } from 'vue-demi';
import { initProps } from '../../shared';
import IconClose from './icon-close';

const ButtonTab = defineComponent({
  name: 'ButtonTab',
  setup() {
    return () => (
      <div class="relative inline-flex justify-center items-center h-30px pl-14px pr-6px border-1px rounded-2px cursor-pointer">
        <span class="no-wrap">
          <slot>AdminTab</slot>
        </span>
        <span class="pl-10px">
          <IconClose />
        </span>
      </div>
    );
  }
});

const ChromeTab = defineComponent({
  name: 'ChromeTab',
  setup() {
    return () => <div>ChromeTab</div>;
  }
});

export interface AdminTabProps {
  /** 暗黑模式 */
  darkMode?: boolean;
  /**
   * Tab模式(默认chrome)
   * - button 按钮风格
   * - chrome 浏览器标签风格
   */
  mode?: 'button' | 'chrome';
  /** 是否显示关闭图标 */
  closable?: boolean;
  /** 激活状态 */
  active?: boolean;
  /** 激活状态的颜色 */
  activeColor?: string;
  /** 非激活状态的边框颜色 */
  borderColor?: string;
  /** 非激活状态的暗黑模式的边框颜色 */
  darkBorderColor?: string;
}

/**
 * Tab模式
 * - button 按钮风格
 * - chrome 浏览器标签风格
 */
export type AdminTabMode = NonNullable<AdminTabProps['mode']>;

const AdminTab = defineComponent<AdminTabProps>({
  name: 'AdminTab',
  props: initProps<AdminTabProps>({
    darkMode: {
      type: Boolean
    },
    mode: {
      type: String as PropType<'button' | 'chrome'>
    }
  }),
  setup(props) {
    const components: Record<AdminTabMode, typeof ButtonTab | typeof ChromeTab> = {
      button: ButtonTab,
      chrome: ChromeTab
    };

    const Tab = computed(() => components[props.mode || 'chrome']);

    return () => <Tab.value />;
  }
});

export { AdminTab };
