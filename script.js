/* =========================================================
   유리나무 작업 허브 · YURIWOOD WORK HUB

   데이터는 아래 두 곳에서만 관리합니다.
     CATEGORIES : 1차 카테고리와 그 안의 2차 카테고리 정의
     SITES      : 사이트 65개의 단일 원본 데이터

   같은 사이트를 여러 카테고리에 보여줄 때는 객체를 복제하지 않고
   placements 배열에 "1차ID:2차ID" 문자열을 추가합니다.

   사이트 필드
     id         : 내부 식별자 (중복 금지)
     name       : 화면에 보이는 사이트 이름
     url        : 새 탭으로 열리는 주소
     desc       : 카드에 표시되는 한 줄 설명
     tags       : 검색에만 쓰이는 보조 키워드
     placements : ["dev:deploy", ...] 형태의 배치 목록
     quick      : true 이면 '자주 쓰는 사이트'에 표시
     project    : true 이면 '내 프로젝트'에 표시
   ========================================================= */

const CATEGORIES = [
  {
    id: "ai",
    title: "AI · 제작",
    subs: [
      { id: "chat", title: "대화 · 기획" },
      { id: "research", title: "리서치 · 요약" },
      { id: "media", title: "이미지 · 음악 생성" },
    ],
  },
  {
    id: "dev",
    title: "개발 · 배포",
    subs: [
      { id: "aicode", title: "AI 코딩 도구" },
      { id: "practice", title: "코딩 · 실습" },
      { id: "build", title: "앱 · 웹 제작" },
      { id: "deploy", title: "저장소 · 배포" },
      { id: "projects", title: "내 프로젝트" },
    ],
  },
  {
    id: "design",
    title: "창작 · 디자인",
    subs: [
      { id: "illust", title: "일러스트 · 레퍼런스" },
      { id: "ui", title: "UI · 콘텐츠 디자인" },
      { id: "edit", title: "이미지 · 영상 편집" },
      { id: "ip", title: "저작권 · IP" },
    ],
  },
  {
    id: "teach",
    title: "수업 · 교육",
    subs: [
      { id: "material", title: "수업 자료 제작" },
      { id: "operate", title: "수업 운영 · 공유" },
      { id: "learn", title: "수강 · 학습 자료" },
    ],
  },
  {
    id: "biz",
    title: "사업 · 수익화",
    subs: [
      { id: "sell", title: "판매 · 출판" },
      { id: "stock", title: "스톡 · 콘텐츠 조사" },
      { id: "sns", title: "SNS · 마케팅" },
      { id: "brand", title: "포트폴리오 · 브랜드" },
      { id: "startup", title: "창업 · 지원사업" },
    ],
  },
  {
    id: "work",
    title: "업무 · 관리",
    subs: [
      { id: "files", title: "파일 · 데이터" },
      { id: "note", title: "기획 · 기록" },
      { id: "mail", title: "메일 · 연락" },
    ],
  },
];

const SITES = [
  /* ---------- AI · 제작 ---------- */
  {
    id: "chatgpt",
    name: "ChatGPT",
    url: "https://chatgpt.com/",
    desc: "대화로 초안을 쓰고 아이디어를 정리하는 범용 AI입니다.",
    tags: ["AI", "챗봇", "글쓰기", "기획", "openai"],
    placements: ["ai:chat"],
    quick: true,
  },
  {
    id: "claude",
    name: "Claude",
    url: "https://claude.ai/",
    desc: "긴 문서 분석과 코드 작업에 강한 대화형 AI입니다.",
    tags: ["AI", "챗봇", "문서", "코딩", "anthropic"],
    placements: ["ai:chat"],
    quick: true,
  },
  {
    id: "gemini",
    name: "Gemini",
    url: "https://gemini.google.com/",
    desc: "구글 서비스와 자연스럽게 이어지는 AI 어시스턴트입니다.",
    tags: ["AI", "챗봇", "구글", "google"],
    placements: ["ai:chat"],
  },
  {
    id: "perplexity",
    name: "Perplexity",
    url: "https://www.perplexity.ai/",
    desc: "출처를 함께 보여 주는 AI 검색으로 자료를 빠르게 조사합니다.",
    tags: ["AI", "검색", "리서치", "출처", "조사"],
    placements: ["ai:research"],
  },
  {
    id: "lilys",
    name: "Lilys AI",
    url: "https://lilys.ai/ko/",
    desc: "영상과 긴 문서를 한국어로 요약해 핵심만 정리해 줍니다.",
    tags: ["AI", "요약", "영상", "노트", "릴리스"],
    placements: ["ai:research"],
  },
  {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    url: "https://firefly.adobe.com/",
    desc: "상업적으로 쓰기 안전한 이미지를 만드는 어도비 생성형 AI입니다.",
    tags: ["AI", "이미지", "생성", "어도비", "adobe"],
    placements: ["ai:media", "biz:stock"],
  },
  {
    id: "suno",
    name: "Suno",
    url: "https://suno.com/",
    desc: "가사와 프롬프트만으로 음악과 배경음을 만드는 AI입니다.",
    tags: ["AI", "음악", "작곡", "배경음", "BGM"],
    placements: ["ai:media"],
  },

  /* ---------- 개발 · 배포 ---------- */
  {
    id: "claude-code-docs",
    name: "Claude Code Docs",
    url: "https://docs.anthropic.com/en/docs/claude-code/overview",
    desc: "터미널에서 코드를 맡기는 클로드 코드의 공식 사용 설명서입니다.",
    tags: ["개발", "문서", "AI 코딩", "claude code", "가이드"],
    placements: ["dev:aicode", "teach:learn"],
  },
  {
    id: "codex-docs",
    name: "OpenAI Codex Docs",
    url: "https://developers.openai.com/codex",
    desc: "오픈AI 코덱스 코딩 에이전트의 설정과 사용법을 정리한 문서입니다.",
    tags: ["개발", "문서", "AI 코딩", "codex", "openai"],
    placements: ["dev:aicode", "teach:learn"],
  },
  {
    id: "opencode",
    name: "OpenCode",
    url: "https://opencode.ai/",
    desc: "터미널에서 바로 쓰는 오픈소스 AI 코딩 에이전트입니다.",
    tags: ["개발", "AI 코딩", "오픈소스", "터미널", "에이전트"],
    placements: ["dev:aicode"],
  },
  {
    id: "antigravity",
    name: "Google Antigravity",
    url: "https://antigravity.google/download",
    desc: "구글이 만든 에이전트 기반 코딩 환경을 내려받는 곳입니다.",
    tags: ["개발", "AI 코딩", "구글", "에디터", "antigravity"],
    placements: ["dev:aicode", "teach:learn"],
  },
  {
    id: "colab",
    name: "Google Colab",
    url: "https://colab.research.google.com/",
    desc: "설치 없이 브라우저에서 파이썬을 실행하는 노트북 환경입니다.",
    tags: ["개발", "파이썬", "실습", "노트북", "python"],
    placements: ["dev:practice", "teach:learn"],
  },
  {
    id: "replit",
    name: "Replit",
    url: "https://replit.com/",
    desc: "브라우저에서 코드를 쓰고 그대로 실행·공개할 수 있는 작업실입니다.",
    tags: ["개발", "실습", "클라우드", "IDE", "배포"],
    placements: ["dev:practice", "dev:build"],
  },
  {
    id: "lovable",
    name: "Lovable",
    url: "https://lovable.dev/",
    desc: "대화만으로 웹 앱 화면과 기능을 만들어 주는 제작 도구입니다.",
    tags: ["개발", "웹앱", "노코드", "AI", "프로토타입"],
    placements: ["dev:build"],
  },
  {
    id: "streamlit",
    name: "Streamlit",
    url: "https://share.streamlit.io/",
    desc: "파이썬으로 만든 데이터 앱을 웹으로 공유하는 배포 클라우드입니다.",
    tags: ["개발", "파이썬", "배포", "데이터 앱", "공유"],
    placements: ["dev:build", "dev:deploy"],
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/",
    desc: "코드와 문서를 버전으로 관리하고 백업하는 저장소입니다.",
    tags: ["개발", "저장소", "깃허브", "버전 관리", "git"],
    placements: ["dev:deploy"],
    quick: true,
  },
  {
    id: "work-hub-repository",
    name: "Work Hub 저장소",
    url: "https://github.com/yuriwood50-ai/yuriwood-work-hub",
    desc: "이 작업 허브 페이지의 소스 코드를 관리하는 저장소입니다.",
    tags: ["내 프로젝트", "저장소", "깃허브", "작업 허브", "소스"],
    placements: ["dev:deploy", "dev:projects"],
    project: true,
  },
  {
    id: "netlify",
    name: "Netlify",
    url: "https://app.netlify.com/",
    desc: "정적 사이트를 올리고 도메인을 연결하는 배포 서비스입니다.",
    tags: ["개발", "배포", "호스팅", "도메인", "정적 사이트"],
    placements: ["dev:deploy"],
  },
  {
    id: "vercel",
    name: "Vercel",
    url: "https://vercel.com/dashboard",
    desc: "프런트엔드 프로젝트를 배포하고 상태를 확인하는 대시보드입니다.",
    tags: ["개발", "배포", "호스팅", "프런트엔드"],
    placements: ["dev:deploy"],
  },
  {
    id: "cloudflare-pages",
    name: "Cloudflare Pages",
    url: "https://dash.cloudflare.com/",
    desc: "도메인과 정적 사이트 배포를 함께 관리하는 콘솔입니다.",
    tags: ["개발", "배포", "도메인", "DNS", "클라우드플레어"],
    placements: ["dev:deploy"],
  },
  {
    id: "workhub-site",
    name: "유리나무 작업 허브",
    url: "https://yuriwood50-ai.github.io/yuriwood-work-hub/",
    desc: "지금 보고 있는 개인 작업 링크 허브의 공개 페이지입니다.",
    tags: ["내 프로젝트", "작업 허브", "github pages", "링크 모음"],
    placements: ["dev:projects", "teach:learn"],
    quick: true,
    project: true,
  },
  {
    id: "habit-tracker",
    name: "Habit Tracker",
    url: "https://stirring-fairy-609713.netlify.app/",
    desc: "직접 만들어 배포한 습관 기록 웹 앱입니다.",
    tags: ["내 프로젝트", "습관", "웹앱", "넷리파이", "기록"],
    placements: ["dev:projects", "teach:learn"],
    project: true,
  },

  /* ---------- 창작 · 디자인 ---------- */
  {
    id: "pinterest",
    name: "Pinterest",
    url: "https://www.pinterest.com/",
    desc: "작업 분위기와 레퍼런스를 모아 두는 이미지 보드입니다.",
    tags: ["디자인", "레퍼런스", "무드보드", "이미지", "핀터레스트"],
    placements: ["design:illust"],
    quick: true,
  },
  {
    id: "behance",
    name: "Behance",
    url: "https://www.behance.net/",
    desc: "실제 디자인 포트폴리오를 살펴보며 감각을 익히는 갤러리입니다.",
    tags: ["디자인", "포트폴리오", "레퍼런스", "갤러리"],
    placements: ["design:illust"],
  },
  {
    id: "sanggrim",
    name: "산그림",
    url: "https://www.picturebook-illust.com/",
    desc: "국내 일러스트레이터의 작품과 활동을 찾아보는 커뮤니티입니다.",
    tags: ["일러스트", "그림책", "작가", "포트폴리오", "국내"],
    placements: ["design:illust", "biz:brand"],
  },
  {
    id: "figma",
    name: "Figma",
    url: "https://www.figma.com/",
    desc: "화면 설계와 디자인 시안을 함께 만드는 협업 도구입니다.",
    tags: ["디자인", "UI", "시안", "협업", "피그마"],
    placements: ["design:ui", "teach:material"],
  },
  {
    id: "canva",
    name: "Canva",
    url: "https://www.canva.com/",
    desc: "템플릿으로 카드뉴스와 수업 자료를 빠르게 만드는 도구입니다.",
    tags: ["디자인", "템플릿", "자료", "카드뉴스", "캔바"],
    placements: ["design:ui", "teach:material"],
    quick: true,
  },
  {
    id: "miricanvas",
    name: "미리캔버스",
    url: "https://www.miricanvas.com/ko",
    desc: "한글 템플릿이 많아 수업·홍보 자료 제작에 편한 디자인 도구입니다.",
    tags: ["디자인", "템플릿", "한글", "자료", "미리캔버스"],
    placements: ["design:ui", "teach:material"],
  },
  {
    id: "capcut",
    name: "CapCut",
    url: "https://www.capcut.com/",
    desc: "영상 컷 편집과 자막 작업을 간단히 끝내는 편집기입니다.",
    tags: ["영상", "편집", "자막", "숏폼", "캡컷"],
    placements: ["design:edit", "biz:sns"],
  },
  {
    id: "procreate",
    name: "Procreate",
    url: "https://procreate.com/",
    desc: "아이패드에서 일러스트와 드로잉 작업을 하는 그림 앱입니다.",
    tags: ["일러스트", "드로잉", "아이패드", "그림", "프로크리에이트"],
    placements: ["design:edit", "teach:material"],
  },
  {
    id: "copyright-korea",
    name: "한국저작권위원회",
    url: "https://www.copyright.or.kr/",
    desc: "저작권 등록 절차와 상담 정보를 확인하는 공식 기관입니다.",
    tags: ["저작권", "등록", "상담", "법률", "IP"],
    placements: ["design:ip", "biz:startup"],
  },
  {
    id: "kakao-emoticon",
    name: "카카오 이모티콘 스튜디오",
    url: "https://emoticonstudio.kakao.com/",
    desc: "이모티콘을 제안하고 승인·판매 현황을 관리하는 창작 스튜디오입니다.",
    tags: ["이모티콘", "카카오", "제안", "판매", "창작"],
    placements: ["design:ip", "biz:sell"],
  },
  {
    id: "artist-career",
    name: "예술인경력정보시스템",
    url: "https://www.kawfartist.kr/",
    desc: "예술인 활동 증명과 경력을 등록하고 관리하는 시스템입니다.",
    tags: ["예술인", "경력", "활동 증명", "지원", "등록"],
    placements: ["design:ip", "biz:startup"],
  },

  /* ---------- 수업 · 교육 ---------- */
  {
    id: "google-docs",
    name: "Google Docs",
    url: "https://docs.google.com/document/",
    desc: "수업 계획서와 문서를 온라인에서 작성하고 바로 공유합니다.",
    tags: ["문서", "구글", "협업", "글쓰기", "docs"],
    placements: ["teach:material", "work:files"],
  },
  {
    id: "google-slides",
    name: "Google Slides",
    url: "https://docs.google.com/presentation/",
    desc: "수업용 발표 자료를 만들고 링크로 공유하는 슬라이드 도구입니다.",
    tags: ["발표", "슬라이드", "구글", "수업", "ppt"],
    placements: ["teach:material", "work:files"],
  },
  {
    id: "google-forms",
    name: "Google Forms",
    url: "https://docs.google.com/forms/",
    desc: "설문과 과제 제출을 온라인으로 받는 폼 도구입니다.",
    tags: ["설문", "폼", "과제", "구글", "응답"],
    placements: ["teach:material", "teach:operate"],
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    url: "https://calendar.google.com/",
    desc: "수업과 작업 일정을 한눈에 관리하는 달력입니다.",
    tags: ["일정", "달력", "계획", "구글", "스케줄"],
    placements: ["teach:operate", "work:note"],
    quick: true,
  },
  {
    id: "zoom",
    name: "Zoom",
    url: "https://zoom.us/",
    desc: "온라인 수업과 회의를 진행하는 화상 도구입니다.",
    tags: ["화상", "회의", "수업", "줌", "원격"],
    placements: ["teach:operate", "work:mail"],
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "https://www.youtube.com/",
    desc: "강의 영상을 찾아보고 직접 만든 영상을 공유하는 플랫폼입니다.",
    tags: ["영상", "강의", "공유", "유튜브", "학습"],
    placements: ["teach:operate", "teach:learn"],
  },
  {
    id: "ict-innovation",
    name: "ICT 이노베이션스퀘어",
    url: "https://ictinnovation.kr/",
    desc: "무료 AI·디지털 실무 교육 과정을 확인하고 신청하는 곳입니다.",
    tags: ["교육", "무료", "AI", "국비", "강의"],
    placements: ["teach:learn", "biz:startup"],
  },
  {
    id: "genai-master",
    name: "생성형 AI 프로덕트 마스터",
    url: "https://www.genai-hk.com/",
    desc: "생성형 AI 제품 기획과 실습을 배우는 과정 안내 페이지입니다.",
    tags: ["교육", "생성형 AI", "과정", "실습", "프로덕트"],
    placements: ["teach:learn"],
  },
  {
    id: "ai-glossary",
    name: "AI 용어사전",
    url: "https://note26.colabstart.workers.dev/%EC%9A%A9%EC%96%B4%EC%82%AC%EC%A0%84/",
    desc: "낯선 AI 용어를 한국어 설명으로 찾아보는 사전입니다.",
    tags: ["AI", "용어", "사전", "학습", "정리"],
    placements: ["teach:learn"],
  },

  /* ---------- 사업 · 수익화 ---------- */
  {
    id: "kmong",
    name: "크몽",
    url: "https://kmong.com/",
    desc: "디자인·강의 서비스를 등록하고 의뢰를 받는 재능 마켓입니다.",
    tags: ["판매", "프리랜서", "외주", "마켓", "의뢰"],
    placements: ["biz:sell"],
    quick: true,
  },
  {
    id: "bookk",
    name: "부크크",
    url: "https://bookk.co.kr/",
    desc: "전자책과 종이책을 직접 출판하는 자가출판 서비스입니다.",
    tags: ["출판", "전자책", "종이책", "자가출판", "부크크"],
    placements: ["biz:sell"],
  },
  {
    id: "ctee",
    name: "크티 (CTEE)",
    url: "https://ctee.kr/",
    desc: "창작물과 굿즈를 판매하고 후원을 받는 크리에이터 마켓입니다.",
    tags: ["판매", "굿즈", "창작", "마켓", "ctee"],
    placements: ["biz:sell"],
  },
  {
    id: "adobe-stock-contributor",
    name: "Adobe Stock Contributor",
    url: "https://contributor.stock.adobe.com/",
    desc: "직접 만든 이미지를 스톡으로 등록하고 수익을 확인합니다.",
    tags: ["스톡", "판매", "수익", "어도비", "기여자"],
    placements: ["biz:sell", "biz:stock"],
    quick: true,
  },
  {
    id: "miricanvas-designhub",
    name: "미리캔버스 디자인허브",
    url: "https://designhub.miricanvas.com/ko/login",
    desc: "디자인 템플릿을 등록해 판매하는 크리에이터 허브입니다.",
    tags: ["템플릿", "판매", "미리캔버스", "수익", "디자인허브"],
    placements: ["biz:sell", "biz:stock"],
  },
  {
    id: "adobe-stock",
    name: "Adobe Stock",
    url: "https://stock.adobe.com/",
    desc: "잘 팔리는 이미지 흐름과 키워드 수요를 조사하는 스톡 마켓입니다.",
    tags: ["스톡", "조사", "키워드", "이미지", "어도비"],
    placements: ["biz:stock"],
  },
  {
    id: "designhub-guide",
    name: "미리캔버스 디자인허브 가이드",
    url: "https://slashpage.com/designhub-guide/943zqpmqrxpy72wnvy87",
    desc: "디자인허브 등록 기준과 운영 방법을 정리해 둔 안내서입니다.",
    tags: ["가이드", "템플릿", "미리캔버스", "등록", "기준"],
    placements: ["biz:stock", "teach:learn"],
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/",
    desc: "작업물을 공개하고 사람들과 소통하는 대표 채널입니다.",
    tags: ["SNS", "홍보", "콘텐츠", "인스타그램", "피드"],
    placements: ["biz:sns"],
    quick: true,
  },
  {
    id: "threads",
    name: "Threads",
    url: "https://www.threads.com/",
    desc: "짧은 글로 작업 기록과 소식을 남기는 텍스트 채널입니다.",
    tags: ["SNS", "텍스트", "소통", "스레드", "기록"],
    placements: ["biz:sns"],
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/",
    desc: "페이지와 커뮤니티로 소식을 전하는 채널입니다.",
    tags: ["SNS", "페이지", "커뮤니티", "페이스북", "홍보"],
    placements: ["biz:sns"],
  },
  {
    id: "meta-business-suite",
    name: "Meta Business Suite",
    url: "https://business.facebook.com/",
    desc: "인스타그램과 페이스북 게시물, 성과를 한곳에서 관리합니다.",
    tags: ["SNS", "관리", "예약 발행", "통계", "메타"],
    placements: ["biz:sns"],
    quick: true,
  },
  {
    id: "youtube-studio",
    name: "YouTube Studio",
    url: "https://studio.youtube.com/",
    desc: "채널 영상과 시청 성과를 관리하는 운영 화면입니다.",
    tags: ["유튜브", "채널", "통계", "운영", "영상"],
    placements: ["biz:sns"],
  },
  {
    id: "wix",
    name: "Wix",
    url: "https://www.wix.com/",
    desc: "코드 없이 브랜드 홈페이지를 만드는 웹사이트 빌더입니다.",
    tags: ["홈페이지", "브랜드", "빌더", "윅스", "웹사이트"],
    placements: ["biz:brand"],
  },
  {
    id: "yuriwood-portfolio",
    name: "yuriwood.com",
    url: "https://yuriwood.com/",
    desc: "유리나무 브랜드를 소개하는 대표 홈페이지입니다.",
    tags: ["내 프로젝트", "브랜드", "홈페이지", "유리나무", "포트폴리오"],
    placements: ["biz:brand", "dev:projects"],
    project: true,
  },
  {
    id: "k-startup",
    name: "K-Startup",
    url: "https://www.k-startup.go.kr/",
    desc: "정부 창업 지원사업 공고를 확인하고 신청하는 창구입니다.",
    tags: ["창업", "지원사업", "공고", "정부", "신청"],
    placements: ["biz:startup"],
  },
  {
    id: "bizinfo",
    name: "기업마당",
    url: "https://www.bizinfo.go.kr/",
    desc: "중소기업·소상공인 지원 정보를 모아 보는 종합 안내소입니다.",
    tags: ["지원사업", "중소기업", "소상공인", "공고", "정보"],
    placements: ["biz:startup"],
  },
  {
    id: "gcon",
    name: "경기콘텐츠진흥원",
    url: "https://www.gcon.or.kr/",
    desc: "경기도 콘텐츠 분야 지원사업과 공간 정보를 확인합니다.",
    tags: ["지원사업", "경기", "콘텐츠", "공모", "지역"],
    placements: ["biz:startup"],
  },
  {
    id: "modoo-startup",
    name: "모두의 창업",
    url: "https://modoo.or.kr/",
    desc: "창업 정보와 교육을 한곳에서 찾아보는 플랫폼입니다.",
    tags: ["창업", "교육", "정보", "지원", "모두의창업"],
    placements: ["biz:startup"],
    quick: true,
  },

  /* ---------- 업무 · 관리 ---------- */
  {
    id: "google-drive",
    name: "Google Drive",
    url: "https://drive.google.com/",
    desc: "작업 파일을 저장하고 필요한 사람과 공유하는 저장소입니다.",
    tags: ["파일", "저장", "공유", "구글", "드라이브"],
    placements: ["work:files", "teach:operate"],
    quick: true,
  },
  {
    id: "google-sheets",
    name: "Google Sheets",
    url: "https://docs.google.com/spreadsheets/",
    desc: "작업 목록과 수익 데이터를 표로 정리하고 계산합니다.",
    tags: ["표", "데이터", "정리", "구글", "스프레드시트"],
    placements: ["work:files", "biz:stock"],
  },
  {
    id: "notion",
    name: "Notion",
    url: "https://www.notion.so/",
    desc: "문서와 프로젝트를 한 워크스페이스에서 함께 관리합니다.",
    tags: ["문서", "기록", "프로젝트", "노션", "정리"],
    placements: ["work:note", "teach:material"],
    quick: true,
  },
  {
    id: "obsidian",
    name: "Obsidian",
    url: "https://obsidian.md/",
    desc: "메모를 서로 연결해 나만의 자료를 쌓아 가는 노트 앱입니다.",
    tags: ["메모", "노트", "기록", "로컬", "옵시디언"],
    placements: ["work:note"],
  },
  {
    id: "gmail",
    name: "Gmail",
    url: "https://mail.google.com/",
    desc: "업무 메일을 확인하고 답장하는 메일함입니다.",
    tags: ["메일", "연락", "구글", "지메일", "커뮤니케이션"],
    placements: ["work:mail"],
  },
];

/* =========================================================
   작업 런처 (WORKFLOWS)

   목적별 작업 순서와 필요한 도구를 모아 보여 줍니다.
   siteIds 는 위 SITES 의 id 를 참조하기만 합니다.
   사이트 이름·주소·설명을 여기에 다시 적지 않습니다.

     id      : 런처 식별자 (중복 금지)
     number  : 카드 왼쪽 위에 표시할 두 자리 번호
     title   : 런처 이름
     desc    : 한 줄 설명
     steps   : 작업 단계 (순서 있는 목록)
     siteIds : 필요한 도구의 SITES id 목록
   ========================================================= */

const WORKFLOWS = [
  {
    id: "class-prep",
    number: "01",
    title: "수업 준비",
    desc: "수업 기획부터 자료 제작과 일정 관리까지",
    steps: [
      "수업 주제와 목표 정하기",
      "수업안 작성하기",
      "슬라이드와 실습 자료 만들기",
      "수업 파일 공유하기",
      "일정과 수업 링크 확인하기",
    ],
    siteIds: [
      "chatgpt",
      "claude",
      "google-docs",
      "google-slides",
      "canva",
      "miricanvas",
      "procreate",
      "google-drive",
      "google-calendar",
      "zoom",
      "youtube",
    ],
  },
  {
    id: "ai-stock",
    number: "02",
    title: "AI 스톡 제작",
    desc: "추천 주제 조사부터 이미지 등록과 판매 기록까지",
    steps: [
      "추천 주제 확인하기",
      "판매 콘텐츠 조사하기",
      "이미지 프롬프트 작성하기",
      "이미지 생성하고 검수하기",
      "스톡 플랫폼에 등록하기",
      "등록 내역 기록하기",
    ],
    siteIds: [
      "designhub-guide",
      "adobe-stock",
      "chatgpt",
      "adobe-firefly",
      "adobe-stock-contributor",
      "miricanvas-designhub",
      "google-sheets",
    ],
  },
  {
    id: "sns-publish",
    number: "03",
    title: "SNS · 웹툰 발행",
    desc: "콘텐츠 기획부터 이미지 제작과 예약 게시까지",
    steps: [
      "게시할 소재 정하기",
      "글과 대사 작성하기",
      "이미지와 카드뉴스 제작하기",
      "영상이 필요하면 편집하기",
      "SNS에 게시하거나 예약하기",
    ],
    siteIds: [
      "chatgpt",
      "procreate",
      "canva",
      "miricanvas",
      "capcut",
      "instagram",
      "threads",
      "meta-business-suite",
      "youtube-studio",
    ],
  },
  {
    id: "app-update",
    number: "04",
    title: "앱 · 웹 업데이트",
    desc: "코드 수정부터 GitHub 저장과 배포 확인까지",
    steps: [
      "수정 내용 정리하기",
      "AI 코딩 도구로 코드 수정하기",
      "로컬 화면과 기능 검사하기",
      "Git 커밋 만들기",
      "GitHub에 Push하기",
      "배포 페이지 확인하기",
    ],
    siteIds: [
      "claude",
      "claude-code-docs",
      "codex-docs",
      "github",
      "replit",
      "lovable",
      "streamlit",
      "netlify",
      "vercel",
      "cloudflare-pages",
      "work-hub-repository",
      "habit-tracker",
    ],
  },
  {
    id: "ebook-product",
    number: "05",
    title: "전자책 · 상품 관리",
    desc: "원고와 상품 제작부터 판매 등록과 매출 기록까지",
    steps: [
      "상품 내용 기획하기",
      "원고와 제공 파일 제작하기",
      "표지와 상세페이지 만들기",
      "판매 플랫폼에 등록하기",
      "판매와 매출 기록하기",
    ],
    siteIds: [
      "chatgpt",
      "claude",
      "google-docs",
      "canva",
      "google-drive",
      "kmong",
      "bookk",
      "ctee",
      "google-sheets",
    ],
  },
  {
    id: "portfolio",
    number: "06",
    title: "포트폴리오 관리",
    desc: "작품 선별부터 포트폴리오와 창작 경력 관리까지",
    steps: [
      "등록할 작품 선별하기",
      "이미지와 작품 정보 정리하기",
      "포트폴리오 사이트에 등록하기",
      "저작권과 활동 경력 관리하기",
    ],
    siteIds: [
      "pinterest",
      "behance",
      "sanggrim",
      "wix",
      "yuriwood-portfolio",
      "google-drive",
      "copyright-korea",
      "artist-career",
      "kakao-emoticon",
    ],
  },
  {
    id: "grant-apply",
    number: "07",
    title: "지원사업 신청",
    desc: "공고 검색부터 지원서 제출과 마감 관리까지",
    steps: [
      "새로운 공고 검색하기",
      "신청 자격과 마감 확인하기",
      "지원서 작성하기",
      "제출 서류 준비하기",
      "신청하고 결과 일정을 등록하기",
    ],
    siteIds: [
      "k-startup",
      "bizinfo",
      "gcon",
      "modoo-startup",
      "ict-innovation",
      "chatgpt",
      "claude",
      "google-docs",
      "google-drive",
      "google-calendar",
    ],
  },
];

/* 대시보드 상위 메뉴 (외부 링크가 아닌 화면 전환) */
const DASHBOARD = {
  id: "dashboard",
  title: "대시보드",
  views: [
    { id: "all", label: "전체 사이트" },
    { id: "quick", label: "자주 쓰는 사이트" },
    { id: "project", label: "내 프로젝트" },
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

const findSub = (categoryId, subId) => {
  const category = findCategory(categoryId);
  return category ? category.subs.find((s) => s.id === subId) : undefined;
};

/** "dev:deploy" → { category: "개발 · 배포", sub: "저장소 · 배포" } */
function placementParts(placement) {
  const [categoryId, subId] = String(placement).split(":");
  const category = findCategory(categoryId);
  const sub = findSub(categoryId, subId);
  if (!category || !sub) return null;
  return { category: category.title, sub: sub.title };
}

/** 카드 위에 표시할 카테고리 경로 (예: 개발 · 배포 › 저장소 · 배포) */
function pathLabel(placement) {
  const parts = placementParts(placement);
  return parts ? `${parts.category} › ${parts.sub}` : "";
}

/* ---------- 사이트 조회 ---------- */

const sitesOfPlacement = (placement) =>
  SITES.filter((site) => site.placements.includes(placement));

/** 1차 카테고리에 속한 사이트 (2차 카테고리 중복 배치는 한 번만) */
const sitesOfCategory = (categoryId) =>
  SITES.filter((site) =>
    site.placements.some((p) => p.split(":")[0] === categoryId)
  );

const quickSites = () => SITES.filter((site) => site.quick);
const projectSites = () => SITES.filter((site) => site.project);

const findSite = (siteId) => SITES.find((item) => item.id === siteId);
const findWorkflow = (id) => WORKFLOWS.find((flow) => flow.id === id);

/**
 * 런처가 참조하는 도구 목록.
 * SITES 에 없는 id 는 조용히 무시하지 않고 콘솔에 오류로 알린다.
 */
function sitesOfWorkflow(workflow) {
  const tools = [];
  workflow.siteIds.forEach((siteId) => {
    const site = findSite(siteId);
    if (!site) {
      console.error(
        `[작업 런처] "${workflow.id}"가 SITES에 없는 사이트 id를 참조합니다: "${siteId}"`
      );
      return;
    }
    tools.push(site);
  });
  return tools;
}

/** 한 사이트가 특정 1차 카테고리 안에서 속한 2차 카테고리 이름들 */
const subLabelsInCategory = (site, categoryId) =>
  site.placements
    .filter((p) => p.split(":")[0] === categoryId)
    .map((p) => {
      const parts = placementParts(p);
      return parts ? parts.sub : "";
    })
    .filter(Boolean)
    .join(" · ");

/** 외부 링크 공통 설정: 항상 새 탭 + 안전한 rel */
const setExternal = (a, site, contextLabel) => {
  a.href = site.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute(
    "aria-label",
    `${site.name} 열기 (${contextLabel || "작업 허브"}, 새 탭)`
  );
  return a;
};

/* ---------- 검색 ---------- */

const searchIndex = new Map();

/** 이름·설명·태그·1차/2차 카테고리 이름을 합친 검색용 문자열 */
function haystackOf(site) {
  let text = searchIndex.get(site.id);
  if (text === undefined) {
    const parts = [site.name, site.desc, ...(site.tags || [])];
    site.placements.forEach((placement) => {
      const label = placementParts(placement);
      if (label) parts.push(label.category, label.sub);
    });
    if (site.quick) parts.push("자주 쓰는 사이트");
    if (site.project) parts.push("내 프로젝트");
    text = parts.join(" ").toLowerCase();
    searchIndex.set(site.id, text);
  }
  return text;
}

/** 공백으로 나눈 모든 낱말을 포함하는 사이트만 반환 */
function searchSites(query) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return SITES.filter((site) => {
    const text = haystackOf(site);
    return terms.every((term) => text.includes(term));
  });
}

/* ---------- 상태 ---------- */

const state = {
  view: DEFAULT_VIEW, // "all" | "quick" | "project" | 1차ID | "1차ID:2차ID"
  query: "", // 검색어 (비어 있지 않으면 검색 결과 화면)
  openGroup: DASHBOARD.id, // 아코디언으로 펼쳐진 상위 메뉴 (한 번에 하나)
  launcher: null, // 펼쳐진 작업 런처 id (한 번에 하나)
};

const isSearching = () => state.query.trim().length > 0;

/** 현재 뷰가 속한 상위 메뉴 id */
const groupOfView = (view) =>
  DASHBOARD.views.some((v) => v.id === view) ? DASHBOARD.id : view.split(":")[0];

/** 현재 뷰에 표시할 사이트 목록 */
function sitesOfView(view) {
  if (view === "all") return SITES.slice();
  if (view === "quick") return quickSites();
  if (view === "project") return projectSites();
  if (view.includes(":")) return sitesOfPlacement(view);
  return sitesOfCategory(view);
}

/** 현재 뷰의 표시 이름 */
function labelOfView(view) {
  const dashboardView = DASHBOARD.views.find((v) => v.id === view);
  if (dashboardView) return dashboardView.label;
  if (view.includes(":")) {
    const parts = placementParts(view);
    return parts ? parts.sub : "";
  }
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

function buildSubButton(viewId, label, count) {
  const item = el("li");
  const button = el("button", "nav__item");
  button.type = "button";
  button.dataset.view = viewId;
  button.appendChild(el("span", "nav__item-label", label));
  button.appendChild(el("span", "nav__item-count", String(count)));
  button.addEventListener("click", () => selectView(viewId));
  item.appendChild(button);
  return item;
}

function buildNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;

  const fragment = document.createDocumentFragment();

  /* 대시보드 그룹 */
  const dashGroup = el("div", "nav__group");
  const dashTop = buildTopButton(DASHBOARD.id, DASHBOARD.title, DASHBOARD.views.length);
  dashTop.addEventListener("click", () => onTopClick(DASHBOARD.id, "all"));

  const dashList = el("ul", "nav__sub");
  dashList.id = `sub-${DASHBOARD.id}`;
  DASHBOARD.views.forEach((view) => {
    dashList.appendChild(buildSubButton(view.id, view.label, sitesOfView(view.id).length));
  });

  dashGroup.appendChild(dashTop);
  dashGroup.appendChild(dashList);
  fragment.appendChild(dashGroup);

  /* 1차 카테고리 그룹: 하위 항목은 2차 카테고리 화면 전환 */
  CATEGORIES.forEach((category) => {
    const group = el("div", "nav__group");
    const top = buildTopButton(category.id, category.title, sitesOfCategory(category.id).length);
    top.addEventListener("click", () => onTopClick(category.id, category.id));

    const list = el("ul", "nav__sub");
    list.id = `sub-${category.id}`;

    category.subs.forEach((sub) => {
      const viewId = `${category.id}:${sub.id}`;
      list.appendChild(buildSubButton(viewId, sub.title, sitesOfPlacement(viewId).length));
    });

    group.appendChild(top);
    group.appendChild(list);
    fragment.appendChild(group);
  });

  nav.replaceChildren(fragment);
}

/** 상위 메뉴 클릭: 아코디언 토글 + 해당 카테고리 화면 표시 */
function onTopClick(groupId, viewId) {
  if (state.openGroup === groupId && state.view === viewId && !isSearching()) {
    state.openGroup = null; // 이미 열려 있고 같은 화면이면 접기
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
  state.launcher = null; // 다른 메뉴로 이동하면 런처 패널을 닫는다
  if (isSearching()) clearSearch({ focusInput: false, render: false });
  syncNav();
  renderContent();
  closeDrawer({ restoreFocus: false });
}

/** 메뉴의 펼침/선택 상태를 상태값과 동기화 */
function syncNav() {
  const activeGroup = isSearching() ? null : groupOfView(state.view);

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
    const isActive = !isSearching() && button.dataset.view === state.view;
    button.classList.toggle("is-active", isActive);
    if (isActive) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
}

/* ---------- 본문 ---------- */

function buildCard(site, contextLabel) {
  const card = el("a", "site");
  setExternal(card, site, contextLabel);

  card.appendChild(el("p", "site__cat", contextLabel));
  card.appendChild(el("h3", "site__name", site.name));
  card.appendChild(el("p", "site__desc", site.desc));

  if (site.tags && site.tags.length) {
    const tags = el("p", "site__tags", site.tags.slice(0, 4).map((t) => `#${t}`).join(" "));
    card.appendChild(tags);
  }

  const go = el("span", "site__go");
  go.appendChild(el("span", null, "바로가기"));
  go.appendChild(arrow());
  card.appendChild(go);

  return card;
}

/** 사이트별 카테고리 표시 문구를 정하는 함수를 함께 받는다 */
function buildGrid(sites, labelFor) {
  const grid = el("div", "grid");
  sites.forEach((site) => grid.appendChild(buildCard(site, labelFor(site))));
  return grid;
}

function buildBlock({ id, title, sites, labelFor }) {
  const section = el("section", "block");
  section.setAttribute("aria-labelledby", `block-${id}`);

  const head = el("div", "block__head");
  const heading = el("h2", "block__title", title);
  heading.id = `block-${id}`;
  head.appendChild(heading);
  head.appendChild(el("span", "block__count", `${pad2(sites.length)} SITES`));
  section.appendChild(head);

  section.appendChild(buildGrid(sites, labelFor));
  return section;
}

function buildEmptyState(query) {
  const box = el("div", "empty");
  box.appendChild(el("p", "empty__title", "검색 결과가 없습니다"));
  box.appendChild(
    el(
      "p",
      "empty__desc",
      `“${query}”와 일치하는 사이트를 찾지 못했습니다. 검색어를 더 짧게 줄이거나 다른 낱말로 바꿔 보세요.`
    )
  );

  const reset = el("button", "empty__reset", "검색 초기화");
  reset.type = "button";
  reset.addEventListener("click", () => clearSearch());
  box.appendChild(reset);

  return box;
}

function renderContent() {
  const container = document.getElementById("view");
  if (!container) return;

  const fragment = document.createDocumentFragment();

  if (isSearching()) {
    const query = state.query.trim();
    const results = searchSites(query);

    if (results.length === 0) {
      fragment.appendChild(buildEmptyState(query));
    } else {
      fragment.appendChild(
        buildBlock({
          id: "search",
          title: "검색 결과",
          sites: results,
          labelFor: (site) => pathLabel(site.placements[0]),
        })
      );
    }
  } else if (state.view === "all") {
    /* 전체 사이트: 1차 카테고리별로 묶어서 표시 */
    CATEGORIES.forEach((category) => {
      fragment.appendChild(
        buildBlock({
          id: category.id,
          title: category.title,
          sites: sitesOfCategory(category.id),
          labelFor: (site) => subLabelsInCategory(site, category.id),
        })
      );
    });
  } else if (state.view === "quick" || state.view === "project") {
    /* 자주 쓰는 사이트 / 내 프로젝트: 한 덩어리로 표시 */
    fragment.appendChild(
      buildBlock({
        id: "current",
        title: labelOfView(state.view),
        sites: sitesOfView(state.view),
        labelFor: (site) => pathLabel(site.placements[0]),
      })
    );
  } else if (!state.view.includes(":")) {
    /* 1차 카테고리: 2차 카테고리별로 묶어서 표시 */
    const category = findCategory(state.view);
    if (category) {
      category.subs.forEach((sub) => {
        const placement = `${category.id}:${sub.id}`;
        fragment.appendChild(
          buildBlock({
            id: `${category.id}-${sub.id}`,
            title: sub.title,
            sites: sitesOfPlacement(placement),
            labelFor: () => category.title,
          })
        );
      });
    }
  } else {
    /* 2차 카테고리 */
    const parts = placementParts(state.view);
    fragment.appendChild(
      buildBlock({
        id: "current",
        title: labelOfView(state.view),
        sites: sitesOfView(state.view),
        labelFor: () => (parts ? parts.category : ""),
      })
    );
  }

  container.replaceChildren(fragment);
  renderLauncher();
  renderBreadcrumb();
  /* 한 사이트가 여러 카테고리에 배치되면 카드가 여러 번 보이므로 실제 카드 수도 함께 센다 */
  renderViewMeta(container.querySelectorAll(".site").length);
}

/* ---------- 작업 런처 ---------- */

const LAUNCHER_PANEL_ID = "launcher-detail";

/** 런처는 검색 중이 아닌 '전체 사이트' 화면에서만 보여 준다 */
const launcherVisible = () => state.view === "all" && !isSearching();

function buildLauncherCard(flow) {
  const button = el("button", "lcard");
  button.type = "button";
  button.id = `lcard-${flow.id}`;
  button.dataset.flow = flow.id;
  button.setAttribute("aria-controls", LAUNCHER_PANEL_ID);
  button.setAttribute("aria-expanded", "false");

  /* 번호는 작은 아이콘 박스 안에 넣어 실행 버튼처럼 보이게 한다 */
  const icon = el("span", "lcard__icon");
  icon.appendChild(el("span", "lcard__num", flow.number));
  button.appendChild(icon);

  const text = el("span", "lcard__text");
  text.appendChild(el("span", "lcard__title", flow.title));
  text.appendChild(el("span", "lcard__desc", flow.desc));
  text.appendChild(
    el("span", "lcard__meta", `단계 ${flow.steps.length} · 도구 ${flow.siteIds.length}`)
  );
  button.appendChild(text);

  button.addEventListener("click", () => toggleLauncher(flow.id));
  return button;
}

function buildToolLink(site) {
  const link = el("a", "tool");
  setExternal(link, site, "작업 런처");
  link.appendChild(el("span", "tool__name", site.name));
  link.appendChild(el("span", "tool__desc", site.desc));

  const go = el("span", "tool__go");
  go.appendChild(el("span", null, "열기"));
  go.appendChild(arrow());
  link.appendChild(go);

  return link;
}

/** 선택된 런처의 상세 패널 내용을 채운다 */
function fillLauncherPanel(flow) {
  const panel = document.getElementById(LAUNCHER_PANEL_ID);
  if (!panel) return;

  const fragment = document.createDocumentFragment();

  const head = el("div", "lpanel__head");
  const heading = el("div", "lpanel__heading");
  heading.appendChild(el("p", "lpanel__num", flow.number));

  const title = el("h3", "lpanel__title", flow.title);
  title.id = "launcher-detail-title";
  heading.appendChild(title);
  heading.appendChild(el("p", "lpanel__desc", flow.desc));
  head.appendChild(heading);

  const close = el("button", "lpanel__close");
  close.type = "button";
  close.setAttribute("aria-label", `${flow.title} 런처 닫기`);
  close.appendChild(el("span", null, "닫기"));
  close.addEventListener("click", () => closeLauncher({ restoreFocus: true }));
  head.appendChild(close);

  fragment.appendChild(head);

  const body = el("div", "lpanel__body");

  /* 작업 단계 */
  const stepsSection = el("section", "lpanel__section");
  stepsSection.setAttribute("aria-labelledby", "launcher-steps-title");
  const stepsTitle = el("h4", "lpanel__subtitle", "작업 단계");
  stepsTitle.id = "launcher-steps-title";
  stepsSection.appendChild(stepsTitle);

  const stepList = el("ol", "steps");
  flow.steps.forEach((text, index) => {
    const item = el("li", "steps__item");
    item.appendChild(el("span", "steps__num", pad2(index + 1)));
    item.appendChild(el("span", "steps__text", text));
    stepList.appendChild(item);
  });
  stepsSection.appendChild(stepList);
  body.appendChild(stepsSection);

  /* 필요한 도구 */
  const tools = sitesOfWorkflow(flow);
  const toolsSection = el("section", "lpanel__section");
  toolsSection.setAttribute("aria-labelledby", "launcher-tools-title");
  const toolsTitle = el("h4", "lpanel__subtitle", `필요한 도구 ${tools.length}개`);
  toolsTitle.id = "launcher-tools-title";
  toolsSection.appendChild(toolsTitle);

  const toolGrid = el("div", "tools");
  tools.forEach((site) => toolGrid.appendChild(buildToolLink(site)));
  toolsSection.appendChild(toolGrid);
  body.appendChild(toolsSection);

  fragment.appendChild(body);
  panel.replaceChildren(fragment);
  panel.setAttribute("aria-labelledby", "launcher-detail-title");
}

/** 런처 영역 전체(표시 여부·카드 상태·패널)를 상태값과 동기화 */
function renderLauncher() {
  const section = document.getElementById("launcher");
  const grid = document.getElementById("launcher-grid");
  const panel = document.getElementById(LAUNCHER_PANEL_ID);
  if (!section || !grid || !panel) return;

  if (!grid.children.length) {
    const fragment = document.createDocumentFragment();
    WORKFLOWS.forEach((flow) => fragment.appendChild(buildLauncherCard(flow)));
    grid.replaceChildren(fragment);
  }

  section.hidden = !launcherVisible();

  const active = launcherVisible() ? state.launcher : null;

  grid.querySelectorAll(".lcard").forEach((card) => {
    const isActive = card.dataset.flow === active;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-expanded", String(isActive));
  });

  if (!active) {
    panel.hidden = true;
    panel.replaceChildren();
    panel.removeAttribute("aria-labelledby");
    return;
  }

  const flow = findWorkflow(active);
  if (!flow) {
    panel.hidden = true;
    return;
  }

  fillLauncherPanel(flow);
  panel.hidden = false;
}

function toggleLauncher(flowId) {
  state.launcher = state.launcher === flowId ? null : flowId;
  renderLauncher();

  /* 새로 연 패널로 포커스를 옮겨 키보드 사용자가 바로 내용을 읽게 한다 */
  if (state.launcher) {
    const panel = document.getElementById(LAUNCHER_PANEL_ID);
    if (panel) panel.focus();
  }
}

function closeLauncher({ restoreFocus = false } = {}) {
  if (!state.launcher) return;
  const previous = state.launcher;
  state.launcher = null;
  renderLauncher();
  if (restoreFocus) {
    const card = document.getElementById(`lcard-${previous}`);
    if (card) card.focus();
  }
}

function renderBreadcrumb() {
  const list = document.getElementById("breadcrumb");
  if (!list) return;

  const trail = ["작업 허브"];

  if (isSearching()) {
    trail.push("검색 결과");
  } else {
    const groupId = groupOfView(state.view);
    if (groupId === DASHBOARD.id) {
      trail.push(DASHBOARD.title, labelOfView(state.view));
    } else {
      const category = findCategory(groupId);
      trail.push(category ? category.title : "");
      if (state.view.includes(":")) trail.push(labelOfView(state.view));
    }
  }

  const fragment = document.createDocumentFragment();
  trail.filter(Boolean).forEach((label, index, arr) => {
    const item = el("li", "crumb__item");
    if (index === arr.length - 1) {
      item.classList.add("is-current");
      item.setAttribute("aria-current", "page");
    }
    item.appendChild(el("span", null, label));
    fragment.appendChild(item);
  });

  list.replaceChildren(fragment);
}

function renderViewMeta(renderedCards) {
  const viewName = document.getElementById("current-view");
  const count = document.getElementById("current-count");

  if (isSearching()) {
    const total = searchSites(state.query).length;
    if (viewName) viewName.textContent = `검색: ${state.query.trim()}`;
    if (count) count.textContent = `검색 결과 ${total}개`;
    return;
  }

  const unique = sitesOfView(state.view).length;
  if (viewName) viewName.textContent = labelOfView(state.view);
  if (!count) return;

  count.textContent =
    renderedCards > unique
      ? `사이트 ${unique}개 · 카드 ${renderedCards}장 (여러 카테고리에 함께 배치된 사이트 포함)`
      : `${unique}개 사이트 표시 중`;
}

function renderFooterCount() {
  const target = document.getElementById("foot-count");
  if (!target) return;
  const subCount = CATEGORIES.reduce((sum, category) => sum + category.subs.length, 0);
  target.textContent = `${SITES.length} SITES · ${CATEGORIES.length} CATEGORIES · ${subCount} GROUPS`;
}

/* ---------- 검색창 ---------- */

const search = {
  input: null,
  clear: null,
};

function syncSearchUI() {
  if (search.clear) search.clear.hidden = state.query.length === 0;
  document.body.classList.toggle("is-searching", isSearching());
}

function applyQuery(value) {
  state.query = value;
  if (isSearching()) state.launcher = null; // 검색을 시작하면 런처 패널을 닫는다
  syncSearchUI();
  syncNav();
  renderContent();
}

function clearSearch({ focusInput = true, render = true } = {}) {
  state.query = "";
  if (search.input) search.input.value = "";
  syncSearchUI();
  if (render) {
    syncNav();
    renderContent();
  }
  if (focusInput && search.input) search.input.focus();
}

function setupSearch() {
  const form = document.getElementById("search-form");
  search.input = document.getElementById("search-input");
  search.clear = document.getElementById("search-clear");
  if (!form || !search.input || !search.clear) return;

  form.addEventListener("submit", (event) => event.preventDefault());

  search.input.addEventListener("input", () => applyQuery(search.input.value));

  search.input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      clearSearch();
    }
  });

  search.clear.addEventListener("click", () => clearSearch());

  syncSearchUI();
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

  /* 데스크톱으로 넓어지면 드로어 상태 초기화 */
  window.addEventListener("resize", () => {
    if (!isMobile() && drawer.isOpen) closeDrawer({ restoreFocus: false });
  });
}

/* Escape 우선순위: 드로어 닫기 → 검색 초기화 → 런처 패널 닫기 */
function setupGlobalKeys() {
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (drawer.isOpen) {
      closeDrawer();
      return;
    }
    if (isSearching()) {
      clearSearch();
      return;
    }
    if (state.launcher) closeLauncher({ restoreFocus: true });
  });
}

/* ---------- 초기 실행 ---------- */

function init() {
  renderToday();
  buildNav();
  setupSearch();
  setupDrawer();
  setupGlobalKeys();
  syncNav();
  renderContent();
  renderFooterCount();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
