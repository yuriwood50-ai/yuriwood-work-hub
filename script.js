/* =========================================================
   유리나무 작업 허브 · YURIWOOD WORK HUB
   모든 사이트 데이터는 아래 CATEGORIES 하나에서 관리합니다.
   사이드바 메뉴, 브레드크럼, 사이트 카드는 모두 이 데이터로 생성됩니다.

   카테고리 필드
     id     : 내부 식별자 (메뉴/뷰 식별에 사용)
     title  : 화면에 보이는 카테고리명
     sites  : { name, url, desc, quick } 목록
              desc  : 카드에 표시되는 한 줄 설명
              quick : true 이면 '자주 쓰는 사이트'에도 표시
   ========================================================= */

const CATEGORIES = [
  {
    id: "ai",
    title: "AI 도구",
    sites: [
      {
        name: "ChatGPT",
        url: "https://chatgpt.com/",
        desc: "대화형 AI로 초안 작성과 아이디어 정리",
        quick: true,
      },
      {
        name: "Claude",
        url: "https://claude.ai/",
        desc: "긴 문서 분석과 코드 작업에 강한 AI",
      },
      {
        name: "Gemini",
        url: "https://gemini.google.com/",
        desc: "구글 서비스와 연결되는 AI 어시스턴트",
      },
      {
        name: "Suno",
        url: "https://suno.com/",
        desc: "프롬프트로 음악과 배경음을 생성",
      },
    ],
  },
  {
    id: "dev",
    title: "개발·배포",
    sites: [
      {
        name: "GitHub",
        url: "https://github.com/",
        desc: "코드 저장소와 버전 관리",
      },
      {
        name: "Streamlit",
        url: "https://share.streamlit.io/",
        desc: "파이썬 앱을 웹으로 올리는 배포 클라우드",
      },
      {
        name: "Netlify",
        url: "https://app.netlify.com/",
        desc: "정적 사이트 배포와 도메인 연결",
      },
    ],
  },
  {
    id: "design",
    title: "디자인·레퍼런스",
    sites: [
      {
        name: "Pinterest",
        url: "https://www.pinterest.com/",
        desc: "비주얼 레퍼런스 수집과 무드보드",
      },
      {
        name: "Figma",
        url: "https://www.figma.com/",
        desc: "화면 설계와 디자인 시안 작업",
      },
      {
        name: "Behance",
        url: "https://www.behance.net/",
        desc: "디자인 포트폴리오 탐색",
      },
    ],
  },
  {
    id: "docs",
    title: "문서·작업관리",
    sites: [
      {
        name: "Notion",
        url: "https://www.notion.so/",
        desc: "문서와 프로젝트를 함께 관리하는 워크스페이스",
        quick: true,
      },
      {
        name: "Google Drive",
        url: "https://drive.google.com/",
        desc: "작업 파일 저장과 공유",
        quick: true,
      },
      {
        name: "Google Calendar",
        url: "https://calendar.google.com/",
        desc: "일정과 작업 시간 관리",
      },
    ],
  },
  {
    id: "growth",
    title: "홍보·수익화",
    sites: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
        desc: "작업물 공개와 콘텐츠 홍보",
        quick: true,
      },
      {
        name: "크몽",
        url: "https://kmong.com/",
        desc: "재능 판매와 의뢰 관리",
      },
      {
        name: "부크크",
        url: "https://bookk.co.kr/",
        desc: "전자책·종이책 자가 출판",
      },
    ],
  },
];

/* 대시보드 상위 메뉴의 하위 항목 (외부 링크가 아닌 화면 전환) */
const DASHBOARD = {
  id: "dashboard",
  title: "대시보드",
  views: [
    { id: "all", label: "전체 사이트" },
    { id: "quick", label: "자주 쓰는 사이트" },
  ],
};

const DEFAULT_VIEW = "all";

/* ---------- 공통 유틸 ---------- */

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

const arrow = () => {
  const span = el("span", "arrow", "↗");
  span.setAttribute("aria-hidden", "true");
  return span;
};

const pad2 = (n) => String(n).padStart(2, "0");

const findCategory = (id) => CATEGORIES.find((c) => c.id === id);

/** 카테고리 정보를 붙인 사이트 목록 */
const allSites = () =>
  CATEGORIES.flatMap((category) =>
    category.sites.map((site) => ({ ...site, category: category.title }))
  );

const quickSites = () => allSites().filter((site) => site.quick);

/** 외부 링크 공통 설정: 항상 새 탭 + 안전한 rel */
const setExternal = (a, site, categoryTitle, suffix) => {
  a.href = site.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", `${site.name} 열기 (${categoryTitle}, 새 탭${suffix ? ", " + suffix : ""})`);
  return a;
};

/* ---------- 상태 ---------- */

const state = {
  view: DEFAULT_VIEW, // "all" | "quick" | 카테고리 id
  openGroup: DASHBOARD.id, // 아코디언으로 펼쳐진 상위 메뉴 (한 번에 하나)
};

/** 현재 뷰가 속한 상위 메뉴 id */
const groupOfView = (view) =>
  view === "all" || view === "quick" ? DASHBOARD.id : view;

/** 현재 뷰에 표시할 사이트 목록 */
function sitesOfView(view) {
  if (view === "all") return allSites();
  if (view === "quick") return quickSites();
  const category = findCategory(view);
  return category
    ? category.sites.map((site) => ({ ...site, category: category.title }))
    : [];
}

/** 현재 뷰의 표시 이름 */
function labelOfView(view) {
  if (view === "all") return "전체 사이트";
  if (view === "quick") return "자주 쓰는 사이트";
  const category = findCategory(view);
  return category ? category.title : "";
}

/* ---------- 오늘 날짜 (예: AUG 29 · SAT) ---------- */

function renderToday() {
  const target = document.getElementById("today");
  if (!target) return;

  const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const now = new Date();

  target.textContent = `${MONTHS[now.getMonth()]} ${pad2(now.getDate())} · ${DAYS[now.getDay()]}`;
  target.dateTime = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
}

/* ---------- 사이드바 메뉴 ---------- */

function buildTopButton(group, label, count) {
  const button = el("button", "nav__top");
  button.type = "button";
  button.id = `top-${group}`;
  button.setAttribute("aria-controls", `sub-${group}`);
  button.dataset.group = group;

  button.appendChild(el("span", "nav__label", label));
  button.appendChild(el("span", "nav__count", pad2(count)));

  const chevron = el("span", "nav__chevron");
  chevron.setAttribute("aria-hidden", "true");
  button.appendChild(chevron);

  return button;
}

function buildNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;

  const fragment = document.createDocumentFragment();

  /* 대시보드 그룹: 하위 항목은 화면 전환 버튼 */
  const dashGroup = el("div", "nav__group");
  const dashTop = buildTopButton(DASHBOARD.id, DASHBOARD.title, DASHBOARD.views.length);
  dashTop.addEventListener("click", () => onTopClick(DASHBOARD.id, "all"));

  const dashList = el("ul", "nav__sub");
  dashList.id = `sub-${DASHBOARD.id}`;
  DASHBOARD.views.forEach((view) => {
    const item = el("li");
    const button = el("button", "nav__item");
    button.type = "button";
    button.dataset.view = view.id;
    button.appendChild(el("span", "nav__item-label", view.label));
    button.appendChild(el("span", "nav__item-count", String(sitesOfView(view.id).length)));
    button.addEventListener("click", () => selectView(view.id));
    item.appendChild(button);
    dashList.appendChild(item);
  });

  dashGroup.appendChild(dashTop);
  dashGroup.appendChild(dashList);
  fragment.appendChild(dashGroup);

  /* 카테고리 그룹: 하위 항목은 외부 사이트 링크 */
  CATEGORIES.forEach((category) => {
    const group = el("div", "nav__group");
    const top = buildTopButton(category.id, category.title, category.sites.length);
    top.addEventListener("click", () => onTopClick(category.id, category.id));

    const list = el("ul", "nav__sub");
    list.id = `sub-${category.id}`;

    category.sites.forEach((site) => {
      const item = el("li");
      const link = el("a", "nav__item nav__item--link");
      setExternal(link, site, category.title);
      link.appendChild(el("span", "nav__item-label", site.name));
      link.appendChild(arrow());
      item.appendChild(link);
      list.appendChild(item);
    });

    group.appendChild(top);
    group.appendChild(list);
    fragment.appendChild(group);
  });

  nav.replaceChildren(fragment);
}

/** 상위 메뉴 클릭: 아코디언 토글 + 해당 카테고리 화면 표시 */
function onTopClick(groupId, viewId) {
  if (state.openGroup === groupId) {
    state.openGroup = null; // 이미 펼쳐져 있으면 접기
    syncNav();
    return;
  }
  state.openGroup = groupId; // 한 번에 하나만 펼침
  selectView(viewId);
}

/** 화면(뷰) 전환 */
function selectView(viewId) {
  state.view = viewId;
  state.openGroup = groupOfView(viewId);
  syncNav();
  renderContent();
  closeDrawer({ restoreFocus: false });
}

/** 메뉴의 펼침/선택 상태를 상태값과 동기화 */
function syncNav() {
  const activeGroup = groupOfView(state.view);

  document.querySelectorAll(".nav__group").forEach((group) => {
    const top = group.querySelector(".nav__top");
    const sub = group.querySelector(".nav__sub");
    const isOpen = top.dataset.group === state.openGroup;

    top.setAttribute("aria-expanded", String(isOpen));
    sub.hidden = !isOpen;
    top.classList.toggle("is-open", isOpen);

    const isActive = top.dataset.group === activeGroup;
    top.classList.toggle("is-active", isActive);
    if (isActive) top.setAttribute("aria-current", "true");
    else top.removeAttribute("aria-current");
  });

  document.querySelectorAll(".nav__item[data-view]").forEach((button) => {
    const isActive = button.dataset.view === state.view;
    button.classList.toggle("is-active", isActive);
    if (isActive) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
}

/* ---------- 본문 ---------- */

function buildCard(site) {
  const card = el("a", "site");
  setExternal(card, site, site.category);

  card.appendChild(el("p", "site__cat", site.category));
  card.appendChild(el("h3", "site__name", site.name));
  card.appendChild(el("p", "site__desc", site.desc));

  const go = el("span", "site__go");
  go.appendChild(el("span", null, "바로가기"));
  go.appendChild(arrow());
  card.appendChild(go);

  return card;
}

function buildGrid(sites) {
  const grid = el("div", "grid");
  sites.forEach((site) => grid.appendChild(buildCard(site)));
  return grid;
}

function renderContent() {
  const container = document.getElementById("view");
  if (!container) return;

  const fragment = document.createDocumentFragment();

  if (state.view === "all") {
    /* 전체 사이트: 카테고리별로 묶어서 표시 */
    CATEGORIES.forEach((category) => {
      const section = el("section", "block");
      section.setAttribute("aria-labelledby", `block-${category.id}`);

      const head = el("div", "block__head");
      const title = el("h2", "block__title", category.title);
      title.id = `block-${category.id}`;
      head.appendChild(title);
      head.appendChild(el("span", "block__count", `${pad2(category.sites.length)} SITES`));
      section.appendChild(head);

      section.appendChild(
        buildGrid(category.sites.map((site) => ({ ...site, category: category.title })))
      );
      fragment.appendChild(section);
    });
  } else {
    const sites = sitesOfView(state.view);
    const section = el("section", "block");
    section.setAttribute("aria-labelledby", "block-current");

    const head = el("div", "block__head");
    const title = el("h2", "block__title", labelOfView(state.view));
    title.id = "block-current";
    head.appendChild(title);
    head.appendChild(el("span", "block__count", `${pad2(sites.length)} SITES`));
    section.appendChild(head);

    section.appendChild(buildGrid(sites));
    fragment.appendChild(section);
  }

  container.replaceChildren(fragment);
  renderBreadcrumb();
  renderViewMeta();
}

function renderBreadcrumb() {
  const list = document.getElementById("breadcrumb");
  if (!list) return;

  const groupId = groupOfView(state.view);
  const groupTitle = groupId === DASHBOARD.id ? DASHBOARD.title : labelOfView(state.view);

  const trail = ["작업 허브", groupTitle];
  if (groupId === DASHBOARD.id) trail.push(labelOfView(state.view));

  const fragment = document.createDocumentFragment();
  trail.forEach((label, index) => {
    const item = el("li", "crumb__item");
    if (index === trail.length - 1) {
      item.classList.add("is-current");
      item.setAttribute("aria-current", "page");
    }
    item.appendChild(el("span", null, label));
    fragment.appendChild(item);
  });

  list.replaceChildren(fragment);
}

function renderViewMeta() {
  const viewName = document.getElementById("current-view");
  const count = document.getElementById("current-count");
  const total = sitesOfView(state.view).length;

  if (viewName) viewName.textContent = labelOfView(state.view);
  if (count) count.textContent = `${total}개 사이트 표시 중`;
}

function renderFooterCount() {
  const target = document.getElementById("foot-count");
  if (!target) return;
  target.textContent = `${allSites().length} SITES · ${CATEGORIES.length} CATEGORIES`;
}

/* ---------- 모바일 드로어 ---------- */

const drawer = {
  sidebar: null,
  toggle: null,
  scrim: null,
  isOpen: false,
};

const isMobile = () => window.matchMedia("(max-width: 900px)").matches;

function openDrawer() {
  if (!isMobile() || drawer.isOpen) return;
  drawer.isOpen = true;
  document.body.classList.add("drawer-open");
  drawer.toggle.setAttribute("aria-expanded", "true");
  drawer.scrim.hidden = false;
  const first = drawer.sidebar.querySelector("button, a");
  if (first) first.focus();
}

function closeDrawer({ restoreFocus = true } = {}) {
  if (!drawer.isOpen) return;
  drawer.isOpen = false;
  document.body.classList.remove("drawer-open");
  drawer.toggle.setAttribute("aria-expanded", "false");
  drawer.scrim.hidden = true;
  if (restoreFocus) drawer.toggle.focus();
}

function setupDrawer() {
  drawer.sidebar = document.getElementById("sidebar");
  drawer.toggle = document.getElementById("menu-toggle");
  drawer.scrim = document.getElementById("scrim");
  if (!drawer.sidebar || !drawer.toggle || !drawer.scrim) return;

  drawer.toggle.addEventListener("click", () => {
    if (drawer.isOpen) closeDrawer();
    else openDrawer();
  });

  drawer.scrim.addEventListener("click", () => closeDrawer());

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && drawer.isOpen) closeDrawer();
  });

  /* 데스크톱으로 넓어지면 드로어 상태 초기화 */
  window.addEventListener("resize", () => {
    if (!isMobile() && drawer.isOpen) closeDrawer({ restoreFocus: false });
  });
}

/* ---------- 초기 실행 ---------- */

function init() {
  renderToday();
  buildNav();
  setupDrawer();
  syncNav();
  renderContent();
  renderFooterCount();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
