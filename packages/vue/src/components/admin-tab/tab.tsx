import { defineComponent, computed } from 'vue-demi';
import type { PropType } from 'vue-demi';
import { initProps } from '../../shared';
import ButtonTab from './button-tab';
import ChromeTab from './chrome-tab';
import IconClose from './icon-close';
import type { TabProps } from './types';

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
    closable: {
      type: Boolean,
      default: false
    }
  }),
  setup(props, { slots }) {
    const Tab = computed(() => (props.mode === 'chrome' ? ChromeTab : ButtonTab));
    const currentClass = computed(() => (props.mode === 'chrome' ? props.chromeClass : props.buttonClass));

    return () => (
      <Tab.value class={[props.commonClass, currentClass.value]}>
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
