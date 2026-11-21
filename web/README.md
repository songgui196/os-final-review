# 知序：操作系统期末复习

这是一个纯静态复习工作台，包含 12 章知识笔记、课后题解析、选择题练习和错题重练。题干与计算数据以教材为准；本项目不包含原教材 PDF。

## 打开

部署后的在线页面无需安装或登录。也可以直接打开 `index.html`。如需本地 HTTP 服务，在项目根目录运行：

```sh
python -m http.server 8000 --directory web
```

然后访问 `http://localhost:8000`。页面及其资料随仓库一起提供，不依赖后端服务。

## 明暗模式

点击顶部的月亮／太阳按钮切换明暗模式。首次打开跟随系统，手动选择后会在当前浏览器保存；切换不会改变复习进度。打印阅读资料时仍使用浅色样式。

## 内容

- `theme.js`、`theme.css`：明暗模式切换、偏好保存与配色。
- `content.js`：从知识库 Markdown 生成的阅读资料和章节页码索引。
- `questions.js`：按章节组织的选择题题库。
- `quiz-engine.js`、`app.js`：组卷、判分、进度保存和页面交互。
- `vendor/marked.umd.js`：Markdown 渲染器；许可证见 `vendor/marked-LICENSE.md`。

修改知识库后，运行 `python tools/build_web_content.py` 更新阅读资料，再运行知识库和网页校验脚本。
