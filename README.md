# 유리나무 작업 허브 (YURIWOOD WORK HUB)

자주 사용하는 웹사이트를 카테고리별로 모아 한눈에 확인하고 바로 이동할 수 있는 개인 작업 허브입니다.
HTML · CSS · 순수 JavaScript로만 만든 정적 페이지이며, 프레임워크·빌드·서버·로그인 기능은 사용하지 않습니다.

## 파일 구조

```
내게유용한사이트/
├─ index.html   # 페이지 구조 (레일, 헤더, 빠른 실행, 그리드, 푸터)
├─ styles.css   # 스위스 스타일 미니멀 디자인 및 반응형
├─ script.js    # 사이트 데이터 + 카드/링크 렌더링 + 날짜·집계
└─ README.md
```

## 로컬 실행 방법

빌드 과정이 없으므로 `index.html`을 더블클릭해 브라우저에서 바로 열어도 모든 기능이 동작합니다.

로컬 서버로 확인하려면 이 폴더에서 아래 중 하나를 실행한 뒤 `http://localhost:8000` 에 접속합니다.

```bash
# Python이 설치된 경우
python -m http.server 8000

# Node.js가 설치된 경우
npx --yes serve . -l 8000
```

## 사이트 링크 추가·수정 방법

모든 데이터는 `script.js` 상단의 `CATEGORIES` 배열 한 곳에서만 관리합니다. HTML은 수정할 필요가 없습니다.

```js
{
  id: "dev",             // 내부 식별자 (중복 금지)
  title: "개발·배포",     // 카드에 표시되는 카테고리명
  icon: "□",             // 카드 오른쪽 상단 기호
  span: 2,               // 데스크톱 6열 그리드에서 차지할 칸 수 (2 또는 4)
  accent: false,         // true 이면 옅은 블루 배경으로 강조
  sites: [
    { name: "GitHub", url: "https://github.com/" },
    { name: "Notion", url: "https://www.notion.so/", quick: true }, // 상단 QUICK ACCESS에도 표시
  ],
}
```

- **링크 추가/삭제**: 해당 카테고리의 `sites` 배열에 `{ name, url }` 항목을 넣거나 지웁니다.
- **빠른 실행 등록**: 사이트에 `quick: true`를 추가하면 상단 `QUICK ACCESS` 줄에 함께 표시됩니다.
- **카테고리 추가**: `CATEGORIES` 배열에 객체를 추가합니다. 데스크톱 그리드가 6열이므로 한 줄의 `span` 합이 6이 되도록 맞추면 정렬이 깔끔합니다.
- 카드 안의 사이트 개수와 푸터의 총 개수는 데이터에서 자동 계산되므로 따로 고칠 필요가 없습니다.
- 모든 외부 링크는 자동으로 새 탭(`target="_blank"`, `rel="noopener noreferrer"`)에서 열립니다.

## 추후 배포 방법

빌드 과정이 없으므로 폴더를 그대로 올리면 됩니다.

- **Netlify**: 사이트 생성 화면에 폴더를 드래그 앤 드롭 (빌드 명령 없음, 배포 디렉터리 `.`)
- **GitHub Pages**: 저장소에 푸시 후 Settings → Pages에서 브랜치와 루트(`/`) 지정
- **Vercel**: 저장소 연결 후 프레임워크 프리셋을 `Other`(정적)로 지정
