import React from "react";
import "./App.css"; // Tailwind CSS import

const profile = {
  name: "남정연",
  github: "https://github.com/MayoneJY",
  email: "mayone6063@kakao.com",
  phone: "010-9462-6046",
  linkedin: "https://www.linkedin.com/in/%EC%A0%95%EC%97%B0-%EB%82%A8-a83050293/",
  image: "/JK_GG_hDwukH23041312501647.jpg",
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
];

const outsourcing = [
  {
    name: "EBS MATH 제곱근 레이싱",
    desc: "EBS Math 플래시 게임을 JS로 재개발",
    skill: "Figma, Javascript",
    url: "https://www.ebsmath.co.kr/mathquiz/Main?tab=1",
    role: "Front End",
    period: "2023.03.26 ~ 2023.06.15",
  },
  {
    name: "EBS MATH 삼각형 닮음 카드 게임",
    desc: "EBS Math 플래시 게임 JS로 재개발",
    skill: "Figma, Javascript",
    url: "https://www.ebsmath.co.kr/mathquiz/Main?tab=1",
    role: "Front End",
    period: "2023.03.26 ~ 2023.06.15",
  },
  {
    name: "redytek 홈페이지",
    desc: "공식 홈페이지의 BackEnd 개발",
    skill: "Javascript, PHP",
    url: "http://redytek.co.kr/",
    role: "Back End",
    period: "2023.03.18 ~ 2023.04.06",
  },
];

const projects = [
  {
    title: "디스코드 뮤직 자막 봇",
    image: "/discord-music-bot-cover.png",
    tags: ["Python", "Discord", "실시간 자막", "Lavalink", "대규모 서비스"],
    period: "2018.06 ~ 2023.12",
    url: "https://discord.mayonedev.com/",
    summary: "21만+명, 6천+ 서버에서 사용된 실시간 음악+자막 디스코드 봇. 인증 봇 전환, 동시 트래픽 최적화, 부하 분산 등 대규모 서비스 설계·운영 경험.",
    detail: [
    "2018~2023년 누적 217,166명 6,420서버에서 운영.",
    "인증 봇 전환, Lavalink 도입 등 확장/성능 최적화.",
    "py-cord, yt-dlp, 버튼 UI, 스트리밍 등 다양한 기능 개발.",
    "직접 설계, 서비스, 유지보수까지 경험."
    ]
  },
  {
    title: "top solved",
    image: "/top-solved-card.png",
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
    title: "EBS MATH 제곱근 레이싱",
    image: "/ebsmath-sqrt-racing.png",
    tags: ["Javascript", "Figma", "교육게임", "외주", "프론트엔드"],
    period: "2023.03.26 ~ 2023.06.15",
    url: "https://www.ebsmath.co.kr/mathquiz/Main?tab=1",
    summary: "EBS Math 교육 콘텐츠의 플래시 게임을 JS로 재개발. 퍼블리싱, UI 개선, 디바이스 대응.",
    detail: [
    "외주 프로젝트로 JS/HTML5 기반 리디자인",
    "반응형, 키보드·모바일 컨트롤 지원"
    ]
  },
  {
    title: "redytek 홈페이지",
    image: "/redytek-homepage.png",
    tags: ["Javascript", "PHP", "웹사이트", "백엔드", "외주"],
    period: "2023.03.18 ~ 2023.04.06",
    url: "http://redytek.co.kr/",
    summary: "redytek 공식 홈페이지 백엔드 개발. 예약, 게시판 등 서버 로직 구축.",
    detail: [
    "PHP+JS 기반 백엔드 구조 설계",
    "게시판, 예약, 관리자페이지 구현"
    ]
  },
  {
    title: "디스코드 발로란트 내전 봇",
    image: "/valorant-inhouse-bot.png",
    tags: ["Javascript", "Python", "React", "Discord", "게임봇"],
    period: "2024.05.18 ~ 2024.08.31",
    url: "",
    summary: "디스코드 내에서 커맨드 기반 내전(스크림) 매칭, 팀 자동 분배 봇.",
    detail: [
    "실시간 매칭/팀 랜덤 배정",
    "커스텀 설정, 통계 저장, React 기반 대시보드(예정)"
    ]
  },
  {
    title: "WebSocket & Chat System",
    image: "/chat-system.png",
    tags: ["NestJS", "React", "TypeORM", "Websocket", "MariaDB"],
    period: "2025.01.25 ~ 2025.01.28",
    url: "https://github.com/MayoneJY/nestjs-chat",
    summary: "NestJS + React 기반 실시간 채팅 서비스. 개인 서버 배포 및 실시간 데이터 처리 경험.",
    detail: [
    "NestJS Websocket, 실시간 메시지 송수신",
    "DB 연동 및 TypeORM 구조화, 채팅룸 생성/삭제"
    ]
  },
  {
    title: "VR 메타버스 운전면허 시험장",
    image: "/vr-driving.png",
    tags: ["Arduino", "C#", "Oculus", "Unity", "VR", "팀프로젝트"],
    period: "2022.03.02 ~ 2022.12.08",
    url: "",
    summary: "Oculus/Unity 기반 VR 운전면허 체험 서비스, 기획~개발~시연까지 주도.",
    detail: [
    "교육부 장관상 등 주요 공모전 수상",
    "아두이노, 하드웨어/소프트웨어 통합",
    "메타버스 환경 구축 및 기능 구현"
    ]
  },
  {
    title: "Quantum Tec",
    image: "/quantum-tec.png",
    tags: ["Java", "Spring Boot", "React", "Mysql", "교육플랫폼", "팀프로젝트"],
    period: "2023.03.02 ~ 2023.12.31",
    url: "",
    summary: "Spring Boot/React 기반 교육용 게임 플랫폼, 풀스택 개발 경험.",
    detail: [
    "게임 등록/진행, 관리자 기능 개발",
    "API/DB 설계, 프론트엔드 연동"
    ]
  },
  {
    title: "프로메테우스",
    image: "/prometheus-3dmap.png",
    tags: ["Linux", "Python", "Unity", "3D맵", "팀프로젝트"],
    period: "2023.03.02 ~ 2023.12.31",
    url: "",
    summary: "드론·장비로 실측 후 3D 맵으로 변환하는 자동화 시스템.",
    detail: [
    "Linux, Python으로 데이터 처리",
    "Unity 기반 3D 시각화"
    ]
  },
  // ...이하 생략, 위 구조대로 추가
];


const universityProjects = [
  {
    name: "VR 메타버스 운전면허 시험장",
    skill: "Arduino, C#, Oculus, Unity",
    url: "",
    period: "2022.03.02 ~ 2022.12.08",
    intro: "VR 기반 운전 면허 연습 서비스",
  },
  {
    name: "Quantum Tec",
    skill: "Java, Javascript, Mysql, React, Spring Boot",
    url: "",
    period: "2023.03.02 ~ 2023.12.31",
    intro: "교육용 게임 플랫폼",
  },
  // ...나머지도 동일하게 추가
];

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <header className="bg-white shadow px-8 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-24 h-24 object-cover rounded-full border-4 border-blue-200 shadow"
          />
          <div>
            <h1 className="text-3xl font-bold">{profile.name}</h1>
            <div className="flex flex-row gap-3 mt-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <img src="/github.png" alt="Github" className="w-6 h-6" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <img src="/LI-In-Bug.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href={`mailto:${profile.email}`} className="text-blue-500 underline ml-2">
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="text-blue-500 underline ml-2">
                {profile.phone}
              </a>
            </div>
          </div>
        </div>
        <span className="mt-6 md:mt-0 italic text-blue-800 font-semibold text-lg">어쩌다보니 에이스</span>
      </header>

      <main className="px-8 py-10 max-w-5xl mx-auto">
        <section className="mb-10">
          <p className="text-lg leading-relaxed">
            다양한 프로젝트 경험을 통해 <span className="font-bold text-blue-600">프론트엔드 및 백엔드 개발 능력</span>을 갖춘 소프트웨어 개발자입니다.<br />
            Python으로 개발한 '디스코드 뮤직 자막 봇'은 217,166명의 6,420개 서버에서 서비스하며 긍정적인 반응을 얻었습니다.<br />
            Unity와 Arduino 기반의 VR 프로젝트, Spring Boot와 React를 활용한 게임 플랫폼 등 다양한 경험을 쌓아왔습니다.<br />
            문제 해결 능력과 팀워크, 그리고 빠른 적응력이 강점입니다.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b-2 border-blue-200 pb-2 mb-4">AWARDS</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {awards.map((a, i) => (
              <li key={i} className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
                <div className="font-bold text-blue-700">{a.title}</div>
                <div className="text-sm text-gray-500">{a.date} | {a.org}</div>
                <div className="mt-2">{a.desc}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b-2 border-blue-200 pb-2 mb-4">EDUCATION</h2>
          <ul className="space-y-3">
            {education.map((e, i) => (
              <li key={i} className="bg-white p-3 rounded-xl shadow flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <div className="font-semibold">{e.school}</div>
                  <div className="text-gray-600">{e.degree}</div>
                </div>
                <div className="text-sm text-gray-500">{e.period}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b-2 border-blue-200 pb-2 mb-4">SKILLS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([type, list]) => (
              <div key={type}>
                <div className="font-semibold text-blue-700 mb-2">{type}</div>
                <ul className="flex flex-wrap gap-2">
                  {list.map((skill, idx) => (
                    <li key={idx} className="bg-blue-100 px-3 py-1 rounded-full text-sm font-medium">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b-2 border-blue-200 pb-2 mb-4">OUTSOURCING</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {outsourcing.map((p, i) => (
              <li key={i} className="bg-white p-4 rounded-xl shadow">
                <div className="font-semibold text-lg">{p.name}</div>
                <div className="text-gray-700 text-sm mb-1">{p.desc}</div>
                <div className="flex gap-2 flex-wrap text-xs text-gray-500">{p.skill.split(", ").map((s, i) => <span key={i}>#{s}</span>)}</div>
                <div className="flex justify-between items-center mt-2">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">바로가기</a>
                  <div className="text-xs text-gray-400">{p.period}</div>
                </div>
                <div className="text-xs mt-1 text-gray-500">{p.role}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b-2 border-blue-200 pb-2 mb-4">PROJECTS</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <li key={i} className="bg-white p-5 rounded-2xl shadow-lg flex flex-col gap-3 transition hover:shadow-2xl">
                {/* 이미지 */}
                <div className="w-full h-40 mb-2 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src={p.image} alt={p.title} className="object-cover h-full w-full" />
                </div>
                {/* 태그 */}
                <div className="flex gap-2 flex-wrap text-xs text-blue-600 font-semibold mb-1">
                  {p.tags.map((t, idx) => <span key={idx} className="bg-blue-100 rounded-full px-3 py-1">{t}</span>)}
                </div>
                {/* 제목, 기간, url */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-lg font-bold">{p.title}</div>
                    <div className="text-xs text-gray-400">{p.period}</div>
                  </div>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-xs">
                      바로가기
                    </a>
                  )}
                </div>
                {/* 요약 */}
                <div className="text-gray-700 text-sm mt-1 font-semibold">{p.summary}</div>
                {/* 상세 */}
                <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1 mt-2">
                  {p.detail.map((line, idx) => <li key={idx}>{line}</li>)}
                </ul>
              </li>
            ))}
          </ul>


        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b-2 border-blue-200 pb-2 mb-4">UNIVERSITY PROJECTS</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {universityProjects.map((p, i) => (
              <li key={i} className="bg-white p-4 rounded-xl shadow">
                <div className="font-semibold text-lg">{p.name}</div>
                <div className="flex gap-2 flex-wrap text-xs text-gray-500">{p.skill.split(", ").map((s, i) => <span key={i}>#{s}</span>)}</div>
                <div className="mt-1 text-gray-700 text-sm">{p.intro}</div>
                <div className="flex justify-between items-center mt-2">
                  {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">바로가기</a>}
                  <div className="text-xs text-gray-400">{p.period}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="py-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </div>
  );
}