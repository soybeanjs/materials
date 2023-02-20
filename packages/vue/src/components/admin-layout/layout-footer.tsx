import type { FunctionalComponent } from 'vue-demi';
import type { FooterProps } from './types';
import style from './layout.module.css';

/** 底部组件 */
const AdminFooter: FunctionalComponent<FooterProps> = (props, { slots }) => {
  return (
    props.visible && (
      <>
        <footer
          v-show={!props.hide}
          class={[
            style['layout-footer'],
            ':soy: flex-shrink-0',
            props.class,
            { ':soy: absolute left-0 bottom-0 w-full': props.fixed }
          ]}
        >
          {slots.default?.()}
        </footer>
        <div
          v-show={!props.hide && props.fixed}
          class={[style['layout-footer-placement'], ':soy: flex-shrink-0 overflow-hidden']}
        ></div>
      </>
    )
  );
};

export default AdminFooter;
