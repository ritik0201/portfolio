import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Experience",
            content: (
                <div className="space-y-8">
                    {/* Sailgo Section */}
                    <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                            <div>
                                <h3 className="text-base md:text-lg font-bold text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                                    🚀 Full Stack Intern
                                </h3>
                                <p className="text-xs md:text-sm font-semibold text-fuchsia-500">
                                    Sailgo
                                </p>
                            </div>
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-800 rounded-full md:self-start">
                                Apr 2026 – Present
                            </span>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                            <li>Build and maintain frontend (React) and backend (Node.js) features for a live product used by real users.</li>
                            <li>Collaborate across engineering, product, and marketing; context-switch between feature work and research tasks.</li>
                            <li>Handle confidential client data and proprietary codebase — practised in professional confidentiality norms.</li>
                        </ul>
                    </div>

                    {/* Tuition-Ed Section */}
                    <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                            <div>
                                <h3 className="text-base md:text-lg font-bold text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                                    💻 Developer Intern
                                </h3>
                                <p className="text-xs md:text-sm font-semibold text-fuchsia-500">
                                    Tuition-Ed
                                </p>
                            </div>
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-800 rounded-full md:self-start">
                                Dec 2024 – Present
                            </span>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                            <li>Maintained and upgraded the core educational platform, sustaining 99.9% production uptime.</li>
                            <li>Architected and launched <a href="https://new.tuition-ed.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">new.tuition-ed.com</a> with a full admin dashboard for teacher/student management.</li>
                            <li>Implemented JWT auth, Role-Based Access Control (RBAC), and course management features that improved retention.</li>
                            <li>Profiled and optimised slow DB queries and frontend render paths — measurably reduced page load times.</li>
                            <li>Reviewed pull requests, caught regressions early, and enforced consistent code quality on a remote team.</li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <img
                            src="image/1.png"
                            alt="Tuition-Ed Homepage"
                            className="w-full h-24 md:h-40 rounded-lg object-cover shadow-sm hover:scale-[1.02] transition-transform duration-300"
                        />
                        <img
                            src="image/10.png"
                            alt="Tuition-Ed Dashboard"
                            className="w-full h-24 md:h-40 rounded-lg object-cover shadow-sm hover:scale-[1.02] transition-transform duration-300"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Projects",
            content: (
                <div className="space-y-8">
                    {/* StayNest */}
                    <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                        <h3 className="text-base md:text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                            🏡 StayNest — Student Room Listing Platform
                        </h3>
                        <p className="text-xs font-semibold text-yellow-500 mb-3">
                            Next.js · MongoDB · Cloudinary · Razorpay
                        </p>
                        <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mb-3 text-justify">
                            A high-performance full-stack rental platform featuring location-based search, dynamic amenity filters, interactive map integration, secure payment gateway, and automated email notifications. Designed and optimized image uploads via Cloudinary with responsive delivery, backed by secure session-based auth.
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                            ✨ Fully responsive from 320px to 1440px — meticulously designed and QA&apos;d across multiple breakpoints.
                        </p>
                        <img
                            src="image/7.png"
                            alt="StayNest Platform Preview"
                            className="w-full h-32 md:h-56 rounded-lg object-cover shadow-md"
                        />
                    </div>

                    {/* Tuition-Ed Platform */}
                    <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                        <h3 className="text-base md:text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                            🎓 Tuition-Ed Platform
                        </h3>
                        <p className="text-xs font-semibold text-yellow-500 mb-3">
                            Next.js · Node.js · MongoDB · Tailwind CSS · Razorpay
                        </p>
                        <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mb-3 text-justify">
                            A robust tutor-student marketplace showcasing advanced course management, live data streaming, seamless Razorpay gateway, and a mobile-first UI. Built production-ready REST APIs with robust input validation, rate limiting, and centralized error handling middleware.
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                            ✨ Managed complex schema migrations smoothly over multiple design iterations without breaking user data.
                        </p>
                        <img
                            src="image/3.png"
                            alt="Tuition-Ed Platform Preview"
                            className="w-full h-32 md:h-56 rounded-lg object-cover shadow-md"
                        />
                    </div>

                    {/* CollaBharat */}
                    <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                        <h3 className="text-base md:text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                            🇮🇳 CollaBharat — Team Collaboration Platform
                        </h3>
                        <p className="text-xs font-semibold text-yellow-500 mb-3">
                            Next.js · MongoDB · AI Integration · Payment Gateway
                        </p>
                        <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mb-3 text-justify">
                            A collaboration and marketplace portal for project teams. Implemented an approval-based interest system, role-based shared workspaces, real-time task assignments, progress tracking dashboards, and AI capabilities for enhanced team productivity.
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                            ✨ Integrates an end-to-end payment pipeline and marketplace for teams to sell completed projects to startups.
                        </p>
                        <img
                            src="image/15.png"
                            alt="CollaBharat Preview"
                            className="w-full h-32 md:h-56 rounded-lg object-cover shadow-md"
                        />
                    </div>

                    {/* Cloudinary-Store */}
                    <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                        <h3 className="text-base md:text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                            ☁️ Cloudinary-Store — AI Content Platform
                        </h3>
                        <p className="text-xs font-semibold text-yellow-500 mb-3">
                            React.js · Cloudinary · AI API
                        </p>
                        <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mb-3 text-justify">
                            An innovative content sharing SaaS featuring AI-powered cover image generation, fully secured authentication flows, and high-performance media delivery optimization via Cloudinary.
                        </p>
                        <img
                            src="image/7.png"
                            alt="Cloudinary-Store Preview"
                            className="w-full h-32 md:h-56 rounded-lg object-cover shadow-md"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Skills",
            content: (
                <div className="space-y-6">
                    <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                        Extensive hands-on technical skillset spanning frontend interfaces, backend services, databases, and modern developer tooling.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/30 dark:bg-neutral-900/30">
                            <h4 className="text-xs md:text-sm font-bold text-yellow-500 uppercase tracking-wider mb-2">💻 Languages</h4>
                            <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                                JavaScript (Strong), TypeScript, C++, Java, Python, C#
                            </p>
                        </div>
                        
                        <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/30 dark:bg-neutral-900/30">
                            <h4 className="text-xs md:text-sm font-bold text-yellow-500 uppercase tracking-wider mb-2">🎨 Frontend Development</h4>
                            <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                                React.js, Next.js, Tailwind CSS, HTML5, Responsive layouts down to 320px
                            </p>
                        </div>

                        <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/30 dark:bg-neutral-900/30">
                            <h4 className="text-xs md:text-sm font-bold text-yellow-500 uppercase tracking-wider mb-2">⚙️ Backend & Architecture</h4>
                            <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                                Node.js, Express, REST APIs, JWT Auth, Role-Based Access Control (RBAC), Rate Limiting, Input Validation
                            </p>
                        </div>

                        <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/30 dark:bg-neutral-900/30">
                            <h4 className="text-xs md:text-sm font-bold text-yellow-500 uppercase tracking-wider mb-2">🗄️ Databases</h4>
                            <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                                MongoDB (Production-grade), PostgreSQL (Learning — Joins, Indexes, Query Plans)
                            </p>
                        </div>

                        <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/30 dark:bg-neutral-900/30">
                            <h4 className="text-xs md:text-sm font-bold text-yellow-500 uppercase tracking-wider mb-2">🛠️ Tooling & DevOps</h4>
                            <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                                Git, GitHub (PR reviews, Code Quality), Linux CLI, Cloudinary, Docker (Basic)
                            </p>
                        </div>

                        <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/30 dark:bg-neutral-900/30">
                            <h4 className="text-xs md:text-sm font-bold text-yellow-500 uppercase tracking-wider mb-2">💳 Cloud & Payments</h4>
                            <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                                Razorpay integration, AWS Cloud Security (Certified), CI/CD pipelines (Basic)
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <img src="image/14.png" alt="Developer Setup" className="h-20 w-full rounded-lg object-cover shadow-sm md:h-44" />
                        <img src="image/13.png" alt="Development Workflow" className="h-20 w-full rounded-lg object-cover shadow-sm md:h-44" />
                    </div>
                </div>
            ),
        },
        {
            title: "Education",
            content: (
                <div className="space-y-6">
                    {/* BCA Section */}
                    <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                            <div>
                                <h3 className="text-base md:text-lg font-bold text-neutral-800 dark:text-neutral-100">
                                    🎓 Bachelor of Computer Applications (BCA)
                                </h3>
                                <p className="text-xs md:text-sm font-semibold text-fuchsia-500">
                                    Ewing Christian College, University of Allahabad
                                </p>
                            </div>
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-800 rounded-full md:self-start">
                                2023 – 2026
                            </span>
                        </div>
                        <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                            Academic Standing: CGPA <span className="font-bold text-yellow-500 text-sm md:text-base">8.1 / 10</span>
                        </p>
                        <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 text-justify">
                            Actively specialized in modern computer systems, web application design, database operations, and software engineering. Recognized as BCA &ldquo;All-Rounder&rdquo; for excellence in both academics and technical implementation.
                        </p>
                    </div>

                    {/* Class XII Section */}
                    <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                            <div>
                                <h3 className="text-base md:text-lg font-bold text-neutral-800 dark:text-neutral-100">
                                    🏫 Senior Secondary (Class XII)
                                </h3>
                                <p className="text-xs md:text-sm font-semibold text-fuchsia-500">
                                    Kendriya Vidyalaya School, Prayagraj
                                </p>
                            </div>
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-800 rounded-full md:self-start">
                                Year: 2021
                            </span>
                        </div>
                        <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                            Academic Score: <span className="font-bold">78%</span>
                        </p>
                        <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 text-justify">
                            Completed under Science stream with special focus on Computer Science, algorithm design, and procedural coding models.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "Achievements",
            content: (
                <div className="space-y-6">
                    <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-base md:text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
                            🏆 Honors & Academic Awards
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                            <li>Awarded the prestigious **BCA &ldquo;All-Rounder&rdquo;** designation (ECC, 2026).</li>
                            <li>Formally recognized as a **&ldquo;Management and Development Expert&rdquo;** (2026).</li>
                        </ul>
                    </div>

                    <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-base md:text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
                            📜 Selected Certifications & Programs
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                            <div className="flex items-start gap-2">
                                🛡️ <span><strong>AWS Cloud Security Essentials</strong></span>
                            </div>
                            <div className="flex items-start gap-2">
                                💻 <span><strong>ReactJS Bootcamp & Hackathon (2024)</strong></span>
                            </div>
                            <div className="flex items-start gap-2">
                                📊 <span><strong>GenAI Powered Data Analytics</strong></span>
                            </div>
                            <div className="flex items-start gap-2">
                                💼 <span><strong>Deloitte Data Analytics Simulation</strong></span>
                            </div>
                            <div className="flex items-start gap-2">
                                🚀 <span><strong>Semrush AI Search Essentials</strong></span>
                            </div>
                            <div className="flex items-start gap-2">
                                🔍 <span><strong>Semrush Off-Page SEO Certified</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Resume & Connect",
            content: (
                <div className="space-y-6">
                    <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        I am eager to join a fast-paced team, take on varied tasks, and own features end-to-end. Let&apos;s build something impactful together!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="flex-1 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/30 dark:bg-neutral-900/30 flex flex-col justify-between items-start">
                            <div>
                                <h4 className="text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-100 mb-1">📄 Latest Resume</h4>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">Download the comprehensive PDF including references and projects details.</p>
                            </div>
                            <a
                                href="image/Ritik_Kumar_CV.pdf"
                                download="Ritik_Kumar_CV.pdf"
                                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                            >
                                📥 Download PDF Resume
                            </a>
                        </div>

                        <div className="flex-1 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/30 dark:bg-neutral-900/30 flex flex-col justify-between items-start">
                            <div>
                                <h4 className="text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-100 mb-1">💬 Direct Inquiry</h4>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">Ping me on WhatsApp or drop an email directly for custom work or interviews.</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <a
                                    href="https://wa.me/919555503658"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-2 text-xs font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow-sm"
                                >
                                    💬 WhatsApp Me
                                </a>
                                <a
                                    href="mailto:ritikkvs2177@gmail.com"
                                    className="px-3 py-2 text-xs font-semibold text-neutral-800 dark:text-white bg-neutral-200 dark:bg-neutral-800 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                                >
                                    📧 Send Email
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <img src="image/8.png" alt="GitHub Work" className="h-20 w-full rounded-lg object-cover shadow-sm md:h-44" />
                        <img src="image/9.png" alt="LinkedIn Platform" className="h-20 w-full rounded-lg object-cover shadow-sm md:h-44" />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
