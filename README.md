# 高级网页设计 · 课堂练习

段栋的高级网页设计课程练习合集，10 个页面，纯 HTML5 + CSS3，无框架、无 JavaScript。

## 在线预览

开启 GitHub Pages 后访问：`https://<用户名>.github.io/<仓库名>/`

## 页面目录

| 文件 | 内容 | 讲次 |
|---|---|---|
| `index.html` | 作品集索引页 | — |
| `2.html` | 第一个网页：HTML 元素（标题、段落、列表、语义标签） | 第 2 讲 |
| `2-2.html` | 页面练习：按效果图还原个人简介页 | 第 2 讲 |
| `3.html` | 表单示例：文本框、单选、复选、下拉、日期、文件上传 | 第 3 讲 |
| `3-1.html` | 层叠样式表：外链 / 内嵌 / 行内三种引入方式与优先级 | 第 3 讲 |
| `4.html` | 选择器练习：后代、子代、相邻、属性、伪类、伪元素 | 第 4 讲 |
| `盒子.html` | 盒子模型：四层结构剖视与 box-sizing 对比 | 第 4 讲 |
| `5.html` | 层叠与继承：优先级计算、继承规则、!important | 第 5 讲 |
| `7.html` | Flex 布局：主轴方向、justify-content、align-items、flex-wrap | 第 7 讲 |
| `8.html` | Flex 进阶：等宽分栏、侧栏固定、圣杯布局、等高列、居中 | 第 8 讲 |
| `10.html` | 过渡与动画：transition、transform、@keyframes | 第 10 讲 |

## 目录结构

```
.
├── index.html            索引页
├── 2.html … 10.html      各讲练习页
├── 盒子.html             盒子模型专题
├── assets/
│   ├── site.css          全站公共样式（索引页 + 练习页外壳）
│   └── demo-link.css     3-1.html 演示用的外部样式表
└── README.md
```

## 本地查看

直接双击 `index.html` 即可，所有资源都是相对路径，不需要起服务器。

如果想用本地服务器预览（推荐，避免个别浏览器对 `file://` 的限制）：

```bash
python -m http.server 8000
# 然后访问 http://localhost:8000
```

## 实现说明

- 全站共享 `assets/site.css` 的排版与配色变量；每个练习页的演示样式写在自己页面的 `<style>` 里，
  这样每一讲的知识点是自洽的，单独打开也能看懂。
- 每页都做了响应式：窄屏下多栏自动堆叠为单栏。
- 表单页只做前端校验（`required`、`pattern`、`type="email"`），提交到 `#`，不接后端。
- 动画页加了 `prefers-reduced-motion` 适配，系统开启「减少动态效果」时动画会自动关闭。
