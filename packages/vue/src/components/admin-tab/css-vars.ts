import type { Util } from '../../typings';

type Prefix = '--soy-';

interface CssVarsProps {
  primaryColor: string;
  borderColor: string;
  bgColor: string;
}

type CssVars = {
  [K in keyof CssVarsProps as `${Prefix}${Util.KebabCase<K>}`]: string | number;
};

export function createCssVars(props: CssVarsProps) {
  const cssVars: CssVars = {
    '--soy-primary-color': props.primaryColor,
    '--soy-border-color': props.borderColor,
    '--soy-bg-color': props.bgColor
  };

  return cssVars;
}
