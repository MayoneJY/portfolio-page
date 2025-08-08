import React, { useState } from "react";
import { Github, Youtube, Mail, Phone, Linkedin, ExternalLink, Award, GraduationCap, Code, Briefcase, Folder, ChevronDown, ChevronUp } from "lucide-react";
import {
  profile,
  skills,
  awards,
  education,
  featuredProject,
  projects,
  universityProjects,
  outsourcing
} from "./data";


const ProjectCard = ({ project, isExpanded, onToggle }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
    <img 
      src={project.image} 
      alt={project.title} 
      className="w-full h-48 object-cover"
    />
    
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900">
          {project.title}
        </h3>
        <div className="flex gap-2">
          {Array.isArray(project.youtube)
            ? project.youtube.map((yt, idx) => (
                <a key={idx} href={yt} target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-red-600">
                  <Youtube size={18} />
                </a>
              ))
            : project.youtube && (
                <a href={project.youtube} target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-red-600">
                  <Youtube size={18} />
                </a>
              )
          }
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900">
              <Github size={18} />
            </a>
          )}
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-blue-600">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-sm text-gray-500 mb-3">{project.period}</p>
      <p className="text-gray-700 text-sm mb-4">{project.summary}</p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-32 h-32 object-cover rounded-full"
            />
            
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {profile.name}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                어쩌다보니 에이스 • 풀스택 개발자
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                다양한 프로젝트 경험을 통해 프론트엔드 및 백엔드 개발 능력을 갖춘 소프트웨어 개발자입니다.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href={profile.github} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a href={`mailto:${profile.email}`}
                   className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                  <Mail size={18} />
                  <span>Email</span>
                </a>
                <a href={`tel:${profile.phone}`}
                   className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                  <Phone size={18} />
                  <span>Phone</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* Featured Project */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Award size={24} />
            Featured Project
          </h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="gap-8 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredProject.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredProject.title}</h3>
                <p className="text-gray-700 mb-6">{featuredProject.summary}</p>
                {/* 가운데 정렬 */}
                <div className="flex justify-center mb-6">
                  <iframe width="560" height="315" className="" src="https://www.youtube.com/embed/69XVy5Balt4?si=Ennp5gzRB4aBuOoJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="text-2xl font-bold text-blue-600">{featuredProject.stats.users}</div>
                    <div className="text-sm text-gray-600">최고 사용자</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="text-2xl font-bold text-blue-600">{featuredProject.stats.servers}</div>
                    <div className="text-sm text-gray-600">최고 서버 수</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="text-2xl font-bold text-blue-600">{featuredProject.stats.dailyPlays}</div>
                    <div className="text-sm text-gray-600">하루 최고 재생 수</div>
                  </div>
                </div>

                {/* 설명문 */}
                <div className="text-gray-700 space-y-4 mb-6 leading-relaxed">

                  <p>
                    해당 서비스는 디스코드 음성 채널에서 유튜브 음악을 재생하면서, 
                    <span className="font-semibold text-blue-600"> 실시간 자막(cc 자막 포함) </span>을 싱크에 맞춰 출력하는 기능을 제공합니다.
                  </p>

                  <p>
                    Python의 <span className="font-semibold">py-cord</span>와 <span className="font-semibold">yt-dlp</span>를 활용하여 개발되었으며, 
                    초기에는 다운로드 방식이었지만 블로킹 문제로 인해 <span className="font-semibold text-blue-600">스트리밍 방식으로 전환</span>하였습니다.
                    이후 <span className="font-semibold">run_in_executor</span>를 통한 비동기 처리와 <span className="font-semibold text-blue-600">Lavalink</span> 서버 도입으로
                    음성 스트리밍 부하를 분산시켰고, 
                    <span className="font-semibold text-green-600">하루 최대 6.5만 회</span> 재생되는 상황에서도 안정적으로 운영될 수 있도록 최적화하였습니다.
                  </p>

                  <p>
                    자막의 밀도가 높은 구간에서는 <span className="font-semibold">자동 병합 기능</span>을 적용하여 싱크가 깨지지 않도록 했고, 
                    <span className="font-semibold">도배성 메시지 제한</span>, <span className="font-semibold">IP 차단 회피</span> 등 다양한 운영 이슈도 직접 해결했습니다.
                  </p>

                  <p>
                    GitHub 기준으로 <span className="font-semibold text-blue-600">유튜브 cc 자막을 지원한 최초의 디스코드 봇</span>이며, 
                    서비스 기획부터 개발, 운영, 성능 개선까지 전 과정을 주도하며 기술적 성장을 이뤘습니다.
                  </p>

                </div>

                
                <div className="flex gap-4">
                  <a href={featuredProject.url} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    <ExternalLink size={18} />
                    서비스 확인
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Awards */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Award size={24} />
            Awards
          </h2>
          
          <div className="grid gap-4">
            {awards.map((award, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{award.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{award.org}</p>
                    <p className="text-gray-700 text-sm">{award.desc}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{award.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <GraduationCap size={24} />
            Education
          </h2>
          
          <div className="grid gap-4">
            {education.map((edu, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{edu.school}</h3>
                    <p className="text-gray-700">{edu.degree}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Code size={24} />
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Commercial Projects */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Briefcase size={24} />
            Commercial Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {outsourcing.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </section>

        {/* Personal Projects */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Folder size={24} />
            Personal Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </section>
        
        {/* University Projects */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Folder size={24} />
            University Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {universityProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-4">새로운 도전과 협업 기회를 언제나 환영합니다.</p>
            <div className="flex justify-center gap-4 mb-6">
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-gray-900">
                <Github size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-blue-600">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${profile.email}`}
                 className="text-gray-600 hover:text-blue-600">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}