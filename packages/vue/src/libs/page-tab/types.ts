/**
 * Tab页签模式
 * - button 按钮风格
 * - chrome 浏览器标签风格
 * @default chrome
 */
export type TabMode = 'button' | 'chrome';

export interface TabProps {
  /** 暗黑模式 */
  darkMode?: boolean;
  /**
   * Tab模式
   * - {@link TabMode}
   */
  mode?: TabMode;
  /**
   * 通用的样式名称
   * - 可以用来配置过渡动画的样式
   * @default 'transition-all-300'
   */
  commonClass?: string;
  /** button模式的类名 */
  buttonClass?: string;
  /** chrome模式的类名 */
  chromeClass?: string;
  /** 是否是激活状态 */
  active?: boolean;
  /** 激活时的颜色 */
  activeColor?: string;
  /** 是否显示关闭图标 */
  closable?: boolean;
}
