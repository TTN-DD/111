// 24001010413 段栋 计算机24004 微信读书 网页元素设计
// ===== 数据 =====
const ALL_BOOKS = [
  { title: '活着', author: '余华', cat: '文学', score: '9.4', colors: ['#1d1d1d', '#313131'], fg: '#f4efe4', badge: '', dark: false },
  { title: '三体', author: '刘慈欣', cat: '科幻', score: '9.5', colors: ['#08172c', '#16365e'], fg: '#e9f0fa', badge: 'free', dark: false },
  { title: '人类简史', author: '尤瓦尔·赫拉利', cat: '历史', score: '9.1', colors: ['#f0e7d4', '#ddcdb0'], fg: '#4a3a24', badge: '', dark: true },
  { title: '被讨厌的勇气', author: '岸见一郎', cat: '心理', score: '8.6', colors: ['#ffffff', '#e8f0fb'], fg: '#24405e', badge: '', dark: true },
  { title: '长安的荔枝', author: '马伯庸', cat: '小说', score: '8.9', colors: ['#c8452f', '#e07358'], fg: '#fff6e8', badge: 'free', dark: false },
  { title: '置身事内', author: '兰小欢', cat: '经济', score: '8.7', colors: ['#2b3948', '#45607a'], fg: '#eaf0f6', badge: '', dark: false },
  { title: '认知觉醒', author: '周岭', cat: '成长', score: '8.2', colors: ['#1d2350', '#3c4c92'], fg: '#eef1fb', badge: '', dark: false },
  { title: '克拉拉与太阳', author: '石黑一雄', cat: '小说', score: '8.4', colors: ['#f2a33c', '#e8734a'], fg: '#fffaf0', badge: 'free', dark: false },
  { title: '万历十五年', author: '黄仁宇', cat: '历史', score: '9.0', colors: ['#1b2942', '#2f4767'], fg: '#e7edf7', badge: '', dark: false },
  { title: '明朝那些事儿', author: '当年明月', cat: '历史', score: '9.3', colors: ['#8b2b24', '#b0453a'], fg: '#f7e5c9', badge: '', dark: false },
  { title: '显微镜下的大明', author: '马伯庸', cat: '历史', score: '8.5', colors: ['#6b4f2a', '#8f6d3d'], fg: '#f4e7cf', badge: '', dark: false },
  { title: '纳瓦尔宝典', author: '埃里克·乔根森', cat: '成长', score: '8.8', colors: ['#f8f8f5', '#e6e6e0'], fg: '#1d1d1d', badge: '', dark: true },
  { title: '平凡的世界', author: '路遥', cat: '文学', score: '9.1', colors: ['#5c4033', '#8b6914'], fg: '#f5e6c8', badge: '', dark: false },
  { title: '解忧杂货店', author: '东野圭吾', cat: '小说', score: '8.5', colors: ['#2c3e50', '#4a6741'], fg: '#eaf4ea', badge: '', dark: false },
  { title: '月亮与六便士', author: '毛姆', cat: '文学', score: '9.0', colors: ['#1a1a2e', '#4a4a6a'], fg: '#e8e8f0', badge: '', dark: false },
];

const SHELF_BOOKS = [
  { title: '三体', author: '刘慈欣', progress: 38, colors: ['#08172c', '#16365e'], badge: '', dark: false, cat: '科幻' },
  { title: '活着', author: '余华', progress: 68, colors: ['#1d1d1d', '#313131'], badge: '', dark: false, cat: '文学' },
  { title: '被讨厌的勇气', author: '岸见一郎', progress: 52, colors: ['#ffffff', '#e8f0fb'], badge: '', dark: true, cat: '心理' },
  { title: '认知觉醒', author: '周岭', progress: 76, colors: ['#1d2350', '#3c4c92'], badge: 'update', dark: false, cat: '成长' },
  { title: '置身事内', author: '兰小欢', progress: 24, colors: ['#2b3948', '#45607a'], badge: '', dark: false, cat: '经济' },
  { title: '长安的荔枝', author: '马伯庸', progress: 100, colors: ['#c8452f', '#e07358'], badge: '', dark: false, cat: '小说' },
  { title: '人类简史', author: '尤瓦尔·赫拉利', progress: 100, colors: ['#f0e7d4', '#ddcdb0'], badge: '', dark: true, cat: '历史' },
  { title: '克拉拉与太阳', author: '石黑一雄', progress: 0, colors: ['#f2a33c', '#e8734a'], badge: '', dark: false, cat: '小说' },
  { title: '万历十五年', author: '黄仁宇', progress: 15, colors: ['#1b2942', '#2f4767'], badge: 'update', dark: false, cat: '历史' },
];

const RANKS = [
  { title: '三体', author: '刘慈欣', cat: '科幻', heat: '328.6万', colors: ['#08172c', '#16365e'], dark: false },
  { title: '活着', author: '余华', cat: '文学', heat: '265.1万', colors: ['#1d1d1d', '#313131'], dark: false },
  { title: '人类简史', author: '尤瓦尔·赫拉利', cat: '历史', heat: '198.4万', colors: ['#f0e7d4', '#ddcdb0'], dark: true },
  { title: '被讨厌的勇气', author: '岸见一郎', cat: '心理', heat: '176.2万', colors: ['#ffffff', '#e8f0fb'], dark: true },
  { title: '长安的荔枝', author: '马伯庸', cat: '小说', heat: '152.8万', colors: ['#c8452f', '#e07358'], dark: false },
  { title: '明朝那些事儿', author: '当年明月', cat: '历史', heat: '143.5万', colors: ['#8b2b24', '#b0453a'], dark: false },
  { title: '认知觉醒', author: '周岭', cat: '成长', heat: '121.9万', colors: ['#1d2350', '#3c4c92'], dark: false },
  { title: '置身事内', author: '兰小欢', cat: '经济', heat: '98.7万', colors: ['#2b3948', '#45607a'], dark: false },
  { title: '纳瓦尔宝典', author: '埃里克·乔根森', cat: '成长', heat: '87.3万', colors: ['#f8f8f5', '#e6e6e0'], dark: true },
  { title: '克拉拉与太阳', author: '石黑一雄', cat: '小说', heat: '76.4万', colors: ['#f2a33c', '#e8734a'], dark: false },
];

const FREE_BOOKS = ALL_BOOKS.filter((b) => b.badge === 'free');

const HOT_WORDS = ['三体', '活着', '人类简史', '长安的荔枝', '被讨厌的勇气', '认知觉醒', '置身事内', '克拉拉与太阳'];

const FEEDS = [
  {
    user: '笑望天涯路', avatar: '笑', avatarBg: '#4a7fb5', date: '10/4',
    text: '这些读书软件的大佬是我学习的榜样，只要严于自律，只要沉浸于读书之中，便可不去想一些烦躁的事情，也不会无节制的去刷短视频，不会想着去玩游戏，因为玩过游戏之后，内心的空虚感会更加强烈……',
    rank: [
      { no: 1, name: '时光的…不私信', tm: '160时6分' },
      { no: 2, name: '李春元', tm: '157时59分' },
      { no: 3, name: '上德若谷', tm: '151时52分' },
      { no: 4, name: '孫行者', tm: '130时17分' },
      { no: 5, name: '小橘流水', tm: '111时48分' },
    ],
    tags: ['书友 ›', '# 我的国庆这样过 ›'],
    comments: 438, likes: 734,
  },
  {
    user: '青衫烟雨客', avatar: '青', avatarBg: '#2f9e6e', date: '10/5',
    text: '重读《活着》，依然会被福贵的一生击中。好的文字不需要辞藻堆砌，平静的叙述里全是力量。',
    quote: { book: '活着 · 余华', text: '人是为活着本身而活着的，而不是为了活着之外的任何事物所活着。' },
    tags: ['书友 ›', '# 一句话安利一本好书 ›'],
    comments: 96, likes: 211,
  },
  {
    user: '摸鱼中队', avatar: '摸', avatarBg: '#e8890c', date: '10/6',
    text: '国庆七天假期阅读计划：每天至少两小时，读完《三体》全本。有没有一起打卡的书友？评论区集合。',
    tags: ['闲聊 ›', '# 打卡挑战 ›'],
    comments: 152, likes: 389,
  },
  {
    user: '星河入梦', avatar: '星', avatarBg: '#7b6cf6', date: '10/6',
    text: '《三体》里最震撼我的不是黑暗森林，而是人类面对未知时的傲慢与渺小。每一次重读都有新体会，推荐给还没看过的书友。',
    quote: { book: '三体 · 刘慈欣', text: '弱小和无知不是生存的障碍，傲慢才是。' },
    tags: ['话题 ›', '# 科幻小说 ›'],
    comments: 267, likes: 512,
  },
  {
    user: '南山旧友', avatar: '南', avatarBg: '#b8352b', date: '10/7',
    text: '分享一个读书小习惯：每天睡前读 20 分钟，一个月下来居然读完了半本《人类简史》。积少成多，坚持比速度更重要。',
    tags: ['笔记 ›', '# 读书方法 ›'],
    comments: 45, likes: 128,
  },
  {
    user: '纸间漫步', avatar: '纸', avatarBg: '#3ecfdd', date: '10/8',
    text: '《被讨厌的勇气》读到一半，"课题分离"这个概念瞬间通透了。原来很多烦恼，都是因为管了别人的课题。',
    quote: { book: '被讨厌的勇气 · 岸见一郎', text:'一切烦恼都是人际关系的烦恼。' },
    tags: ['书友 ›', '# 心理成长 ›'],
    comments: 88, likes: 196,
  },
];

// 多章节阅读内容（演示文本，均为本项目原创示例文字）
const READER_BOOKS = {
  '三体': {
    chapters: [
      {
        title: '第一章 疯狂年代',
        paragraphs: [
          '夜深了，控制中心的灯光仍然亮着。巨大的屏幕上，无数条数据流像星河一样缓缓转动，值班员盯着其中一条异常曲线，反复确认了三遍。',
          '那不是仪器误差。信号来自一亿五千万公里之外，带着一种不属于自然噪声的规律性。',
          '「把原始数据调出来。」他说这话时，声音比自己预想的平静。窗外的城市已经入睡，没有人知道，人类文明的某个开关，即将被轻轻按下。',
          '他想起导师说过的话：当意外足够干净时，它就不再是意外，而是答复。',
        ],
      },
      {
        title: '第二章 台球',
        paragraphs: [
          '实验大厅里，台球桌被摆成了一个奇怪的阵列。科学家们安静地站着，等待一个几乎不可能的结果。',
          '第一杆推出去，球的轨迹与计算分毫不差。第二杆、第三杆……每一次碰撞都像被无形的手校准过。',
          '「如果物理规律在所有地方都一样，」有人低声说，「那我们就不该对宇宙抱有任何幻想。」',
          '笑声很快散去，只剩仪器的蜂鸣在空旷的大厅里回荡。',
        ],
      },
      {
        title: '第三章 红岸之一',
        paragraphs: [
          '北方的风雪掩盖了一切足迹。发射架在夜色里像一头沉默的巨兽，指向永远不会回应的天空。',
          '她把最后一份记录锁进抽屉，抬头看了一眼星空。星星很冷，但比人心暖一些。',
          '「频率锁定，功率满载。」耳机里传来指令。她深吸一口气，按下了发射键。',
          '这一刻之后，人类再也不是独自在黑暗中说话的孩子了——尽管他们还不知道，回答来自何方。',
        ],
      },
      {
        title: '第十二章 红岸之五',
        paragraphs: [
          '基地的档案室里堆满了发黄的纸页，每一页都记录着一次徒劳的呼喊。',
          '她翻到最后一本笔记，扉页上只有一行字：「不要回答，不要回答，不要回答。」',
          '窗外的雪停了。远处，天线缓缓转向新的角度，像一只睁开的眼睛。',
          '故事才刚刚开始，而读者已经屏住了呼吸。',
        ],
      },
    ],
  },
  '活着': {
    chapters: [
      {
        title: '第一章',
        paragraphs: [
          '我比现在年轻十岁的时候，获得了一个游手好闲的职业，去乡间收集民间歌谣。',
          '那个夏天的午后，老人坐在树下，把一生的往事像抽屉一样一个个打开。他的讲述很慢，慢得像老牛拉车，可每一个字都压在我的心上。',
          '我于是知道了福贵。知道了一个人如何从富家少爷变成一无所有的农夫，又如何在一次次失去之后，仍然牵着老牛走在田埂上。',
          '「少年去游荡，中年想掘藏，老年做和尚。」他哼着这首歌，脸上没有眼泪。',
        ],
      },
      {
        title: '第二章',
        paragraphs: [
          '家珍走的那天，院子里的桂花开了。福贵没有哭，他把被角掖好，像她只是睡着了。',
          '命运拿走了他的一切：父亲、母亲、儿子、女儿、妻子、女婿、外孙。可他仍然活着，带着一头同样叫福贵的老牛。',
          '「有时候想想伤心，有时候又很踏实。」他说。',
          '夕阳把田埂染成金色，歌声再次响起，飘得很远很远。',
        ],
      },
    ],
  },
  '被讨厌的勇气': {
    chapters: [
      {
        title: '序言：听听哲人的主张',
        paragraphs: [
          '青年在深夜造访哲人的书房，带着满腹的疑惑与不服。他想证明：人是无法改变的。',
          '哲人不急着反驳，只问了一个问题：「你为什么无法改变？不是因为不能，而是因为自己下了『不改变』的决心。」',
          '青年愣住了。窗外的风吹动书页，哗哗作响，像是在替他翻找答案。',
          '「获得幸福的勇气，」哲人说，「也包括被讨厌的勇气。」',
        ],
      },
      {
        title: '第一章：我们的不幸是谁的错',
        paragraphs: [
          '哲人在桌上摊开一张白纸，画了一个圆。「这是你。」他又画了一个圈，「这是别人。」',
          '「所谓的课题分离，就是分清这是谁的课题。你无法控制别人怎么看你，正如别人无法替你决定明天读哪一本书。」',
          '青年沉思良久，终于承认：原来束缚自己的，从来不是过去，而是自己给过去赋予的意义。',
        ],
      },
    ],
  },
};

const DEFAULT_CHAPTERS = READER_BOOKS['三体'].chapters;

// ===== 工具 =====
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

function gradient(b) {
  return `linear-gradient(160deg, ${b.colors[0]}, ${b.colors[1]})`;
}

function showToast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 1500);
}

function badgeHtml(badge) {
  if (badge === 'update') return '<span class="cover-badge update">更新</span>';
  if (badge === 'wan') return '<span class="cover-badge wan">10万</span>';
  if (badge === 'free') return '<span class="cover-badge free">免费</span>';
  return '';
}

function bookItemHtml(b) {
  const darkClass = b.dark ? ' dark-cover' : '';
  const progressHtml = typeof b.progress === 'number'
    ? `<div class="cover-progress"><i style="width:${b.progress}%"></i></div>`
    : '';
  return `
    <div class="book-cover${darkClass}" style="background:${gradient(b)}">
      <span class="cover-brand">微信读书</span>
      ${badgeHtml(b.badge)}
      <span class="cover-title">${b.title}</span>
      <span class="cover-author">${b.author}</span>
      ${progressHtml}
    </div>
    <div class="book-name">${b.title}</div>
    ${b.score ? `<div class="book-meta">评分 ${b.score}</div>` : `<div class="book-meta">${b.author}</div>`}`;
}

function miniCoverHtml(b) {
  const darkClass = b.dark ? ' dark-cover' : '';
  return `<div class="mini-cover${darkClass}" style="background:${gradient(b)}"><span>${b.title}</span></div>`;
}

function bindBookEvents(container) {
  container.querySelectorAll('.book-item').forEach((el) => {
    el.addEventListener('click', () => openReader(el.dataset.title));
  });
}

// ===== 渲染：首页 =====
function renderToday() {
  const strip = $('#today-strip');
  strip.innerHTML = '';
  ALL_BOOKS.slice(0, 8).forEach((b) => {
    const item = document.createElement('div');
    item.className = 'today-item';
    item.dataset.title = b.title;
    item.innerHTML = `
      <div class="book-cover${b.dark ? ' dark-cover' : ''}" style="background:${gradient(b)}">
        <span class="cover-title">${b.title}</span>
        <span class="cover-author">${b.author}</span>
      </div>
      <div class="today-score">★ ${b.score}</div>
      <div class="book-name">${b.title}</div>`;
    item.addEventListener('click', () => openReader(b.title));
    strip.appendChild(item);
  });
}

function renderHome(list) {
  const grid = $('#home-grid');
  grid.innerHTML = '';
  list.slice(0, 6).forEach((b) => {
    const item = document.createElement('div');
    item.className = 'book-item';
    item.dataset.title = b.title;
    item.innerHTML = bookItemHtml(b);
    grid.appendChild(item);
  });
  bindBookEvents(grid);
}

function renderFree() {
  const grid = $('#free-grid');
  grid.innerHTML = '';
  FREE_BOOKS.forEach((b) => {
    const item = document.createElement('div');
    item.className = 'book-item';
    item.dataset.title = b.title;
    item.innerHTML = bookItemHtml(b);
    grid.appendChild(item);
  });
  bindBookEvents(grid);
}

function renderRanks() {
  const list = $('#rank-list');
  list.innerHTML = '';
  RANKS.forEach((r, i) => {
    const noClass = i < 3 ? ` top${i + 1}` : '';
    const item = document.createElement('div');
    item.className = 'rank-item';
    item.dataset.title = r.title;
    item.innerHTML = `
      <span class="rank-no${noClass}">${i + 1}</span>
      ${miniCoverHtml(r)}
      <div class="rank-info">
        <div class="rank-name">${r.title}</div>
        <div class="rank-meta">${r.author} · ${r.cat}</div>
      </div>
      <div class="rank-heat">${r.heat}</div>`;
    item.addEventListener('click', () => openReader(r.title));
    list.appendChild(item);
  });
}

// ===== 渲染：书架 =====
function renderShelf() {
  const grid = $('#shelf-grid');
  grid.innerHTML = '';
  SHELF_BOOKS.forEach((b) => {
    const item = document.createElement('div');
    item.className = 'book-item';
    item.dataset.title = b.title;
    item.innerHTML = bookItemHtml(b);
    grid.appendChild(item);
  });
  bindBookEvents(grid);
}

function renderHero() {
  const book = SHELF_BOOKS[0];
  $('#hero-title').textContent = book.title;
  $('#hero-sub').textContent = `${book.author} · 读到第十二章「红岸之五」`;
  $('#hero-bar').style.width = book.progress + '%';
  $('#hero-pct').textContent = book.progress + '%';
  $('#hero-btn').onclick = (e) => {
    e.stopPropagation();
    openReader(book.title);
  };
  $('#shelf-hero').onclick = () => openReader(book.title);
}

// ===== 渲染：书友 =====
function renderFeed() {
  const feed = $('#feed');
  feed.innerHTML = '';
  FEEDS.forEach((f) => {
    const card = document.createElement('div');
    card.className = 'feed-card';

    let rankHtml = '';
    if (f.rank) {
      rankHtml = `<div class="feed-img">
        <div style="font-weight:700;margin-bottom:6px;">我的阅读统计</div>
        ${f.rank.map((r) => `
          <div class="rank-line"><span class="no">${r.no}</span><span class="nm">${r.name}</span><span class="tm">${r.tm}</span><span>❤</span></div>
        `).join('')}
      </div>`;
    }

    let quoteHtml = '';
    if (f.quote) {
      quoteHtml = `<div class="feed-quote">
        <div class="quote-book">《${f.quote.book}》</div>
        <div class="quote-text">${f.quote.text}</div>
      </div>`;
    }

    card.innerHTML = `
      <div class="feed-head">
        <div class="feed-avatar" style="background:${f.avatarBg}">${f.avatar}</div>
        <span class="feed-user">${f.user}</span>
        <span class="feed-date">${f.date}</span>
      </div>
      <div class="feed-text">${f.text}</div>
      ${rankHtml}
      ${quoteHtml}
      <div class="feed-tags">${f.tags.map((t) => `<span class="feed-tag">${t}</span>`).join('')}</div>
      <div class="feed-actions">
        <span>↗</span>
        <span>💬 ${f.comments}</span>
        <span class="like-btn">♡ ${f.likes}</span>
      </div>`;

    card.querySelector('.like-btn').addEventListener('click', function () {
      if (this.dataset.liked) {
        this.textContent = '♡ ' + f.likes;
        delete this.dataset.liked;
      } else {
        this.textContent = '❤ ' + (f.likes + 1);
        this.dataset.liked = '1';
      }
    });

    feed.appendChild(card);
  });
}

// ===== Tab 切换 =====
$$('.tab-item').forEach((tab) => {
  tab.addEventListener('click', () => {
    $$('.tab-item').forEach((t) => t.classList.remove('active'));
    $$('.page').forEach((p) => p.classList.remove('active'));
    tab.classList.add('active');
    $('#' + tab.dataset.page).classList.add('active');
  });
});

// ===== 排序 / 子 Tab =====
$('#sort-tabs').addEventListener('click', (e) => {
  if (!e.target.classList.contains('sort-tab')) return;
  $$('.sort-tab').forEach((t) => t.classList.remove('active'));
  e.target.classList.add('active');
  showToast('已按「' + e.target.textContent + '」排序');
});

$$('.pill-row .pill').forEach((p) => {
  p.addEventListener('click', () => {
    $$('.pill-row .pill').forEach((x) => x.classList.remove('active'));
    if (!p.classList.contains('pill-plus')) p.classList.add('active');
  });
});

$$('.friend-switch .switch-item').forEach((s) => {
  s.addEventListener('click', () => {
    $$('.friend-switch .switch-item').forEach((x) => x.classList.remove('active'));
    s.classList.add('active');
    showToast('已切换到「' + s.textContent + '」');
  });
});

$$('.chip').forEach((c) => {
  c.addEventListener('click', () => showToast('「' + c.textContent.replace(' ›', '') + '」页面演示中'));
});

$$('.me-list-item, .shelf-action, .title-link').forEach((el) => {
  el.addEventListener('click', () => showToast('演示页面，功能待接入'));
});

// ===== 换一批 =====
$('#btn-refresh').addEventListener('click', () => {
  const shuffled = [...ALL_BOOKS].sort(() => Math.random() - 0.5);
  renderHome(shuffled);
  showToast('已为你更新推荐');
});

// ===== 我的页交互 =====
$$('.me-card, .me-profile, .stat-line').forEach((el) => {
  el.addEventListener('click', () => showToast('演示页面，功能待接入'));
});

// ===== 搜索面板 =====
function openSearch() {
  $('#search-mask').classList.add('open');
  $('#search-input').value = '';
  renderHotWords();
  $('#search-results').innerHTML = '';
  $('#hot-block').style.display = '';
  setTimeout(() => $('#search-input').focus(), 50);
}

function closeSearch() {
  $('#search-mask').classList.remove('open');
}

function renderHotWords() {
  const box = $('#hot-words');
  box.innerHTML = '';
  HOT_WORDS.forEach((w) => {
    const el = document.createElement('span');
    el.className = 'hot-word';
    el.textContent = w;
    el.addEventListener('click', () => {
      $('#search-input').value = w;
      doSearch(w);
    });
    box.appendChild(el);
  });
}

function doSearch(keyword) {
  const kw = keyword.trim();
  const box = $('#search-results');
  if (!kw) {
    box.innerHTML = '';
    $('#hot-block').style.display = '';
    return;
  }
  $('#hot-block').style.display = 'none';
  const hits = ALL_BOOKS.filter(
    (b) => b.title.includes(kw) || b.author.includes(kw) || b.cat.includes(kw)
  );
  if (!hits.length) {
    box.innerHTML = '<div class="search-empty">未找到相关书籍，换个关键词试试</div>';
    return;
  }
  box.innerHTML = '';
  hits.forEach((b) => {
    const item = document.createElement('div');
    item.className = 'search-result-item';
    item.innerHTML = `
      ${miniCoverHtml(b)}
      <div class="rank-info">
        <div class="rank-name">${b.title}</div>
        <div class="rank-meta">${b.author} · ${b.cat} · 评分 ${b.score}</div>
      </div>`;
    item.addEventListener('click', () => {
      closeSearch();
      openReader(b.title);
    });
    box.appendChild(item);
  });
}

$('#search-open').addEventListener('click', openSearch);
$('#search-open-2').addEventListener('click', openSearch);
$('#search-close').addEventListener('click', closeSearch);
$('#search-input').addEventListener('input', (e) => doSearch(e.target.value));

// ===== 阅读器 =====
let fontSize = 16;
let currentBook = '三体';
let currentChapter = 0;

function getChapters(title) {
  return (READER_BOOKS[title] && READER_BOOKS[title].chapters) || DEFAULT_CHAPTERS;
}

function applyFontSize() {
  $('#reader-body').style.fontSize = fontSize + 'px';
  $('#font-size-label').textContent = fontSize + 'px';
}

function renderChapter() {
  const chapters = getChapters(currentBook);
  const ch = chapters[currentChapter];
  const body = $('#reader-body');
  body.innerHTML = '';
  const h = document.createElement('h3');
  h.textContent = ch.title;
  body.appendChild(h);
  ch.paragraphs.forEach((p) => {
    const el = document.createElement('p');
    el.textContent = p;
    body.appendChild(el);
  });
  body.scrollTop = 0;
  $('#chapter-label').textContent = `第 ${currentChapter + 1}/${chapters.length} 章`;
  $('#chapter-prev').disabled = currentChapter === 0;
  $('#chapter-next').disabled = currentChapter === chapters.length - 1;
  renderToc();
}

function renderToc() {
  const chapters = getChapters(currentBook);
  const list = $('#toc-list');
  list.innerHTML = '';
  chapters.forEach((ch, i) => {
    const item = document.createElement('div');
    item.className = 'toc-item' + (i === currentChapter ? ' active' : '');
    item.textContent = ch.title;
    item.addEventListener('click', () => {
      currentChapter = i;
      renderChapter();
      $('#reader-toc').classList.remove('open');
    });
    list.appendChild(item);
  });
}

function openReader(title) {
  currentBook = title;
  currentChapter = 0;
  $('#reader-book-name').textContent = title;
  renderChapter();
  applyFontSize();
  $('#reader-mask').classList.add('open');
  $('#reader-toc').classList.remove('open');
}

$('#reader-close').addEventListener('click', () => {
  $('#reader-mask').classList.remove('open');
  $('#reader-toc').classList.remove('open');
});
$('#font-plus').addEventListener('click', () => { if (fontSize < 24) { fontSize += 2; applyFontSize(); } });
$('#font-minus').addEventListener('click', () => { if (fontSize > 12) { fontSize -= 2; applyFontSize(); } });
$('#chapter-prev').addEventListener('click', () => {
  if (currentChapter > 0) { currentChapter--; renderChapter(); }
});
$('#chapter-next').addEventListener('click', () => {
  const chapters = getChapters(currentBook);
  if (currentChapter < chapters.length - 1) { currentChapter++; renderChapter(); }
});
$('#reader-toc-btn').addEventListener('click', () => {
  $('#reader-toc').classList.toggle('open');
});

$('#promo-book').addEventListener('click', () => openReader('三体'));

// ===== 启动 =====
renderToday();
renderHome(ALL_BOOKS);
renderFree();
renderRanks();
renderShelf();
renderHero();
renderFeed();
