import PageTab from './index.vue';
import { install } from '../../shared';

PageTab.install = install;

/**
 * @deprecated 请使用 PageTab
 */
const AdminTab = PageTab;

export { PageTab, AdminTab };
export type { TabProps, TabMode } from './types';
