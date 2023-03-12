# @soybeanjs/vue-metarials

Vue 组件物料

## 安装

```bash
npm install @soybeanjs/vue-materials
yarn install @soybeanjs/vue-materials
pnpm install @soybeanjs/vue-materials
```

## 使用

```vue
<script setup lang="ts">
import { AdminLayout, AdminTab } from "@soybeanjs/vue-materials";
import "@soybeanjs/vue-materials/dist/style.css";
</script>

<template>
  <AdminLayout></AdminLayout>
  <AdminTab></AdminTab>
</template>
```

## AdminLayout

后台管理系统的布局组件

[预览地址]()

- 支持垂直(vertical)和水平(horizontal)两种布局模式
- 布局由头部 Header、页签 Tab、侧边栏 Sider、主体内容 Content 和底部 Footer 组成，除了主体内容 Content，其余都可以控制是否渲染
- 支持两种滚动模式：容器滚动(wrapper)和主体内容滚动(content)
- 支持主体内容 Content 全屏

### Api 用法

#### 属性

| 字段                      | 说明                                                                     | 类型                      | 默认值               |
| ------------------------- | ------------------------------------------------------------------------ | ------------------------- | -------------------- |
| mode                      | 布局模式                                                                 | [LayoutMode](#LayoutMode) | "vertical"           |
| scrollMode                | 滚动模式                                                                 | [ScrollMode](#ScrollMode) | "vertical"           |
| [scrollElId](#scrollElId) | 滚动元素的 ID, 可用于获取对应的 Dom，使其滚动                            | string                    | "**SCROLL_EL_ID**"   |
| commonClass               | 组件的通用样式类名，可控制容器、头部、页签、侧边栏、主体和底部的公共样式 | string                    | "transition-all-300" |
| fixedTop                  | 固定上面的头部和 Tab 页签部分                                            | boolean                   | true                 |
|                           |                                                                          |                           |                      |

### 说明

#### LayoutMode

```ts
/**
 * 布局模式
 * - horizontal 水平
 * - vertical 垂直
 */
type LayoutMode = "horizontal" | "vertical";
```

#### ScrollMode

```ts
/**
 * 内容溢出时的出现滚动条的方式
 * - wrapper 布局组件最外层的元素出现滚动条
 * - content 主体内容组件出现滚动条
 * @default 默认 wrapper
 */
type ScrollMode = "wrapper" | "content";
```

#### scrollElId

使用导出的默认 ID

```ts
import { SCROLL_EL_ID } from "@soybeanjs/vue-materials";
```
