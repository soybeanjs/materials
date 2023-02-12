import type { App, Component, ComponentObjectPropsOptions } from 'vue-demi';

/** 注册组件 */
export function install<T extends Component>(app: App, component: T) {
  app.component(component.name!, component);
}

/**
 * 初始化属性
 * @param props
 * @description 返回值为any是为了解决defineComponent不能传递范型参数问题
 */
export function initProps<Props>(props: ComponentObjectPropsOptions<Props>): any {
  return props;
}

/**
 * 获取策略模式的结果
 * @param conditions 各种条件
 * @returns 返回第一个符合条件的结果
 */
export function getStrategyResult<T>(conditions: [boolean, T][]): T | null {
  let data: T | null = null;

  conditions.some(([pass, result]) => {
    if (pass) {
      data = result;
    }
    return pass;
  });

  return data;
}
