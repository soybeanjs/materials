import type { FunctionalComponent } from 'vue-demi';
import type { HeaderProps } from './types';
import style from './layout.module.css';

/** 头部组件 */
const AdminHeader: FunctionalComponent<HeaderProps> = (props, { slots }) => {
  return (
    props.visible && (
      <>
        <header
          v-show={!props.hide}
          class={[
            style['layout-header'],
            ':soy: flex-shrink-0',
            props.class,
            { ':soy: absolute top-0 left-0 w-full': props.fixed }
          ]}
        >
          {slots.default?.()}
        </header>
        <div
          v-show={!props.hide && props.fixed}
          class={[style['layout-header-placement'], ':soy: flex-shrink-0 overflow-hidden']}
        ></div>
      </>
    )
  );
};

export default AdminHeader;
