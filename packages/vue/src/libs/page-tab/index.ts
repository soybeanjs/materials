import PageTab from './index.vue';
import $ButtonTab from './button-tab.vue';
import $ChromeTab from './chrome-tab.vue';
import { install } from '../../shared';

PageTab.install = install;

/**
 * @deprecated 请使用 PageTab
 */
const AdminTab = PageTab;

/** @deprecated 请使用PageTab 设置mode="button" */
const ButtonTab = $ButtonTab;

/** @deprecated 请使用PageTab 设置mode="chrome" */
const ChromeTab = $ChromeTab;

export { PageTab, AdminTab, ButtonTab, ChromeTab };
export type { TabProps, TabMode } from './types';
