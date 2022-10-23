import type { ComponentObjectPropsOptions } from 'vue-demi';

export function initComponentProps<Props>(component: any, props: ComponentObjectPropsOptions<Props>) {
  Object.assign(component, { props });
}
