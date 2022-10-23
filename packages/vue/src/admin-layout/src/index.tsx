import { defineComponent } from 'vue-demi';
import type { ComponentObjectPropsOptions } from 'vue-demi';

export interface AdminLayoutProps {
  /** 暗黑模式 */
  isDark?: boolean;
}

const AdminLayout = defineComponent<AdminLayoutProps>({
  name: 'AdminLayout',
  setup() {
    return () => <div>AdminLayout</div>;
  }
});

(AdminLayout.props as ComponentObjectPropsOptions<AdminLayoutProps>) = {
  isDark: {
    type: Boolean,
    default: false
  }
};

export { AdminLayout };
