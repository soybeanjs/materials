import type { FunctionalComponent } from 'vue-demi';
import type { ButtonTabProps } from './types';
import style from './tab.module.css';

const ButtonTab: FunctionalComponent<ButtonTabProps> = (props, { slots }) => {
  return (
    <div
      class={[
        ':soy: relative inline-flex justify-center items-center gap-12px px-12px py-4px border-1px border-solid rounded-4px cursor-pointer whitespace-nowrap',
        props.class,
        style['button-tab'],
        { [style['button-tab_dark']]: props.darkMode },
        { [style['button-tab_active']]: props.active },
        { [style['button-tab_active_dark']]: props.active && props.darkMode }
      ]}
      style={props.style}
    >
      {slots.prefix?.()}
      <span>{slots.default?.()}</span>
      {slots.suffix?.()}
    </div>
  );
};

export default ButtonTab;
