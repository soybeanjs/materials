import type { FunctionalComponent } from 'vue-demi';
import type { ContentProps } from './types';

/** 主体内容组件 */
const LayoutContent: FunctionalComponent<ContentProps> = (props: ContentProps, { slots }) => {
  return (
    <main
      id={props.overScroll ? props.scrollId : undefined}
      class={[':soy: flex flex-col flex-grow', props.class, { ':soy: overflow-y-auto': props.overScroll }]}
    >
      {slots.default?.()}
    </main>
  );
};

export default LayoutContent;
