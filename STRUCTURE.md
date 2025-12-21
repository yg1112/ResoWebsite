# Reso Website 项目结构地图

这是一个 **macOS 语音输入应用 Reso** 的官方产品页面（单页应用）。

## 核心理念
采用 **原子化组件设计 (Atomic Design)** 进行重构，便于快速定位和修改特定功能。

## 关键文件索引

### 🎯 最常改动的文件
- **`src/components/DownloadButton.jsx`** - 下载按钮
  - **作用**: 核心下载 CTA，管理 GA 埋点和 GitHub Release 链接
  - **修改场景**: 修改下载链接、按钮文案、GA 事件参数
  - **导出**: `DownloadButton` 组件，支持 `variant`、`size`、`className` props

### 🏗️ 页面组件结构

| 文件 | 职责 | 包含内容 |
|------|------|---------|
| `src/components/Navbar.jsx` | 导航栏 | Logo、导航链接、CTA 按钮、移动端菜单 |
| `src/components/HeroSection.jsx` | 英雄区 | 大标题、副标题、主 CTA 按钮 |
| `src/components/DemoSection.jsx` | 产品演示 | 动画循环展示 (Slack/GitHub/iMessage 场景)、键盘快捷键演示、Neural Engine 状态 |
| `src/components/Features.jsx` | 功能区 + FAQ + Stats | 5 大特性展示、常见问题、统计数据 |
| `src/components/Footer.jsx` | 页脚 | 定价区、Newsletter 订阅、版权信息、社交链接 |
| `src/components/ToolLogos.jsx` | 工具 Logo 展示 | Cursor、Linear、Slack、Discord、Notion、GitHub 集成展示 |

### 📄 App 入口
- **`src/App.jsx`** - 主应用入口
  - **作用**: 组装所有子组件，管理全局滚动状态
  - **管理**: 导航栏 `isScrolled` 状态、导航点击处理

## 常见修改场景

### 场景 1: 修改下载链接或 GA 埋点
**文件**: `src/components/DownloadButton.jsx` (第 8-26 行)
- 修改 `downloadUrl` 变量 (第 8 行)
- 修改 GA 事件参数 (第 18-22 行)

### 场景 2: 改动导航栏
**文件**: `src/components/Navbar.jsx`
- 导航链接: 第 34-36 行
- Logo: 第 14-34 行 (`AppIcon` 定义)
- 移动端菜单: 第 51-57 行

### 场景 3: 修改英雄区文案
**文件**: `src/components/HeroSection.jsx`
- 大标题: 第 7-10 行
- 副标题: 第 11-14 行

### 场景 4: 调整功能区内容
**文件**: `src/components/Features.jsx`
- 每个特性是独立 section，按顺序排列（Pillar 1-5）
- 修改文案、图标、颜色都在对应 section

### 场景 5: 修改定价或 CTA
**文件**: `src/components/Footer.jsx`
- 定价金额: 第 60 行 (`$29.99`)
- Buy 链接: 第 58 行 (`https://reso.lemonsqueezy.com/checkout`)
- 许可证条款: 第 61-65 行

## 数据流向

```
App.jsx (主入口)
  ├── Navbar (isScrolled 状态)
  │   └── DownloadButton (variant="nav")
  ├── HeroSection
  │   └── DownloadButton (variant="primary")
  ├── DemoSection (flowState 动画)
  ├── ToolLogos
  ├── Features (包含 FAQ + Stats)
  └── Footer
      ├── DownloadButton (variant="secondary")
      └── Newsletter form (email, subscribed 状态)
```

## 关键技术

- **前端框架**: React 18
- **样式**: Tailwind CSS
- **图标库**: lucide-react
- **构建工具**: Vite
- **外部集成**:
  - GA (Google Analytics) 埋点
  - Loops (Newsletter API)
  - LemonSqueezy (支付处理)
  - GitHub API (Release 获取)

## 新人快速开始

1. **只修改下载链接?** → 编辑 `src/components/DownloadButton.jsx`
2. **改导航菜单?** → 编辑 `src/components/Navbar.jsx`
3. **修改文案?** → 找对应组件（`HeroSection`、`Features` 等）
4. **重大布局改动?** → 可能需要修改 `src/App.jsx` 的组件顺序

## 共享资源

所有共享资源都在 `src/assets/` 文件夹:
- `Reso_Logo.png` - 应用图标

`AppIcon` SVG 在各组件中内联定义（因为使用频率高）。

---

**建议**: 每次新对话开始时，只需上传本文件 (`STRUCTURE.md`)。AI 会根据地图快速定位需要修改的文件，然后由你上传相关文件。这样能显著节省 Token。
