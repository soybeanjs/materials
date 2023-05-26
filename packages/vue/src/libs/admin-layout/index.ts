import AdminLayout from './index.vue';
import { install } from '../../shared';
import { LAYOUT_SCROLL_EL_ID, SCROLL_EL_ID, LAYOUT_MAX_Z_INDEX } from './shared';

AdminLayout.install = install;

export { AdminLayout, LAYOUT_SCROLL_EL_ID, SCROLL_EL_ID, LAYOUT_MAX_Z_INDEX };

export type { LayoutProps, LayoutMode, ScrollMode } from './types';
