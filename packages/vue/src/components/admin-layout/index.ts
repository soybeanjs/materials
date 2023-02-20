import AdminLayout, { SCROLL_EL_ID } from './layout';
import { install } from '../../shared';

AdminLayout.install = install;

export { AdminLayout, SCROLL_EL_ID };

export type { LayoutProps, LayoutMode, ScrollMode } from './types';
