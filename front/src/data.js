
export const profile = {
  name: "남정연",
  github: "https://github.com/MayoneJY",
  email: "mayone6063@kakao.com",
  phone: "010-9462-6046",
  linkedin: "https://www.linkedin.com/in/%EC%A0%95%EC%97%B0-%EB%82%A8-a83050293/",
  image: "./me.webp",
};

export const skills = {
  Backend: ["Python", "Java", "Node.js", "Spring Boot", "Unity", "Postman"],
  DevOps: ["Mysql", "MariaDB", "Tomcat", "Linux Ubuntu"],
  Frontend: ["React", "JavaScript", "Bootstrap"],
  Etc: ["VS Code", "Eclipse", "Notion", "Figma", "After Effects", "Photoshop", "FileZilla"],
};

export const awards = [
  {
    date: "2023.07.25",
    title: "전문기술인재장학",
    org: "교육부, 한국장학재단",
    desc: "전문지식과 직업 능력을 보유한 우수인재로서 선발",
  },
  {
    date: "2022.11.02",
    title: "🥇 교육부 장관상 (대상)",
    org: "교육부",
    desc: "산학연계 교육과정 영상 콘텐츠 공모전, 'VR 메타버스 운전 면허 시험장'",
  },
  {
    date: "2022.12.09",
    title: "🏆 게이미피케이션포럼상",
    org: "글로벌게임챌린지",
    desc: "'VR 메타버스 운전 면허 시험장' 졸업작품",
  }
];

export const education = [
  {
    school: "SSAFY",
    degree: "삼성 청년 SW AI 아카데미 14기",
    period: "2025.07 ~ 2026.06",
  },
  {
    school: "경민대학교",
    degree: "컴퓨터소프트웨어학과 학사",
    period: "2023.03 ~ 2024.02",
  },
  {
    school: "경민대학교",
    degree: "융합소프트웨어과 전문학사",
    period: "2018.03 ~ 2023.02",
  },
];

export const featuredProject = {
  title: "디스코드 뮤직 자막 봇",
  image: "./musicbot.webp",
  tags: ["Python", "Discord", "Lavalink", "Streaming", "Subtitles", "대규모 트래픽"],
  period: "2023.04 ~ 2023.12",
  url: "https://discord.mayonedev.com/",
  youtube: "https://www.youtube.com/watch?v=69XVy5Balt4",
  github: null,
  summary: "디스코드 음성 채널에서 유튜브 음악을 실시간 자막과 함께 스트리밍할 수 있는 봇 서비스입니다.",
  stats: {
    users: "217,166+",
    servers: "6,420",
    dailyPlays: "18,000+ (평일 기준)"
  },
};




export const projects = [
  {
    title: "디스코드 뮤직 자막 봇",
    image: "./musicbot.webp",
    tags: ["Python", "Discord", "실시간 자막", "Lavalink", "대규모 서비스"],
    period: "2018.06 ~ 2023.12",
    url: "https://discord.mayonedev.com/",
    youtube: "https://www.youtube.com/watch?v=69XVy5Balt4",
    github: null,
    summary: "디스코드에서 친구들과 통화하며 음악을 감상할 수 있게 해주는 서비스.",
    detail: [
    "2018~2023년 누적 217,166명 6,420서버에서 운영.",
    "인증 봇 전환, Lavalink 도입 등 확장/성능 최적화.",
    "py-cord, yt-dlp, 버튼 UI, 스트리밍 등 다양한 기능 개발.",
    "직접 설계, 서비스, 유지보수까지 경험."
    ]
  },
  {
    title: "top solved",
    image: "https://topsolved.mayonedev.com/api/boj?handle=mayone6063&row=10&base_color=bronze",
    tags: ["Python", "API", "프로필 카드", "SVG", "백엔드"],
    period: "2025.07.24 ~ 2025.07.25",
    url: null,
    youtube: null,
    github: "https://github.com/MayoneJY/top-solved",
    summary: "Solved.ac 데이터 기반, 상위 100개 문제를 SVG 카드로 시각화하는 오픈소스 API.",
    detail: [
    "실시간 SVG 카드 이미지 자동 생성",
    "FastAPI + Python으로 구현, 퍼포먼스 최적화",
    "Baekjoon(백준) 문제 현황 시각화"
    ]
  },
  {
    title: "디스코드 발로란트 내전 봇",
    image: "./valorant.png",
    tags: ["Javascript", "Python", "React", "Discord Bot", "백트래킹", "개인 프로젝트"],
    period: "2024.05.18 ~ 2024.08.31",
    url: null,
    youtube: "https://www.youtube.com/watch?v=UE2nqly_268",
    github: "https://github.com/MayoneJY/valorant-discord-bot",
    summary: "디스코드에서 발로란트 스크림을 쉽게 진행할 수 있도록 도와주는 팀 자동 편성 및 통화방 분리 기능 제공 봇.",
    detail: [
      "discord.py 기반으로 봇 제작, 기존 오픈소스를 fork해 로그인 및 파티 기능 개선.",
      "백트래킹 알고리즘을 적용해 팀 밸런스를 고려한 자동 편성 기능 구현.",
      "발로란트 엔드포인트를 활용한 파티 생성·입장·맵 랜덤 선택 등 자동화 기능 연동.",
      ]
  },
  {
    title: "WebSocket & Chat System",
    image: "./chat.png",
    tags: ["Javascript", "NestJS", "React", "WebSocket", "TypeORM", "mariadb"],
    period: "2025.01.25 ~ 2025.01.28",
    url: null,
    youtube: null,
    github: "https://github.com/MayoneJY/nestjs-chat",
    summary: "NestJS와 WebSocket을 활용한 실시간 채팅 및 채팅 기록 저장 시스템.",
    detail: [
        "WebSocket 기반 실시간 채팅 및 채팅방 생성/제거 이벤트 모니터링 기능 구현.",
        "메시지 저장 시 큐에 임시 저장 후 일정 주기로 DB에 일괄 반영하여 성능 최적화.",
        "NestJS + TypeORM + MariaDB를 통해 채팅 내역 영속화 및 검색 기능 제공."
    ]
  },
  {
    title: "수락고 카카오 챗봇",
    image: "./kakao.png",
    tags: ["PHP", "MySQL", "웹 파싱", "카카오 챗봇", "개인 프로젝트"],
    period: "2017.11.01 ~ 2017.12.31",
    url: "https://pf.kakao.com/_xdtxjpd",
    youtube: null,
    github: null,
    summary: "모교 학생들을 위해 급식·날씨·버스 정보를 제공하는 카카오 플러스 친구 챗봇 서비스.",
    detail: [
        "PHP 기반으로 웹 파싱 기능을 구현하여 실시간 급식·날씨·버스 정보 제공.",
        "카카오 플러스 친구 API를 활용해 사용자와의 인터랙션 챗봇 구축."
    ]
  },
  {
    title: "중대 급 병역관리 프로그램",
    image: "./gradients_3.png",
    tags: ["Excel", "VBA", "자동화", "개인 프로젝트"],
    period: "2019.03.19 ~ 2020.10.21",
    url: null,
    youtube: null,
    github: null,
    summary: "중대 병사들의 근무 및 외출·외박 관리 업무를 자동화한 엑셀 기반 병역관리 프로그램.",
    detail: [
        "병사 외출/외박/휴가 및 근무표 자동화로 업무 시간을 수 시간에서 수 초로 단축.",
        "개별 병사 기록 페이지 및 외출·외박증 자동 출력 기능으로 반복 업무 간소화.",
        "코로나19 대응을 위한 부대 현황판 제작 등 시기별 필요 기능 적극 반영.",
        "엑셀과 VBA만으로 제한된 환경에서 자동화 시스템을 구현한 실무 최적화 경험."
    ]
  }
  // ...이하 생략, 위 구조대로 추가
];


export const universityProjects = [
  {
    title: "VR 메타버스 운전면허 시험장",
    image: "./vr.webp",
    tags: ["Unity", "C#", "Arduino", "Oculus", "VR", "팀 프로젝트"],
    period: "2022.03.02 ~ 2022.12.08",
    url: null,
    youtube: ["https://www.youtube.com/watch?v=JHaxMVDB59M","https://youtu.be/F6Y3wh4U-TE?t=500"],
    github: "https://github.com/MayoneJY/Metaverse-Driver-s-License-Skill-Test",
    summary: "Unity와 Oculus를 활용해 실제 면허시험장 환경을 VR로 구현한 운전면허 기능시험 시뮬레이터.",
    detail: [
        "위성지도 기반 도봉운전면허시험장을 현실감 있게 재현하고, 자동차의 물리적 움직임 구현.",
        "운전 기능시험 항목을 VR 환경에서 체험 가능하도록 설계 및 개발.",
        "팀 프로젝트 전 과정을 주도하며 기획, 요구사항 분석, 개발, 테스트까지 대부분 담당.",
        "교육부 장관상(대상) 및 게이미피케이션포럼상 수상, 공모전 및 인터뷰 영상 공개."
    ]
  },
  {
    title: "Quantum Tec",
    image: "./gamepage.webp",
    tags: ["Java", "Spring Boot", "React", "MySQL", "JavaScript", "팀 프로젝트"],
    period: "2023.03.02 ~ 2023.12.31",
    url: null,
    youtube: null,
    github: null,
    summary: "교육용 게임을 공급하고 구매·평가·아바타 시스템을 포함한 기능을 제공하는 통합 게임 플랫폼.",
    detail: [
        "69개 테이블 규모의 복잡한 DB 설계 및 Spring Boot 기반 REST API 개발 전담.",
        "게시판·상점·관리자 페이지를 포함한 주요 화면을 React + Bootstrap으로 디자인 및 구현.",
        "Redux 기반 상태 관리 및 토스페이먼츠 결제 API 연동.",
        "저작권 등록 완료."
    ]
  },
  {
    title: "프로메테우스",
    image: "./scanning.webp",
    tags: ["Linux", "Python", "Unity", "ROS", "3D맵", "팀프로젝트"],
    period: "2023.03.02 ~ 2023.12.31",
    url: null,
    youtube: null,
    github: null,
    summary: "드론과 같은 장비로 스캔한 뒤 3d 맵으로 출력해주는 프로젝트.",
    detail: [
        "ROS 기반으로 라이다·깊이 카메라 데이터를 받아와 UDP로 실시간 전송하는 기능 구현.",
        "정지 상태 및 이동 중에도 안정적인 3D 공간 스캔 및 맵 시각화 구현 성공.",
        "정확도와 속도 간 트레이드오프를 조율하며 위치 파악 알고리즘을 활용.",
    ]
  },
  {
    title: "sendAnywhere 프로젝트",
    image: "./sendanywhere.webp",
    tags: ["Python", "Django", "암호화", "보안", "개인 프로젝트"],
    period: "2023.12.15 ~ 2023.12.16",
    url: null,
    youtube: null,
    github: null,
    summary: "sendAnywhere 서비스를 분석하여 보안 기반의 파일 전송 기능을 Django로 구현한 과제형 프로젝트.",
    detail: [
        "Django 기반으로 파일 업로드, 암호 설정, 암호화·복호화 기능 구현.",
        "파일 전송 시 일련번호 생성 및 암호 입력을 통해 접근 제어 기능 적용.",
        "새로고침 시 중복 업로드 문제를 예외 처리하며 안정성 확보.",
        "Caddy 서버를 활용해 서브도메인 적용 및 보안 흐름에 대한 기본 이해 향상."
    ]
  },
  {
    title: "모바일 게임 프로젝트",
    image: "./vr-game-2.png",
    tags: ["C#", "Unity", "모바일 게임", "개인 프로젝트"],
    period: "2021.03.02 ~ 2021.04.26",
    url: null,
    youtube: null,
    github: null,
    summary: "'드래곤플라이트'를 참조해 메커니즘을 분석하고 자체 게임을 설계·개발한 Unity 기반 모바일 게임 프로젝트.",
    detail: [
        "한국 대표 모바일 게임인 드래곤플라이트의 게임 흐름과 구성요소를 분석.",
        "분석한 메커니즘을 바탕으로 새로운 비행 슈팅 게임 구조와 UI/UX 설계.",
        "Unity와 C#을 활용하여 기본적인 게임 시스템과 캐릭터 조작 기능 구현."
    ]
  },
  {
    title: "유튜브 자막 팝업 프로그램",
    image: "./youtube-cc.webp",
    tags: ["Java", "Python", "자막 팝업", "개인 프로젝트"],
    period: "2021.01.01 ~ 2022.05.11",
    url: null,
    youtube: null,
    github: null,
    summary: "유튜브 CC 자막을 별도 팝업 창에서 표시하여 시청자의 자막 가독성을 높인 독립형 자막 출력 프로그램.",
    detail: [
        "유튜브 영상 재생 시 CC 자막을 추출해 독립된 팝업 화면에 출력하는 기능 구현.",
        "초기 버전은 Python으로 제작하고, 이후 Java로 전체 기능 재구현.",
        "멀티 언어 기반 개발을 통해 언어 간 아키텍처 차이 이해 및 구현 능력 강화.",
        "시각적 집중도 향상과 자막 접근성 향상을 위한 사용자 중심 설계."
    ]
  },
  // ...나머지도 동일하게 추가
];

export const outsourcing = [
  {
    title: "EBS MATH 제곱근 레이싱",
    image: "./ebs-1.png",
    tags: ["Javascript", "Canvas API", "Figma", "웹 게임", "FrontEnd", "기업 프로젝트"],
    period: "2023.03.26 ~ 2023.06.15",
    url: "https://www.ebsmath.co.kr/mathquiz/Main?tab=1",
    youtube: null,
    github: null,
    summary: "EBS 교육 콘텐츠의 플래시 게임을 JavaScript와 Canvas API로 재구현한 웹 기반 학습 게임 프로젝트.",
    detail: [
        "Canvas API를 활용해 다중 레이어 기반 그래픽, 일시정지·타이머·속도 연동 애니메이션 등 주요 게임 기능 구현.",
        "모바일 포함 다양한 플랫폼에서 동일한 UI를 제공하도록 호환성 중심 개발.",
        "사파리 전용 이슈(메모리 제한, 기능 미작동 등)를 분석하고 해결하며 기술적 대응력 향상.",
        "디자인팀과의 픽셀단위 협업, 비정형 디자인 대응, 의사소통의 어려움을 극복한 실무 경험 축적."
    ]
  },
  {
    title: "EBS MATH 삼각형 닮음 카드 게임",
    image: "./ebs-2.png",
    tags: ["Javascript", "Canvas API", "Figma", "웹 게임", "FrontEnd", "기업 프로젝트"],
    period: "2023.03.26 ~ 2023.06.15",
    url: "https://www.ebsmath.co.kr/mathquiz/Main?tab=1",
    youtube: null,
    github: null,
    summary: "EBS 교육 콘텐츠 내 삼각형 닮음 플래시 게임을 웹 기반 카드 게임으로 리디자인하고 JavaScript로 재구현한 프로젝트.",
    detail: [
        "Canvas API 기반으로 카드 선택, 정답 제한, 힌트, 제한시간, 일시정지 등 게임 핵심 기능 구현.",
        "초기 데이터 로딩 방식과 다중 캔버스 구조로 퍼포먼스 최적화 및 레이어 분리 구현.",
        "사파리 전용 이슈(메모리 제한, 기능 미작동 등)를 분석하고 해결하며 기술적 대응력 향상.",
        "디자인팀과의 픽셀단위 협업, 비정형 디자인 대응, 의사소통의 어려움을 극복한 실무 경험 축적."
    ]
  },
  {
    title: "redytek 홈페이지",
    image: "./redytek.png",
    tags: ["PHP", "JavaScript", "MySQL", "백엔드", "외주 프로젝트"],
    period: "2023.03.18 ~ 2023.04.06",
    url: "http://redytek.co.kr/",
    youtube: null,
    github: null,
    summary: "redytek 공식 홈페이지의 게시판, 로그인, 보안 기능을 PHP 기반으로 구현한 백엔드 중심 외주 프로젝트.",
    detail: [
        "PHP + MySQL 기반으로 게시판, 파일 업로드, 세션 로그인 기능 전체 구현.",
        "네이버 스마트에디터 및 구글 캡챠 API 연동으로 편집성과 보안성 확보.",
        "회사 요청에 따라 반복적으로 기능을 수정하며 실무 대응 역량 강화.",
        "첫 외주 프로젝트로서 일정 관리, 요구 분석, 보안 기준 충족 등의 경험 확보."
    ]
  },
];