/* ============================================================
   여기가 데이터 영역입니다. 이 파일(script.js)의 CATALOG 배열만
   수정하면 사이트 내용이 바뀝니다. style.css / index.html은
   건드릴 필요 없어요.

   노드 종류 3가지:

   1) 카테고리 (하위 항목 있음)
      { id, name, children: [...] }

   2) 상품 (설명 텍스트, 클릭하면 오른쪽에 상세 패널)
      { id, name, description: "설명 텍스트" }

   3) 게시판 (하이퍼링크 리스트, 클릭하면 링크 목록 화면으로 이동)
      { id, name, links: [ { title, url }, ... ] }

      → 게시판에 항목 추가하고 싶으면 links 배열에
        { title: "제목", url: "https://..." } 만 추가하면 됩니다.
   ============================================================ */

const CATALOG = [
  {
    id: "reward",
    name: "리워드",
    children: [
      {
        id: "reward-place",
        name: "플레이스 리워드",
        children: [
          { id: "reward-place-alpha", name: "알파", description: "" },
          { id: "reward-place-allday", name: "올데이", description: "" },
          { id: "reward-place-freezer", name: "프리저", description: "" },
          { id: "reward-place-paragon", name: "파라곤", description: "" },
          { id: "reward-place-alphabooster", name: "알파부스터", description: "" }
        ]
      },
      {
        id: "reward-shopping",
        name: "네이버쇼핑 리워드",
        children: [
          { id: "reward-shopping-freezer", name: "프리저", description: "" },
          { id: "reward-shopping-paragon", name: "파라곤", description: "" }
        ]
      },
      {
        id: "reward-coupang",
        name: "쿠팡 리워드",
        children: [
          { id: "reward-coupang-paragon", name: "파라곤", description: "" }
        ]
      }
    ]
  },
  {
    id: "blog",
    name: "블로그",
    children: [
      { id: "blog-optimized", name: "최적화", description: "검색 노출에 유리하도록 세팅된 계정. 상위 노출이 급한 키워드/업체에 추천" },
      { id: "blog-semi-optimized", name: "준최적화", description: "최적화 대비 합리적인 가격대의 대안. 노출 효과는 유지하면서 비용 부담을 줄이고 싶은 경우에 적합" },
      { id: "blog-real-25-247", name: "실계정 (25·247)", description: "다량 배포용. 발행 안정성이 높아 누락 없이 진행하고자 할 때 적합" },
      { id: "blog-non-real", name: "비실계정", description: "다량 배포용. 실계정 대비 단가는 낮지만 발행 누락 가능성 있음 (물량으로 커버하는 구조)" }
    ]
  },
  {
    id: "cafe",
    name: "카페 배포",
    children: [
      { id: "cafe-optimized", name: "최적화카페", description: "활동 이력이 쌓인 최적화 카페 계정으로 자연스럽게 글을 배포합니다.<br>신뢰도 높은 노출로 잠재고객 유입 + 검색 노출까지 함께 관리" },
      { id: "cafe-infiltration", name: "카페침투 / 맘카페 배포", description: "지역 맘카페 활동 계정으로 매장을 자연스럽게 알립니다.<br>육아맘 타겟 신뢰 기반 노출로 실질 방문·구매 전환까지 이어집니다." }
    ]
  },
  {
    id: "review",
    name: "리뷰",
    children: [
      { id: "review-clip", name: "클립리뷰", description: "✅ 콘텐츠 형태 : 네이버 클립 숏폼 콘텐츠 배포<br>✅ 활용 : 업체·플레이스·브랜드·상품 홍보 등<br>✅ 방식 : 슬라이드 영상 또는 제공된 영상으로 진행" },
      { id: "review-kakaomap", name: "카카오맵리뷰", description: "" },
      { id: "review-tmap", name: "티맵리뷰", description: "" },
      { id: "review-catchtable", name: "캐치테이블", description: "" }
    ]
  },
  {
    id: "sns",
    name: "SNS",
    children: [
      {
        id: "sns-danggeun",
        name: "당근",
        children: [
          { id: "sns-danggeun-local", name: "동네생활배포", description: "동네 인증 실계정으로 업체 후기·정보글을 배포해드립니다.<br>자연스러운 노출로 잠재고객 유입 + 플레이스 지수 상승까지" },
          { id: "sns-danggeun-favorite", name: "찜/단골맺기", description: "실제 활동 계정으로 매장을 찜하고 단골로 등록해드립니다.<br>찜·단골 수 증가로 플레이스 지수 상승 + 신규 고객에게 신뢰도 어필까지" },
          { id: "sns-danggeun-buzz", name: "버즈프로필 후기", description: "실제 이용 고객처럼, 진정성 있는 리뷰로 매장을 채워드립니다.<br>후기 수 증가로 신뢰도 상승 + 플레이스 노출 순위까지 함께 관리" }
        ]
      },
      {
        id: "sns-china",
        name: "중화권 (샤오홍슈)",
        children: [
          { id: "sns-china-random", name: "< 베이직 ><br>최소10팀<br>팔로워 랜덤", description: "<맛집전용> 초기 후기 수량 확보 및 매장 방문 바이럴에 최적화된 기초 상품" },
          { id: "sns-china-1k", name: "< 부티끄 ><br>10팀고정<br>팔로워랜덤", description: "부담 없는 예산으로 다수 계정에 확산시키는 보편적 바이럴 패키지 · 자연스러운 유저 리뷰 형성 및 해시태그 축적" },
          { id: "sns-china-10k", name: "< 스탠다드 ><br>최소5팀<br>팔로워1,000명이상", description: "KOC 및 마이크로 KOL 중심 구성 · 검색 키워드 상위 노출 유도 및 타깃 유저 접점 강력 강화" },
          { id: "sns-china-boutique", name: "< 프리미엄 ><br>최소5팀<br>팔로워10,000명이상", description: "중형 KOL 기반 패키지 · 고품질 콘텐츠 제작, 높은 조회수 확보 및 브랜딩 파급력 대폭 확산" }
        ]
      },
      {
        id: "sns-instagram",
        name: "인스타",
        children: [
          { id: "sns-instagram-press", name: "인스타기자단", description: "" }
        ]
      }
    ]
  },
  {
    id: "production",
    name: "제작",
    children: [
      { id: "production-homepage", name: "홈페이지", description: "" },
      { id: "production-landing", name: "랜딩페이지", description: "" },
      { id: "production-detail", name: "상세페이지", description: "" },
      { id: "production-reception-ui", name: "전용접수 UI 홈페이지", description: "" }
    ]
  },
  {
    id: "interactive-content",
    name: "심리테스트",
    children: [
      {
        id: "interactive-fortune",
        name: "운세",
        links: [
          { title: "오늘의 운세", url: "https://search.naver.com/search.naver?where=nv&sm=top_sug.pre&fbm=0&acr=1&acq=%EC%98%A4%EB%8A%98%EC%9D%98+%EC%9A%B4%EC%84%B8&qdt=0&ie=utf8&query=%EC%98%A4%EB%8A%98%EC%9D%98+%EC%9A%B4%EC%84%B8&ackey=5mwpxglt" }
          // { title: "제목", url: "https://..." } 형식으로 추가하면 됩니다.
        ]
      },
      {
        id: "interactive-psych-test",
        name: "심리테스트",
        links: [
          { title: "내가 부자가 될 상인가?", url: "https://simsimtest.com/quizzes/wealth-mindset-type" },
          { title: "나의 진짜 이상형은?", url: "https://simsimtest.com/quizzes/real-ideal-type" },
          { title: "당신이 고양이라면?", url: "https://simsimtest.com/quizzes/if-you-were-a-cat" }
        ]
      },
      {
        id: "interactive-compatibility",
        name: "궁합",
        links: [
          // { title: "제목", url: "https://..." } 형식으로 추가하면 됩니다.
        ]
      }
    ]
  }
];

/* ============================================================
   여기부터는 렌더링 로직입니다. 보통은 안 건드려도 됩니다.
   ============================================================ */

let path = []; // 현재 위치의 노드 배열 (루트부터)

const gridContainer = document.getElementById('grid-container');
const crumbTrack = document.getElementById('crumbTrack');
const overlay = document.getElementById('overlay');
const detailPanel = document.getElementById('detailPanel');
const detailPath = document.getElementById('detailPath');
const detailName = document.getElementById('detailName');
const detailDesc = document.getElementById('detailDesc');
const detailClose = document.getElementById('detailClose');

function currentChildren(){
  if(path.length === 0) return CATALOG;
  return path[path.length - 1].children || [];
}

function isCategory(node){
  return !!(node.children && node.children.length >= 0 && node.children !== undefined) && node.children;
}

function isBoard(node){
  return !!node.links;
}

function isLeafItem(node){
  return !isCategory(node) && !isBoard(node);
}

function countLabel(node){
  if(node.children) return node.children.length + '개';
  if(node.links) return node.links.length + '개';
  return '0개';
}

function renderCrumb(){
  crumbTrack.innerHTML = '<div class="crumb-line"><div class="crumb-line-fill" id="crumbFill"></div></div>';
  const nodes = [{ id: '__root', name: '전체' }, ...path];

  nodes.forEach((node, i) => {
    const btn = document.createElement('button');
    btn.className = 'crumb-node';
    if(i === nodes.length - 1) btn.classList.add('active');
    else btn.classList.add('passed');
    btn.innerHTML = '<span class="pip"></span>' + node.name;
    btn.addEventListener('click', () => {
      path = i === 0 ? [] : path.slice(0, i);
      render();
    });
    crumbTrack.appendChild(btn);
  });

  const fill = document.getElementById('crumbFill');
  const depth = path.length;
  const maxDepth = 3;
  const pct = Math.min(100, (depth / maxDepth) * 100);
  requestAnimationFrame(() => { fill.style.width = pct + '%'; });
}

function renderGrid(){
  const current = path.length ? path[path.length - 1] : null;

  // 현재 위치가 게시판(links 보유)이면 카드 그리드 대신 링크 리스트를 그림
  if(current && isBoard(current)){
    renderBoard(current);
    return;
  }

  const children = currentChildren();
  gridContainer.innerHTML = '';

  const label = document.createElement('div');
  label.className = 'level-label';
  label.textContent = path.length === 0
    ? '상품을 클릭하세요'
    : (path[path.length - 1].name + ' 안의 항목');
  gridContainer.appendChild(label);

  if(children.length === 0){
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = '아직 등록된 항목이 없어요.';
    gridContainer.appendChild(empty);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'card-grid';

  children.forEach(node => {
    const card = document.createElement('button');
    card.className = 'card';

    if(isCategory(node)){
      card.innerHTML = `
        <div class="card-name">${node.name}</div>
        <div class="card-meta">
          <span class="card-count">${countLabel(node)}</span>
          <span class="card-arrow">→</span>
        </div>
      `;
      card.addEventListener('click', () => {
        path.push(node);
        render();
      });
    } else if(isBoard(node)){
      card.innerHTML = `
        <div class="card-name">${node.name}</div>
        <div class="card-meta">
          <span class="card-count">${countLabel(node)}</span>
          <span class="card-arrow">→</span>
        </div>
      `;
      card.addEventListener('click', () => {
        path.push(node);
        render();
      });
    } else {
      const hasDesc = node.description && node.description.trim().length > 0;
      if(hasDesc) card.classList.add('has-tip');
      card.innerHTML = `
        <div class="card-name">${node.name}</div>
        ${hasDesc
          ? `<div class="hover-tip">${node.description}</div>`
          : `<div class="card-desc-preview">설명이 아직 없어요 · 클릭해서 확인</div>`}
      `;
      card.addEventListener('click', () => openDetail(node));
    }
    grid.appendChild(card);
  });

  gridContainer.appendChild(grid);
}

function renderBoard(node){
  gridContainer.innerHTML = '';

  const label = document.createElement('div');
  label.className = 'level-label';
  label.textContent = node.name + ' 게시판';
  gridContainer.appendChild(label);

  if(!node.links || node.links.length === 0){
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = '아직 등록된 링크가 없어요.';
    gridContainer.appendChild(empty);
    return;
  }

  const list = document.createElement('div');
  list.className = 'board-list';

  node.links.forEach(item => {
    const a = document.createElement('a');
    a.className = 'board-item';
    a.href = item.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = `
      <span class="board-item-title">${item.title}</span>
      <span class="board-item-arrow">↗</span>
    `;
    list.appendChild(a);
  });

  gridContainer.appendChild(list);
}

function openDetail(node){
  const crumbNames = [...path.map(p => p.name)];
  detailPath.textContent = crumbNames.length ? crumbNames.join(' › ') : '';
  detailName.textContent = node.name;

  const hasDesc = node.description && node.description.trim().length > 0;
  detailDesc.textContent = hasDesc ? node.description : '아직 설명이 입력되지 않았어요.';
  detailDesc.classList.toggle('placeholder', !hasDesc);

  overlay.classList.add('show');
  detailPanel.classList.add('show');
}

function closeDetail(){
  overlay.classList.remove('show');
  detailPanel.classList.remove('show');
}

overlay.addEventListener('click', closeDetail);
detailClose.addEventListener('click', closeDetail);
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeDetail();
});

function render(){
  renderCrumb();
  renderGrid();
}

render();
