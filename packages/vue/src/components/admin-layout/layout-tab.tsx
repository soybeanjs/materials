import type { FunctionalComponent } from 'vue-demi';
import type { TabProps } from './types';
import style from './layout.module.css';

/** Tab页签组件 */
const AdminTab: FunctionalComponent<TabProps> = (props, { slots }) => {
  return (
    props.visible && (
      <>
        <div
          v-show={!props.hide}
          class={[
            style['layout-tab'],
            ':soy: flex-shrink-0',
            props.class,
            { ':soy: absolute left-0 w-full': props.fixed }
          ]}
        >
          {slots.default?.()}
        </div>
        <div
          v-show={!props.hide && props.fixed}
          class={[style['layout-tab-placement'], ':soy: flex-shrink-0 overflow-hidden']}
        ></div>
      </>
    )
  );
};

export default AdminTab;
