import React, { useState } from "react";
import { Github, Mail, Phone, Linkedin, ExternalLink, Award, GraduationCap, Code, Briefcase, Folder, ChevronDown, ChevronUp } from "lucide-react";
import "./App.css"; // Tailwind CSS import

const profile = {
  name: "남정연",
  github: "https://github.com/MayoneJY",
  email: "mayone6063@kakao.com",
  phone: "010-9462-6046",
  linkedin: "https://www.linkedin.com/in/%EC%A0%95%EC%97%B0-%EB%82%A8-a83050293/",
  image: "/me.webp",
};

const skills = {
  Backend: ["Python", "Java", "Node.js", "PHP", "Spring Boot", "Unity", "Android", "Postman"],
  DevOps: ["Mysql", "MariaDB", "Tomcat", "Linux Ubuntu"],
  Frontend: ["React", "JavaScript", "Bootstrap"],
  Etc: ["VS Code", "Eclipse", "Notion", "Figma", "After Effects", "Photoshop", "FileZilla"],
};

const awards = [
  {
    date: "2023. 07. 25",
    title: "전문기술인재장학",
    org: "교육부, 한국장학재단",
    desc: "전문지식과 직업 능력을 보유한 우수인재로서 선발",
  },
  {
    date: "2022. 11. 02",
    title: "🥇 교육부 장관상 (대상)",
    org: "교육부",
    desc: "산학연계 교육과정 영상 콘텐츠 공모전, 'VR 메타버스 운전 면허 시험장'",
  },
  {
    date: "2022. 12. 09",
    title: "🏆 게이미피케이션포럼상",
    org: "글로벌게임챌린지",
    desc: "'VR 메타버스 운전 면허 시험장' 졸업작품",
  },
  {
    date: "2023. 02. 09",
    title: "표창장",
    org: "경민대학교총동문회장",
    desc: "품행이 단정하고 건전한 대학 문화 발전에 기여",
  },
  {
    date: "2022. 10. 17",
    title: "자랑스런 경민인",
    org: "경민대학교",
    desc: "대학의 명예를 높이고 대학발전에 기여한 공로",
  },
];

const education = [
  {
    school: "경민대학교",
    degree: "융합소프트웨어과 전문학사",
    period: "2018.03 ~ 2023.02",
  },
  {
    school: "경민대학교",
    degree: "컴퓨터소프트웨어학과 학사",
    period: "2023.03 ~ 2024.02",
  },
  {
    school: "SSAFY",
    degree: "삼성 청년 SW AI 아카데미 14기",
    period: "2025.07 ~ 2026.06",
  }
];

const outsourcing = [
  {
    title: "EBS MATH 제곱근 레이싱",
    image: "/ebs-1.png",
    tags: ["Javascript", "Canvas API", "Figma", "웹 게임", "FrontEnd", "기업 프로젝트"],
    period: "2023.03.26 ~ 2023.06.15",
    url: "https://www.ebsmath.co.kr/mathquiz/Main?tab=1",
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
    image: "/ebs-2.png",
    tags: ["Javascript", "Canvas API", "Figma", "웹 게임", "FrontEnd", "기업 프로젝트"],
    period: "2023.03.26 ~ 2023.06.15",
    url: "https://www.ebsmath.co.kr/mathquiz/Main?tab=1",
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
    image: "/redytek.png",
    tags: ["PHP", "JavaScript", "MySQL", "백엔드", "외주 프로젝트"],
    period: "2023.03.18 ~ 2023.04.06",
    url: "http://redytek.co.kr/",
    summary: "redytek 공식 홈페이지의 게시판, 로그인, 보안 기능을 PHP 기반으로 구현한 백엔드 중심 외주 프로젝트.",
    detail: [
        "PHP + MySQL 기반으로 게시판, 파일 업로드, 세션 로그인 기능 전체 구현.",
        "네이버 스마트에디터 및 구글 캡챠 API 연동으로 편집성과 보안성 확보.",
        "회사 요청에 따라 반복적으로 기능을 수정하며 실무 대응 역량 강화.",
        "첫 외주 프로젝트로서 일정 관리, 요구 분석, 보안 기준 충족 등의 경험 확보."
    ]
  },
];

const projects = [
  {
    title: "디스코드 뮤직 자막 봇",
    image: "/musicbot.webp",
    tags: ["Python", "Discord", "실시간 자막", "Lavalink", "대규모 서비스"],
    period: "2018.06 ~ 2023.12",
    url: "https://discord.mayonedev.com/",
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
    url: "https://github.com/MayoneJY/top-solved",
    summary: "Solved.ac 데이터 기반, 상위 100개 문제를 SVG 카드로 시각화하는 오픈소스 API.",
    detail: [
    "실시간 SVG 카드 이미지 자동 생성",
    "FastAPI + Python으로 구현, 퍼포먼스 최적화",
    "Baekjoon(백준) 문제 현황 시각화"
    ]
  },
  {
    title: "디스코드 발로란트 내전 봇",
    image: "/valorant.png",
    tags: ["Javascript", "Python", "React", "Discord Bot", "백트래킹", "개인 프로젝트"],
    period: "2024.05.18 ~ 2024.08.31",
    url: "https://github.com/MayoneJY/valorant-discord-bot",
    summary: "디스코드에서 발로란트 스크림을 쉽게 진행할 수 있도록 도와주는 팀 자동 편성 및 통화방 분리 기능 제공 봇.",
    detail: [
      "discord.py 기반으로 봇 제작, 기존 오픈소스를 fork해 로그인 및 파티 기능 개선.",
      "백트래킹 알고리즘을 적용해 팀 밸런스를 고려한 자동 편성 기능 구현.",
      "발로란트 엔드포인트를 활용한 파티 생성·입장·맵 랜덤 선택 등 자동화 기능 연동.",
      ]
  },
  {
    title: "AI와 함께 개발한 네이버 증권뉴스 크롤러",
    image: "/news.webp",
    tags: ["Python", "React", "FastAPI", "MariaDB", "웹 크롤링"],
    period: "2025.03.06 ~ 2025.03.08",
    url: null,
    summary: "네이버 금융 뉴스의 검색 기능 부재 문제를 해결하기 위해 자동 크롤링 및 키워드 검색 기능을 제공하는 웹 애플리케이션.",
    detail: [
        "FastAPI와 MariaDB를 기반으로 네이버 금융 뉴스 실시간 크롤링 시스템 구현.",
        "키워드 기반 검색, 카테고리 필터링, 자동 새로고침 등 사용자 중심 기능 제공.",
        "React + Material UI 기반의 직관적인 UI 설계, 뉴스 드래그-앤-드롭 메모 기능 지원.",
        "비동기 처리(aiohttp)와 중복 제거 로직을 통한 안정적 크롤링 최적화."
    ]
  },
  {
    title: "WebSocket & Chat System",
    image: "/chat.png",
    tags: ["Javascript", "NestJS", "React", "WebSocket", "TypeORM", "mariadb"],
    period: "2025.01.25 ~ 2025.01.28",
    url: "https://github.com/MayoneJY/nestjs-chat",
    summary: "NestJS와 WebSocket을 활용한 실시간 채팅 및 채팅 기록 저장 시스템.",
    detail: [
        "WebSocket 기반 실시간 채팅 및 채팅방 생성/제거 이벤트 모니터링 기능 구현.",
        "메시지 저장 시 큐에 임시 저장 후 일정 주기로 DB에 일괄 반영하여 성능 최적화.",
        "NestJS + TypeORM + MariaDB를 통해 채팅 내역 영속화 및 검색 기능 제공."
    ]
  },
  {
    title: "Allive",
    image: "/alive.webp",
    tags: ["Javascript", "Node.js", "React", "크롤링", "멀티 플랫폼"],
    period: "2024.01.16 ~ 2024.02.04",
    url: null,
    summary: "치지직, 트위치, 아프리카TV를 한 번에 모아보는 실시간 방송 통합 시청 플랫폼.",
    detail: [
        "트위치/치지직 API, 아프리카 크롤링을 통해 방송 중인 스트리머 정보를 통합 수집 및 시각화.",
        "아프리카는 실시간 API 미지원으로 크롤링 후 5분 단위 캐시 시스템 적용.",
        "플랫폼 간 스트리머 이름 불일치 문제를 겪으며 데이터 표준화의 필요성을 체감."
    ]
  },
  {
    title: "디스코드 입퇴장 알림 봇",
    image: "/discord-exit.webp",
    tags: ["Python", "Discord Bot", "TTS", "개인 프로젝트"],
    period: "2023.12.08",
    url: "https://github.com/MayoneJY/Discord-entry-exit-tts-bot",
    summary: "디스코드 음성채널 내에서 사용자의 입퇴장 및 채팅을 TTS 음성으로 출력하는 실시간 알림 봇.",
    detail: [
        "사용자 요청 기반으로 입퇴장 및 채팅 인식 후 음성 출력 기능 기획 및 구현.",
        "discord.py와 TTS API를 연동해 음성채널 입퇴장 시 닉네임을 음성으로 출력.",
        "텍스트 채팅 입력 시 TTS 음성으로 변환 후 음성채널에 송출하는 기능 포함."
    ]
  },
  {
    title: "수락고 카카오 챗봇",
    image: "/kakao.png",
    tags: ["PHP", "MySQL", "웹 파싱", "카카오 챗봇", "개인 프로젝트"],
    period: "2017.11.01 ~ 2017.12.31",
    url: "https://pf.kakao.com/_xdtxjpd",
    summary: "모교 학생들을 위해 급식·날씨·버스 정보를 제공하는 카카오 플러스 친구 챗봇 서비스.",
    detail: [
        "PHP 기반으로 웹 파싱 기능을 구현하여 실시간 급식·날씨·버스 정보 제공.",
        "카카오 플러스 친구 API를 활용해 사용자와의 인터랙션 챗봇 구축."
    ]
  },
  {
    title: "디스코드 Chat GPT 봇 with AWS",
    image: "/discord-gpt.webp",
    tags: ["Python", "OpenAI API", "Discord Bot", "Slack", "AWS Cloud9", "개인 프로젝트"],
    period: "2023.03.14",
    url: null,
    summary: "디스코드와 슬랙에서 ChatGPT API를 실시간으로 사용할 수 있는 멀티플랫폼 챗봇 프로젝트.",
    detail: [
        "Python 기반으로 Discord 및 Slack에서 동작하는 GPT 챗봇 시스템 개발.",
        "OpenAI API와 Discord API를 연동해 실시간 자연어 응답 기능 구현.",
        "AWS Cloud9을 이용해 서버 구성 및 클라우드 환경에서 봇을 안정적으로 운영."
    ]
  },
  {
    title: "중대 급 병역관리 프로그램",
    image: "/gradients_3.png",
    tags: ["Excel", "VBA", "자동화", "개인 프로젝트"],
    period: "2019.03.19 ~ 2020.10.21",
    url: null,
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


const universityProjects = [
  {
    title: "VR 메타버스 운전면허 시험장",
    image: "/vr.webp",
    tags: ["Unity", "C#", "Arduino", "Oculus", "VR", "팀 프로젝트"],
    period: "2022.03.02 ~ 2022.12.08",
    url: "https://github.com/MayoneJY/Metaverse-Driver-s-License-Skill-Test",
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
    image: "/gamepage.webp",
    tags: ["Java", "Spring Boot", "React", "MySQL", "JavaScript", "팀 프로젝트"],
    period: "2023.03.02 ~ 2023.12.31",
    url: null,
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
    image: "/scanning.webp",
    tags: ["Linux", "Python", "Unity", "ROS", "3D맵", "팀프로젝트"],
    period: "2023.03.02 ~ 2023.12.31",
    url: "",
    summary: "드론과 같은 장비로 스캔한 뒤 3d 맵으로 출력해주는 프로젝트.",
    detail: [
        "ROS 기반으로 라이다·깊이 카메라 데이터를 받아와 UDP로 실시간 전송하는 기능 구현.",
        "정지 상태 및 이동 중에도 안정적인 3D 공간 스캔 및 맵 시각화 구현 성공.",
        "정확도와 속도 간 트레이드오프를 조율하며 위치 파악 알고리즘을 활용.",
    ]
  },
  {
    title: "sendAnywhere 프로젝트",
    image: "/sendanywhere.webp",
    tags: ["Python", "Django", "암호화", "보안", "개인 프로젝트"],
    period: "2023.12.15 ~ 2023.12.16",
    url: "https://send.mayonedev.com/",
    summary: "sendAnywhere 서비스를 분석하여 보안 기반의 파일 전송 기능을 Django로 구현한 과제형 프로젝트.",
    detail: [
        "Django 기반으로 파일 업로드, 암호 설정, 암호화·복호화 기능 구현.",
        "파일 전송 시 일련번호 생성 및 암호 입력을 통해 접근 제어 기능 적용.",
        "새로고침 시 중복 업로드 문제를 예외 처리하며 안정성 확보.",
        "Caddy 서버를 활용해 서브도메인 적용 및 보안 흐름에 대한 기본 이해 향상."
    ]
  },
  {
    title: "도서 관리 프로그램",
    image: "/manage.png",
    tags: ["C#", "MySQL", "API 연동", "팀 프로젝트"],
    period: "2021.03.02 ~ 2021.11.28",
    url: null,
    summary: "도서관 대출, 회원 관리, 주소 연동 등의 기능을 포함한 Windows 기반 도서 관리 프로그램.",
    detail: [
        "요구사항 분석, DB 설계, 화면 기획 등 전체 프로세스에 참여하고 대부분 기능을 개발.",
        "C# 기반 데스크탑 앱으로 메일 전송 및 도로명 주소 검색 등 외부 API 연동 기능 구현.",
        "메인 개발자로서 주요 기능과 로직을 직접 설계 및 구현하며 프로젝트 중심 역할 수행."
    ]
  },
  {
    title: "VR 리듬게임 프로젝트",
    image: "/vr-game.png",
    tags: ["C#", "Unity", "Oculus", "BPM 분석", "개인 프로젝트"],
    period: "2021.09.01 ~ 2021.12.04",
    url: null,
    summary: "VR 환경에서 음악의 박자에 맞춰 총을 조준하는 리듬 게임과 음원 트랙 자동 생성기를 개발한 개인 프로젝트.",
    detail: [
        "Oculus 기반 Unity 프로젝트로 VR 몰입형 리듬 슈팅 게임 개발."
    ]
  },
  {
    title: "모바일 게임 프로젝트",
    image: "/vr-game-2.png",
    tags: ["C#", "Unity", "모바일 게임", "개인 프로젝트"],
    period: "2021.03.02 ~ 2021.04.26",
    url: null,
    summary: "'드래곤플라이트'를 참조해 메커니즘을 분석하고 자체 게임을 설계·개발한 Unity 기반 모바일 게임 프로젝트.",
    detail: [
        "한국 대표 모바일 게임인 드래곤플라이트의 게임 흐름과 구성요소를 분석.",
        "분석한 메커니즘을 바탕으로 새로운 비행 슈팅 게임 구조와 UI/UX 설계.",
        "Unity와 C#을 활용하여 기본적인 게임 시스템과 캐릭터 조작 기능 구현."
    ]
  },
  {
    title: "유튜브 자막 팝업 프로그램",
    image: "/youtube-cc.webp",
    tags: ["Java", "Python", "자막 팝업", "개인 프로젝트"],
    period: "2021.01.01 ~ 2022.05.11",
    url: null,
    summary: "유튜브 CC 자막을 별도 팝업 창에서 표시하여 시청자의 자막 가독성을 높인 독립형 자막 출력 프로그램.",
    detail: [
        "유튜브 영상 재생 시 CC 자막을 추출해 독립된 팝업 화면에 출력하는 기능 구현.",
        "초기 버전은 Python으로 제작하고, 이후 Java로 전체 기능 재구현.",
        "멀티 언어 기반 개발을 통해 언어 간 아키텍처 차이 이해 및 구현 능력 강화.",
        "시각적 집중도 향상과 자막 접근성 향상을 위한 사용자 중심 설계."
    ]
  },
  {
    title: "PC방 관리 프로그램",
    image: "/pc.png",
    tags: ["Excel", "Visual Basic", "PC방 시스템", "개인 프로젝트"],
    period: "2018.09.01 ~ 2018.12.14",
    url: null,
    summary: "PC방 사용자 관리와 시간 추가 기능을 엑셀과 Visual Basic을 활용해 구현한 관리용 데스크탑 프로그램.",
    detail: [
        "Excel을 데이터베이스로 활용해 사용자 정보, 이용 시간 등 핵심 데이터 관리 기능 구현.",
        "상용 PC방 관리 프로그램의 구조와 기능을 분석해 유사 기능을 Visual Basic으로 재현.",
        "사용 시간 추가, 회원 정보 조회 등 주요 기능을 VBA로 자동화.",
        "분석 기반의 기능 재현 경험을 통해 서비스 기획 및 기술 조합 역량 강화."
    ]
  }
  // ...나머지도 동일하게 추가
];

const ProjectCard = ({ project, isExpanded, onToggle }) => (
  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
    <div className="relative overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        {project.url && (
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
      
      <p className="text-sm text-gray-500 mb-3">{project.period}</p>
      <p className="text-gray-700 text-sm leading-relaxed mb-4">{project.summary}</p>
      
      <button
        onClick={onToggle}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
      >
        {isExpanded ? "접기" : "자세히 보기"}
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <ul className="space-y-2">
            {project.detail.map((item, idx) => (
              <li key={idx} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

const SkillCategory = ({ title, skills, color }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
    <h3 className={`text-lg font-bold mb-4 text-${color}-600`}>{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span 
          key={idx} 
          className={`px-3 py-1.5 bg-gradient-to-r from-${color}-50 to-${color}-100 text-${color}-700 text-sm font-medium rounded-lg border border-${color}-200 hover:shadow-md transition-shadow`}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function App() {
  const [expandedProjects, setExpandedProjects] = useState({});
  const [expandedOutsourcing, setExpandedOutsourcing] = useState({});
  const [expandedUniversity, setExpandedUniversity] = useState({});

  const toggleProject = (section, index) => {
    const setExpanded = section === 'projects' ? setExpandedProjects : 
                      section === 'outsourcing' ? setExpandedOutsourcing : 
                      setExpandedUniversity;
    
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="relative">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-64 h-64 object-cover rounded-full border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg" />
            </div>
            
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                {profile.name}
              </h1>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                어쩌다보니 에이스 • 풀스택 개발자
              </p>
              <p className="text-blue-50 mb-8 max-w-2xl leading-relaxed">
                다양한 프로젝트 경험을 통해 <span className="font-semibold text-white">프론트엔드 및 백엔드 개발 능력</span>을 갖춘 소프트웨어 개발자입니다. 
                Python으로 개발한 '디스코드 뮤직 자막 봇'은 217,166명의 6,420개 서버에서 서비스하며 긍정적인 반응을 얻었습니다.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href={profile.github} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-105">
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-105">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href={`mailto:${profile.email}`}
                   className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-105">
                  <Mail size={20} />
                  <span>Email</span>
                </a>
                <a href={`tel:${profile.phone}`}
                   className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-105">
                  <Phone size={20} />
                  <span>Phone</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16 space-y-20">
        {/* Awards Section */}
        <section>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg">
              <Award className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Awards & Recognition</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, i) => (
              <div key={i} className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg group-hover:scale-110 transition-transform">
                    <Award className="text-orange-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{award.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{award.date} • {award.org}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{award.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>
          
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.school}</h3>
                    <p className="text-gray-600">{edu.degree}</p>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-lg font-medium text-sm">
                    {edu.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-lg">
              <Code className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCategory title="Backend" skills={skills.Backend} color="blue" />
            <SkillCategory title="DevOps" skills={skills.DevOps} color="green" />
            <SkillCategory title="Frontend" skills={skills.Frontend} color="purple" />
            <SkillCategory title="Tools" skills={skills.Etc} color="gray" />
          </div>
        </section>

        {/* Outsourcing Section */}
        <section>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl shadow-lg">
              <Briefcase className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Commercial Projects</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {outsourcing.map((project, i) => (
              <ProjectCard
                key={i}
                project={project}
                isExpanded={expandedOutsourcing[i]}
                onToggle={() => toggleProject('outsourcing', i)}
              />
            ))}
          </div>
        </section>

        {/* Personal Projects Section */}
        <section>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg">
              <Folder className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Personal Projects</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                project={project}
                isExpanded={expandedProjects[i]}
                onToggle={() => toggleProject('projects', i)}
              />
            ))}
          </div>
        </section>

        {/* University Projects Section */}
        <section>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">University Projects</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {universityProjects.map((project, i) => (
              <ProjectCard
                key={i}
                project={project}
                isExpanded={expandedUniversity[i]}
                onToggle={() => toggleProject('university', i)}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              새로운 도전과 협업 기회를 언제나 환영합니다. 함께 멋진 프로젝트를 만들어보세요!
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110">
                <Github size={24} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${profile.email}`}
                 className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
            
            <div className="pt-8 border-t border-gray-700 text-gray-400">
              <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
              <p className="mt-2 text-sm">Built with React & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}