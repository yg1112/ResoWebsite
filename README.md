# Asset workflow and favicon generation

Project follows this structure for assets (best practice):

- `public/` — deployable static assets (favicons, static HTML pages, etc.)
- `src/assets/` — editable source assets (original logos, vectors)

To regenerate all favicons from the source logo, run:

```sh
npm run generate:favicons
```

This requires ImageMagick (`magick`) to be installed on your machine. The script will:

- trim transparent/near-transparent borders from `src/assets/Reso_Logo.png`
- output `favicon-16.png`, `favicon-32.png`, `favicon-48.png`, `favicon-96.png`, and `favicon.ico` into `public/`

Notes:
- Keep `src/assets/Reso_Logo.png` as the single editable source file.
- Keep `public/` as the place for generated/deployable files so the build and static server serve them directly.

## 发布与仓库清理（建议）

- **不要把编译产物（例如 `.dmg`）提交到仓库历史**，推荐的做法：源代码保存在仓库，二进制安装包通过 GitHub Releases 发布。

- 清理仓库（手动步骤）:
	1. 在本地删除文件：`git rm public/Reso.dmg`（或 `git rm --cached public/Reso.dmg` 仅取消暂存）。
	2. 提交并推送：`git commit -m "remove Reso.dmg from repo" && git push`。
	3. 如果需要从历史记录中彻底移除大文件，请参考 `git filter-repo` 或 `git filter-branch` 的文档（注意：这会重写历史）。

- 忽略未来的 `.dmg` 文件：项目已添加 `.gitignore`，包含 `*.dmg`。

- 发布流程（在 GitHub 上）:
	1. 在代码准备好并推送后，打开 GitHub 仓库页面 → `Releases` → `Draft a new release`。
	2. 填写版本号（例如 `v1.0.1`），在附件区域上传你的 `Reso.dmg`。

- 站点内下载链接：不要把下载按钮指向仓库文件路径，改为指向 Releases 的固定下载：

	`https://github.com/你的用户名/你的仓库名/releases/latest/download/你的文件名.dmg`

	或者使用仓库内的脚本/代码（例如本仓库的 `src/App.jsx`）通过 GitHub Releases API 自动获取最新 `.dmg` 的 `browser_download_url`。

优点：仓库体积更小，CI/CD 更快，用户下载使用 GitHub 的 CDN 分发更可靠。
