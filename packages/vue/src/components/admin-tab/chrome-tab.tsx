import type { FunctionalComponent } from 'vue-demi';
import type { ChromeTabProps } from './types';
import ChromeTabBg from './chrome-tab-bg';
import style from './tab.module.css';

const ChromeTab: FunctionalComponent<ChromeTabProps> = (props, { slots }) => {
  return (
    <div
      class={[
        ':soy: relative inline-flex justify-center items-center gap-16px -mr-18px px-24px py-6px cursor-pointer whitespace-nowrap',
        props.class,
        style['chrome-tab'],
        { [style['chrome-tab_active']]: props.active }
      ]}
      style={props.style}
    >
      <div
        class={[
          'absolute left-0 top-0 -z-1 w-full h-full pointer-events-none',
          style['chrome-tab__bg'],
          { [style['chrome-tab__bg_active']]: props.active },
          { [style['chrome-tab__bg_active_dark']]: props.active && props.darkMode }
        ]}
      >
        <ChromeTabBg />
      </div>
      {slots.prefix?.()}
      <span>{slots.default?.()}</span>
      {slots.suffix?.()}
    </div>
  );
};

export default ChromeTab;
