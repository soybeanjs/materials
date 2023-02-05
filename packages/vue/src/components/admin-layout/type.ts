/**
 * 头部配置
 */
export interface HeaderConfig {
  /**
   * 头部可见
   * @default true
   */
  headerVisible?: boolean;
  /**
   * 头部样式名
   * @default ''
   */
  headerClass?: string;
  /**
   * 头部高度
   * @default 56px
   */
  headerHeight?: number;
}

/**
 * Tab页签配置
 */
export interface TabConfig {
  /**
   * Tab页签可见
   * @default true
   */
  tabVisible?: boolean;
  /**
   * Tab页签样式名
   * @default ''
   */
  tabClass?: string;
  /**
   * Tab页签高度
   * @default 48px
   */
  tabHeight?: number;
}

/**
 * 侧边栏配置
 */
export interface SiderConfig {
  /**
   * 侧边栏可见
   * @default true
   */
  siderVisible?: boolean;
  /**
   * 侧边栏样式名
   * @default ''
   */
  siderClass?: string;
  /**
   * 侧边栏折叠状态
   * @default false
   */
  siderCollapse?: boolean;
  /**
   * 侧边栏未折叠时的宽度
   * @default 220px
   */
  siderWidth?: number;
  /**
   * 侧边栏折叠时的宽度
   * @default 64px
   */
  siderCollapsedWidth?: number;
}

/**
 * 主体内容配置
 */
export interface ContentConfig {
  /**
   * 主体内容样式名
   * @default ''
   */
  contentClass?: string;
}

/**
 * 底部配置
 */
export interface FooterConfig {
  /**
   * 底部可见
   * @default true
   */
  footerVisible?: boolean;
  /**
   * 固定底部
   * @default true
   */
  fixedFooter?: boolean;
  /**
   * 底部样式名
   * @default ''
   */
  footerClass?: string;
  /**
   * 底部的高度
   * @default 48px
   */
  footerHeight?: number;
  /**
   * 底部是否局右
   * @description 布局为vertical时起作用
   */
  rightFooter?: boolean;
}

/**
 * 布局模式
 * - vertical 垂直
 * - horizontal 水平
 */
export type LayoutMode = 'vertical' | 'horizontal';

/**
 * 内容溢出时的出现滚动条的方式
 * - wrapper 布局组件最外层的元素出现滚动条
 * - content 主体内容组件出现滚动条
 * @default 默认 wrapper
 */
export type ScrollMode = 'wrapper' | 'content';

/**
 * 布局的属性
 */
export interface LayoutProps extends HeaderConfig, TabConfig, SiderConfig, ContentConfig, FooterConfig {
  /**
   * 布局模式
   * - {@link LayoutMode}
   */
  mode?: LayoutMode;
  /**
   * 内容溢出时的出现滚动条的方式
   * - {@link ScrollMode}
   */
  scrollMode?: ScrollMode;
  /**
   * 通用的样式名称
   * - 可以用来配置过渡动画的样式
   * @default 'transition-all-300'
   */
  commonClass?: string;
  /**
   * 固定上面的头部和Tab页签部分
   * @default true
   */
  fixedTop?: boolean;
}

/** 布局组件各部分的通用属性 */
export interface CommonProps {
  /** 是否可见 */
  visible?: boolean;
  /** 样式的类名 */
  class?: string | (string | undefined)[];
}

/**
 * 头部组件的属性
 */
export interface HeaderProps extends CommonProps {
  /** 是否固定 */
  fixed?: boolean;
  /** 高度 */
  height?: number;
  /** 左边距 */
  paddingLeft?: number;
}

/**
 * Tab组件组件的属性
 */
export interface TabProps extends CommonProps {
  /** 是否固定 */
  fixed?: boolean;
  /** 固定时距离顶部的距离(等于头部组件的高度) */
  top?: number;
  /** 高度 */
  height?: number;
  /** 左边距 */
  paddingLeft?: number;
}

/** 主体内容组件的属性 */
export interface ContentProps {
  /** 内容溢出是否滚动 */
  overScroll?: boolean;
  /** 样式的类名 */
  class?: CommonProps['class'];
}

/** 侧边栏组件属性 */
export interface SiderProps extends CommonProps {
  /** 宽度 */
  width?: number;
  /** 顶部方向的内边距 */
  paddingTop?: number;
  /** 底部方向的内边距 */
  paddingBottom?: number;
}

/**
 * 底部组件组件的属性
 */
export interface FooterProps extends CommonProps {
  /** 是否固定 */
  fixed?: boolean;
  /** 高度 */
  height?: number;
  /** 左边距 */
  paddingLeft?: number;
}
