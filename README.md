# 高级网页设计 · 课堂练习

段栋的高级网页设计课程练习合集，10 个页面，纯 HTML5 + CSS3，无框架、无 JavaScript。

## 在线预览

仓库：<https://github.com/TTN-DD/111>

开启 GitHub Pages 后访问：<https://ttn-dd.github.io/111/>

开启方式：仓库 Settings → Pages → Source 选 `Deploy from a branch` → 分支 `main`、目录 `/ (root)` → Save。

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
| `13-1.html` | 图标方案对比：字体图标 / 内联 SVG / 纯 CSS | 第 13 讲 |
| `13-2.html` | 内联 SVG 图标库：16 个图标、currentColor 着色 | 第 13 讲 |
| `13-3.html` | 纯 CSS 图标：十个几何图标，伪元素绘制 | 第 13 讲 |
| `14-1.html` | 六种基本数据类型与 typeof 的坑 | 第 14 讲 |
| `15-1.html` | 程序结构：if 条件、for 循环、while 循环 | 第 15 讲 |
| `15-2.html` | 一百个盒子：取余与字符串查找的循环练习 | 第 15 讲 |
| `16-1.html` | 数组方法：map / filter / reduce / sort / find | 第 16 讲 |
| `17-1.html` | JSON 与对象互转、异常处理 | 第 17 讲 |
| `17-2.html` | fetch 调用接口、res.ok 判断、失败降级 | 第 17 讲 |
| `17-3.html` | 商品列表与详情的数据渲染 | 第 17 讲 |
| `17-4.html` | Promise / async，串行与并行耗时对比 | 第 17 讲 |
| `17-5.html` | 两种定时器：setTimeout 与 setInterval | 第 17 讲 |
| `17-6.html` | Promise 包饺子：串行、并行与失败短路 | 第 17 讲 |
| `17-7.html` | 接口测试面板：GET / POST / PUT / DELETE | 第 17 讲 |
| `18-1.html` | Canvas 粒子网络动画 | 第 18 讲 |
| `18-2.html` | Canvas 绘制系统架构图，可导出 PNG | 第 18 讲 |
| `18-3.html` | SVG 架构图，可导出 SVG / 2× PNG | 第 18 讲 |
| `18-4.html` | 极坐标玫瑰线，参数方程与 Canvas 绘制 | 第 18 讲 |
| `18-5.html` | 矩阵坐标系热力表，合并单元格与联动 | 第 18 讲 |
| `18-6.html` | 流程图与 ER 图，手写 SVG | 第 18 讲 |
| `18-7.html` | CSS 3D 柱状图，轴测投影不引库 | 第 18 讲 |
| `18-8.html` | 客服运营数据大屏，1920×1080 等比缩放 | 第 18 讲 |
| `test-1.html` | 课堂测试：四标签排行榜 | 版面练习 |
| `test-2.html` | 课堂测试：24 小时点击排行 | 版面练习 |
| `test-3.html` | 课堂测试：新车上市表 + 筛选 | 版面练习 |
| `test-4.html` | 课堂测试：文学社科书城三栏 | 版面练习 |
| `test-5.html` | 课堂测试：影视排行双列 | 版面练习 |
| `test-6.html` | 课堂测试：股票涨跌榜（红涨绿跌） | 版面练习 |
| `test-7.html` | 课堂测试：SUV 频道导购 + 价格区间 | 版面练习 |
| `test-8.html` | 课堂测试：音乐手机频道四标签图文列表 | 版面练习 |
| `test-9.html` | 课堂测试：新闻标签页（红框标签） | 版面练习 |
| `wechat-read/index.html` | **课程大作业**：微信读书手机端界面还原，4 个一级页面 + 二级视图，纯 CSS 绘制封面，原生 JS 实现切换 | 综合 |

## 目录结构

```
.
├── index.html            索引页
├── 2.html … 10.html      各讲练习页
├── 盒子.html             盒子模型专题
├── assets/
│   ├── site.css          全站公共样式（索引页 + 练习页外壳）
│   └── demo-link.css     3-1.html 演示用的外部样式表
├── wechat-read/          课程大作业：微信读书手机端还原
│   ├── index.html
│   ├── css/style.css
│   └── js/app.js
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
