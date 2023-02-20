import type { App, Component, ComponentObjectPropsOptions } from 'vue-demi';
import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';

extend([mixPlugin]);

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

/**
 * 给颜色加透明度
 * @param color - 颜色
 * @param alpha - 透明度(0 - 1)
 */
export function addColorAlpha(color: string, alpha: number) {
  return colord(color).alpha(alpha).toHex();
}

/**
 * 颜色混合
 * @param firstColor - 第一个颜色
 * @param secondColor - 第二个颜色
 * @param ratio - 第二个颜色占比
 */
export function mixColor(firstColor: string, secondColor: string, ratio: number) {
  return colord(firstColor).mix(secondColor, ratio).toHex();
}
