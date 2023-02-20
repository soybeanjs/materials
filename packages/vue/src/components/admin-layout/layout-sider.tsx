import type { FunctionalComponent } from 'vue-demi';
import type { SiderProps } from './types';
import style from './layout.module.css';

/** 侧边栏组件 */
const AdminSider: FunctionalComponent<SiderProps> = (props: SiderProps, { slots }) => {
  return (
    props.visible && (
      <aside
        v-show={!props.hide}
        class={[
          ':soy: absolute left-0 top-0 h-full',
          props.class,
          props.collapse ? style['layout-sider_collapsed'] : style['layout-sider']
        ]}
      >
        {slots.default?.()}
      </aside>
    )
  );
};

export default AdminSider;
