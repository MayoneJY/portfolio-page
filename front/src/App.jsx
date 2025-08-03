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
    name: "디스코드 뮤직 자막 봇",
    skill: "Python",
    url: "https://discord.mayonedev.com/",
    period: "2018.06.01 ~ 2099.12.31",
    intro: "디스코드에서 음악 감상 및 가사 실시간 제공 서비스",
  },
  {
    name: "top solved",
    skill: "Python",
    url: "https://github.com/MayoneJY/top-solved",
    period: "2025.07.24 ~ 2025.07.25",
    intro: "http://solved.ac/ 상위 100문제 프로필 카드",
  },
  {
    name: "디스코드 발로란트 내전 봇",
    skill: "Javascript, Python, React",
    url: "",
    period: "2024.05.18 ~ 2024.08.31",
    intro: "내전 스크림 자동화 봇",
  },
  {
    name: "AI와 함께 개발한 네이버 증권뉴스 크롤러",
    skill: "Python, React, MariaDB",
    url: "",
    period: "2025.03.06 ~ 2025.03.08",
    intro: "뉴스 크롤링 및 키워드 검색 사이트",
  },
  {
    name: "WebSocket & Chat System",
    skill: "Javascript, NestJS, React, TypeORM, MariaDB",
    url: "https://github.com/MayoneJY/nestjs-chat",
    period: "2025.01.25 ~ 2025.01.28",
    intro: "실시간 채팅 시스템",
  },
  {
    name: "Allive",
    skill: "Javascript, Node.js, React",
    url: "https://live.mayonedev.com/",
    period: "2024.01.16 ~ 2024.02.04",
    intro: "국내외 방송 플랫폼 통합 서비스",
  },
  // ...나머지도 동일하게 추가
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