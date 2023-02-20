import { defineComponent, computed } from 'vue-demi';
import type { PropType } from 'vue-demi';
import { initProps, addColorAlpha } from '../../shared';
import { createCssVars, type CssVarsProps } from './css-vars';
import ButtonTab from './button-tab';
import ChromeTab from './chrome-tab';
import IconClose from './icon-close';
import type { TabProps } from './types';

const ACTIVE_COLOR = '#1890ff';

const AdminTab = defineComponent<TabProps>({
  name: 'AdminTab',
  props: initProps<TabProps>({
    darkMode: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String as PropType<'button' | 'chrome'>,
      default: 'chrome'
    },
    commonClass: {
      type: String,
      default: 'transition-all-300'
    },
    buttonClass: {
      type: String,
      default: ''
    },
    chromeClass: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ACTIVE_COLOR
    },
    closable: {
      type: Boolean,
      default: false
    }
  }),
  setup(props, { slots }) {
    const cssVars = computed(() => {
      const { activeColor = ACTIVE_COLOR } = props;

      const cssProps: CssVarsProps = {
        primaryColor: activeColor,
        primaryColorOpacity1: addColorAlpha(activeColor, 0.1),
        primaryColorOpacity2: addColorAlpha(activeColor, 0.15),
        primaryColorOpacity3: addColorAlpha(activeColor, 0.3)
      };

      return createCssVars(cssProps);
    });

    const Tab = computed(() => (props.mode === 'chrome' ? ChromeTab : ButtonTab));
    const currentClass = computed(() => (props.mode === 'chrome' ? props.chromeClass : props.buttonClass));

    return () => (
      <Tab.value class={[props.commonClass, currentClass.value]} style={{ ...cssVars.value }} {...props}>
        {{
          default: () => slots.default?.(),
          prefix: () => slots.prefix?.(),
          suffix: () => slots.suffix?.() || <IconClose />
        }}
      </Tab.value>
    );
  }
});

export default AdminTab;
