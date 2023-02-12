import { defineComponent, ref, Transition } from 'vue-demi';
import { initProps } from '../../shared';

const SvgClose = defineComponent({
  name: 'SvgClose',
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet"
        viewBox="-6 -6 24 24"
        width="1em"
        height="1em"
      >
        <path
          fill="currentColor"
          d="m7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485L2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535l3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"
        ></path>
      </svg>
    );
  }
});

const SvgCloseCircle = defineComponent({
  name: 'SvgCloseCircle',
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet"
        viewBox="-2 -2 24 24"
        width="1em"
        height="1em"
      >
        <path
          fill="currentColor"
          d="m11.414 10l2.829-2.828a1 1 0 1 0-1.415-1.415L10 8.586L7.172 5.757a1 1 0 0 0-1.415 1.415L8.586 10l-2.829 2.828a1 1 0 0 0 1.415 1.415L10 11.414l2.828 2.829a1 1 0 0 0 1.415-1.415L11.414 10zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10z"
        ></path>
      </svg>
    );
  }
});

interface Props {
  /** 是否是激活状态 */
  isActive?: boolean;
  /** 默认颜色 */
  defaultColor?: string;
  /** 激活时的颜色 */
  activeColor?: string;
}

const IconClose = defineComponent<Props>({
  name: 'IconClose',
  props: initProps<Props>({
    isActive: {
      type: Boolean
    },
    defaultColor: {
      type: String,
      default: '#9ca3af'
    },
    activeColor: {
      type: String,
      default: '#1890ff'
    }
  }),
  setup(props) {
    const isHover = ref(false);

    function setHover() {
      isHover.value = true;
    }
    function setNotHover() {
      isHover.value = false;
    }

    return () => (
      <div
        class="relative inline-flex justify-center items-center w-18px h-18px text-16px"
        style={{ color: props.isActive ? props.activeColor : props.defaultColor }}
        onMouseenter={setHover}
        onMouseleave={setNotHover}
      >
        <Transition>{isHover.value ? <SvgCloseCircle class="absolute" /> : <SvgClose class="absolute" />}</Transition>
      </div>
    );
  }
});

export default IconClose;
