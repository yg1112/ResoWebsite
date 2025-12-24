# Mac App Store 迁移修改总结

## 🎯 修改目标
将网站从"买断制（Perpetual License）"转变为"Mac App Store 年度订阅制"，确保网站与 App Store 发布策略完全一致，避免用户困惑和苹果审核风险。

---

## ✅ 已完成的关键修改

### 1. **Hero Section（首屏）**
📄 文件：[src/components/HeroSection.jsx](src/components/HeroSection.jsx)

**修改前：**
```jsx
<p className="text-sm text-gray-500 font-mono -mt-3">
  7-day free trial. No credit card required.
</p>
```

**修改后：**
```jsx
<p className="text-sm text-gray-500 font-mono -mt-3">
  Try free for 7 days on the Mac App Store
</p>
```

**原因：** 删除了误导性的 "No credit card required"，因为 App Store 订阅通常需要绑定支付方式。

---

### 2. **定价板块（Pricing Section）**
📄 文件：[src/components/Footer.jsx](src/components/Footer.jsx)

#### 2.1 标题和定价模式
**修改前：**
```jsx
<h2>Perpetual License</h2>
<p>Buy it once. Use it for life. The way software used to be.</p>
<span>$29.99 / seat</span>
```

**修改后：**
```jsx
<h2>Simple Pricing</h2>
<p>Simple annual subscription. Cancel anytime.</p>
<span>$29.99 / year</span>
```

#### 2.2 功能列表
**修改前（买断制特性）：**
- ❌ No monthly subscriptions
- ❌ Includes 1 year of updates
- ❌ Keep your version forever
- ❌ Optional renewal at discounted price

**修改后（订阅制特性）：**
- ✅ 7-day free trial
- ✅ Unlimited local transcription
- ✅ Continuous updates & improvements
- ✅ Cancel anytime
- ✅ Secure billing via Apple App Store

#### 2.3 购买按钮
**修改前：**
- "Buy License" 按钮（通过 LemonSqueezy 支付）
- "Or start a 7-day free trial" 辅助按钮

**修改后：**
- 只保留一个主要的 "Download on the Mac App Store" 按钮
- 底部文案改为："Verified by Apple • Sandboxed for your security"

---

### 3. **FAQ（常见问题）**
📄 文件：[src/components/Features.jsx](src/components/Features.jsx)

#### 3.1 订阅问题
**修改前：**
```jsx
<h4>Is this a subscription?</h4>
<p>No, it is not a subscription. You pay once and own the app forever. 
   The license includes 1 year of free updates.</p>
```

**修改后：**
```jsx
<h4>Is this a subscription?</h4>
<p>Yes, simple annual subscription. This allows us to continuously improve 
   the app with new features, maintain the local AI models, and ensure 
   compatibility with the latest macOS versions.</p>
```

#### 3.2 退款和取消政策
**删除了：**
- "We offer a 30-day money-back guarantee"
- "What happens after 1 year?"

**新增了：**
- **"What is the refund policy?"** → 引导用户查看 App Store 标准退款政策
- **"Can I cancel anytime?"** → 明确说明可随时取消，服务持续到当前计费周期结束

---

### 4. **隐私与安全声明（沙盒机制）**
📄 文件：[src/components/Features.jsx](src/components/Features.jsx#L177)

**修改前：**
```jsx
<p>100% Offline on Apple Silicon. Your voice data never leaves your Mac. 
   Zero data egress.</p>
```

**修改后：**
```jsx
<p>100% Offline on Apple Silicon. Your voice data never leaves your Mac. 
   Zero data egress. 
   <strong>Verified by Apple. Sandboxed for your security.</strong>
</p>
```

**原因：** 强调 App Store 的沙盒审核机制，增强用户对隐私和安全的信任。

---

### 5. **下载按钮组件（DownloadButton）**
📄 文件：[src/components/DownloadButton.jsx](src/components/DownloadButton.jsx)

#### 5.1 URL 逻辑
**修改前：** 直接指向 GitHub 的 DMG 下载链接

**修改后：**
- 主要链接改为 App Store URL（当前为占位符 `idXXXXXXXXX`）
- 开发期间回退到 DMG 下载（避免链接失效）
- 你需要在 App Store 上架后，将 `idXXXXXXXXX` 替换为实际的 App ID

```jsx
const appStoreUrl = "https://apps.apple.com/app/reso/idXXXXXXXXX"; // TODO: 替换为真实 App ID
```

#### 5.2 样式
**修改前：** 橙色圆角按钮 (orange-500, rounded-full)

**修改后：** 黑色 App Store 风格按钮 (black, rounded-2xl)
- 符合苹果设计规范
- 视觉上更接近官方 "Download on the Mac App Store" 徽章

#### 5.3 默认文案
**修改前：** "Start Free Trial" + 右箭头图标

**修改后：** "Download on the Mac App Store" + 下载图标

---

### 6. **Footer 底部徽章**
📄 文件：[src/components/Footer.jsx](src/components/Footer.jsx#L145)

**新增：**
在 Footer 的版权信息旁边，添加了官方的 Mac App Store 徽章：

```jsx
<a href="https://apps.apple.com/app/reso/idXXXXXXXXX" target="_blank">
  <img 
    src="https://tools.applemediaservices.com/api/badges/download-on-the-mac-app-store/black/en-us?size=250x83" 
    alt="Download on the Mac App Store" 
    className="h-10"
  />
</a>
```

**注意：** 这是苹果官方的 CDN 徽章 URL，保证永久有效且符合苹果品牌规范。

---

## 🚨 接下来你需要做的

### 1. **获取真实的 App Store URL**
上架后，App Store 会给你一个 App ID，格式如：
```
https://apps.apple.com/app/reso/id1234567890
```

**需要替换的位置：**
- [src/components/DownloadButton.jsx](src/components/DownloadButton.jsx#L6) （第 6 行）
- [src/components/Footer.jsx](src/components/Footer.jsx#L145) （Footer 徽章链接）

### 2. **确定最终的年度订阅价格**
当前网站显示 `$29.99 / year`，如果 App Store 的实际定价不同，请修改：
- [src/components/Footer.jsx](src/components/Footer.jsx#L73) （Pricing Section）

### 3. **隐私政策和条款页面检查**
确保以下两个页面内容已更新为订阅制相关条款：
- [public/privacy.html](public/privacy.html)
- [public/terms.html](public/terms.html)

特别注意：
- 隐私政策需明确说明 **"录音数据和屏幕上下文仅在本地处理，绝不上传"**
- 服务条款需说明 **"订阅自动续费、取消政策、App Store 支付条款"**

### 4. **删除旧的支付代码（可选）**
如果你确定不再使用 LemonSqueezy 或 Paddle 等第三方支付：
- 可以删除 [src/components/Footer.jsx](src/components/Footer.jsx) 中的 `handleBuy` 函数
- 删除未使用的 `CreditCard` 图标导入

---

## 📊 修改文件清单

| 文件 | 修改内容 | 优先级 |
|------|---------|--------|
| [src/components/HeroSection.jsx](src/components/HeroSection.jsx) | 删除 "No credit card required" | 🔴 高 |
| [src/components/Footer.jsx](src/components/Footer.jsx) | 定价板块改为订阅制 | 🔴 高 |
| [src/components/Features.jsx](src/components/Features.jsx) | FAQ 改为订阅问答 + 沙盒说明 | 🔴 高 |
| [src/components/DownloadButton.jsx](src/components/DownloadButton.jsx) | 改为 App Store 链接和样式 | 🔴 高 |
| [public/privacy.html](public/privacy.html) | 确认隐私政策内容合规 | 🟠 中 |
| [public/terms.html](public/terms.html) | 确认服务条款内容合规 | 🟠 中 |

---

## ✨ 关键改进总结

### 商业模式清晰化
- ❌ **之前：** "买断制" vs "订阅制" 信息混乱
- ✅ **现在：** 全站统一为 "年度订阅制"

### 用户信任度提升
- ✅ 添加 "Verified by Apple" 和 "Sandboxed" 说明
- ✅ Footer 显示官方 Mac App Store 徽章
- ✅ 所有按钮指向 App Store（统一入口）

### 合规性增强
- ✅ 删除误导性文案（"No credit card required"）
- ✅ 明确说明订阅性质和取消政策
- ✅ 退款政策指向 App Store 标准条款

---

## 🎯 下一步行动

1. ✅ **代码修改** - 已完成
2. ⏳ **上架 App Store** - 等待你完成
3. ⏳ **获取 App ID** - 上架后获得
4. ⏳ **替换占位符 URL** - 用真实 App Store 链接替换 `idXXXXXXXXX`
5. ⏳ **最终测试** - 确保所有链接和文案正确

---

**修改完成时间：** 2025-12-23  
**修改人员：** GitHub Copilot  
**审核状态：** ⏳ 等待 App Store 上架后的最终 URL 替换
