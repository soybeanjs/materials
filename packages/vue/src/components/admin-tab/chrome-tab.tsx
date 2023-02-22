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
        { [style['chrome-tab_dark']]: props.darkMode },
        { [style['chrome-tab_active']]: props.active },
        { [style['chrome-tab_active_dark']]: props.active && props.darkMode }
      ]}
      style={props.style}
    >
      <div class={[':soy: absolute left-0 top-0 -z-1 w-full h-full pointer-events-none', style['chrome-tab__bg']]}>
        <ChromeTabBg />
      </div>
      {slots.prefix?.()}
      <span>{slots.default?.()}</span>
      {slots.suffix?.()}
      <div class={[':soy: absolute right-7px w-1px h-16px bg-#1f2225', style['chrome-tab-divider']]}></div>
    </div>
  );
};

export default ChromeTab;
