import type { Util } from '../../typings';

type Prefix = '--soy-';

export type CssVarsProps = {
  primaryColor: string;
  primaryColorOpacity1: string;
  primaryColorOpacity2: string;
  primaryColorOpacity3: string;
};

type CssVars = {
  [K in keyof CssVarsProps as `${Prefix}${Util.KebabCase<K>}`]: string | number;
};

export function createCssVars(props: CssVarsProps) {
  const cssVars: CssVars = {
    '--soy-primary-color': props.primaryColor,
    '--soy-primary-color-opacity1': props.primaryColorOpacity1,
    '--soy-primary-color-opacity2': props.primaryColorOpacity2,
    '--soy-primary-color-opacity3': props.primaryColorOpacity3
  };

  return cssVars;
}
