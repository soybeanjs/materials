import type { FunctionalComponent } from 'vue-demi';
import type { ChromeTabProps } from './types';

const ChromeTab: FunctionalComponent<ChromeTabProps> = (props, { slots }) => {
  return (
    <div
      class={[
        ':soy: relative inline-flex justify-center items-center gap-10px px-12px py-4px border-1px border-solid rounded-2px cursor-pointer whitespace-nowrap',
        props.class
      ]}
      style={props.style}
    >
      {slots.prefix?.()}
      <span>{slots.default?.()}</span>
      {slots.suffix?.()}
    </div>
  );
};

export default ChromeTab;
