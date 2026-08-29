/* =========================================================
   유리나무 작업 허브 · YURIWOOD WORK HUB
   모든 사이트 데이터는 아래 CATEGORIES 하나에서 관리합니다.
   화면 요소(카드/링크)는 이 파일에서 자동 생성됩니다.

   카테고리 필드
     id     : 내부 식별자
     title  : 화면에 보이는 카테고리명
     icon   : 카드 오른쪽 상단 기호
     span   : 데스크톱 6열 그리드에서 차지할 칸 수 (2 또는 4)
     accent : true 이면 옅은 블루 배경으로 강조
     sites  : { name, url, quick } 목록
              quick: true 인 사이트는 상단 QUICK ACCESS 에도 표시
   ========================================================= */

const CATEGORIES = [
  {
    id: "ai",
    title: "AI 도구",
    icon: "◇",
    span: 4,
    accent: true,
    sites: [
      { name: "ChatGPT", url: "https://chatgpt.com/", quick: true },
      { name: "Claude", url: "https://claude.ai/" },
      { name: "Gemini", url: "https://gemini.google.com/" },
      { name: "Suno", url: "https://suno.com/" },
    ],
  },
  {
    id: "dev",
    title: "개발·배포",
    icon: "□",
    span: 2,
    accent: false,
    sites: [
      { name: "GitHub", url: "https://github.com/" },
      { name: "Streamlit", url: "https://share.streamlit.io/" },
      { name: "Netlify", url: "https://app.netlify.com/" },
    ],
  },
  {
    id: "design",
    title: "디자인·레퍼런스",
    icon: "○",
    span: 2,
    accent: false,
    sites: [
      { name: "Pinterest", url: "https://www.pinterest.com/" },
      { name: "Figma", url: "https://www.figma.com/" },
      { name: "Behance", url: "https://www.behance.net/" },
    ],
  },
  {
    id: "docs",
    title: "문서·관리",
    icon: "△",
    span: 2,
    accent: false,
    sites: [
      { name: "Notion", url: "https://www.notion.so/", quick: true },
      { name: "Google Drive", url: "https://drive.google.com/", quick: true },
      { name: "Google Calendar", url: "https://calendar.google.com/" },
    ],
  },
  {
    id: "growth",
    title: "홍보·수익화",
    icon: "◎",
    span: 2,
    accent: false,
    sites: [
      { name: "Instagram", url: "https://www.instagram.com/", quick: true },
      { name: "크몽", url: "https://kmong.com/" },
      { name: "부크크", url: "https://bookk.co.kr/" },
    ],
  },
];

/* ---------- 공통 유틸 ---------- */

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

/** 외부 링크 공통 설정: 항상 새 탭 + 안전한 rel */
const externalLink = (site, categoryTitle) => {
  const a = el("a");
  a.href = site.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", `${site.name} 열기 (${categoryTitle}, 새 탭)`);
  return a;
};

const arrow = () => {
  const span = el("span", "arrow", "↗");
  span.setAttribute("aria-hidden", "true");
  return span;
};

const pad2 = (n) => String(n).padStart(2, "0");

/* ---------- 1. 오늘 날짜 (예: AUG 29 · SAT) ---------- */

function renderToday() {
  const target = document.getElementById("today");
  if (!target) return;

  const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const now = new Date();

  target.textContent = `${MONTHS[now.getMonth()]} ${pad2(now.getDate())} · ${DAYS[now.getDay()]}`;
  target.dateTime = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
}

/* ---------- 2. QUICK ACCESS ---------- */

function renderQuickAccess() {
  const list = document.getElementById("quick-list");
  if (!list) return;

  const quickSites = CATEGORIES.flatMap((category) =>
    category.sites
      .filter((site) => site.quick)
      .map((site) => ({ site, categoryTitle: category.title }))
  );

  const fragment = document.createDocumentFragment();

  quickSites.forEach(({ site, categoryTitle }) => {
    const item = el("li");
    const link = externalLink(site, categoryTitle);
    link.className = "quick__link";
    link.appendChild(el("span", null, site.name));
    link.appendChild(arrow());
    item.appendChild(link);
    fragment.appendChild(item);
  });

  list.replaceChildren(fragment);
}

/* ---------- 3. 카테고리 카드 그리드 ---------- */

function renderCategoryCard(category) {
  const card = el("section", "card" + (category.accent ? " card--accent" : ""));
  card.dataset.span = String(category.span);
  card.setAttribute("aria-labelledby", `cat-${category.id}`);

  const head = el("div", "card__head");
  const titleBox = el("div");
  const title = el("h3", "card__title", category.title);
  title.id = `cat-${category.id}`;
  titleBox.appendChild(title);
  titleBox.appendChild(
    el("span", "card__count", `${pad2(category.sites.length)} SITES`)
  );

  const icon = el("span", "card__icon", category.icon);
  icon.setAttribute("aria-hidden", "true");

  head.appendChild(titleBox);
  head.appendChild(icon);
  card.appendChild(head);

  const list = el("ul", "card__list");
  category.sites.forEach((site) => {
    const item = el("li");
    const link = externalLink(site, category.title);
    link.className = "link";
    link.appendChild(el("span", "link__name", site.name));
    link.appendChild(arrow());
    item.appendChild(link);
    list.appendChild(item);
  });

  card.appendChild(list);
  return card;
}

function renderGrid() {
  const grid = document.getElementById("grid");
  if (!grid) return;

  const fragment = document.createDocumentFragment();
  CATEGORIES.forEach((category) => fragment.appendChild(renderCategoryCard(category)));
  grid.replaceChildren(fragment);
}

/* ---------- 4. 하단 집계 (데이터에서 자동 계산) ---------- */

function renderFooterCount() {
  const target = document.getElementById("foot-count");
  if (!target) return;

  const siteCount = CATEGORIES.reduce((sum, category) => sum + category.sites.length, 0);
  target.textContent = `${siteCount} SITES · ${CATEGORIES.length} CATEGORIES`;
}

/* ---------- 초기 실행 ---------- */

function init() {
  renderToday();
  renderQuickAccess();
  renderGrid();
  renderFooterCount();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
