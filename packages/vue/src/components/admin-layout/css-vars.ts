import type { LayoutProps } from './type';

// single kebab
type Kebab<S extends string> = S extends Uncapitalize<S> ? S : `-${Uncapitalize<S>}`;
// full kebab
type KebabCase<S extends string> = S extends `${infer Start}${infer End}`
  ? `${Uncapitalize<Start>}${KebabCase<Kebab<End>>}`
  : S;

type Prefix = '--soy-';

type CssVarsProps = Pick<
  LayoutProps,
  'headerHeight' | 'tabHeight' | 'siderWidth' | 'siderCollapsedWidth' | 'footerHeight'
>;

type CssVars = {
  [K in keyof CssVarsProps as `${Prefix}${KebabCase<K>}`]: string;
};

export function createCssVars(props: CssVarsProps) {
  const cssVars: CssVars = {
    '--soy-header-height': `${props.headerHeight}px`,
    '--soy-tab-height': `${props.tabHeight}px`,
    '--soy-sider-width': `${props.siderWidth}px`,
    '--soy-sider-collapsed-width': `${props.siderCollapsedWidth}px`,
    '--soy-footer-height': `${props.footerHeight}px`
  };

  return cssVars;
}
