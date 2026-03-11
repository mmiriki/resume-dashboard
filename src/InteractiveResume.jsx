import React, { useState } from 'react';
import {
    MapPin, Phone, Mail, FileText, BarChart2, Download,
    TrendingUp, Clock, CheckCircle, Zap, Database, Code,
    Briefcase, GraduationCap, Layout
} from 'lucide-react';

const InteractiveResume = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* --- Print Styles --- */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @media print {
          body { background-color: white; }
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          .print-container { padding: 0 !important; margin: 0 !important; max-width: 100% !important; box-shadow: none !important;}
        }
      `}} />

            {/* --- Header Section --- */}
            <header className="bg-slate-900 text-white pt-16 pb-12 px-6 sm:px-12 rounded-b-[2rem] shadow-xl no-print">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-center md:text-left">
                            Oyinmiebi Michael Miriki
                        </h1>
                        <h2 className="text-xl md:text-2xl text-blue-300 font-medium mb-4 text-center md:text-left">
                            Operations Analyst &amp; Process Improvement Specialist
                        </h2>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-300">
                            <span className="flex items-center gap-1.5"><MapPin size={16} /> Lake Helen, FL 37244</span>
                            <span className="flex items-center gap-1.5"><Phone size={16} /> (786) 395-4103</span>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => setActiveTab('dashboard')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${activeTab === 'dashboard' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                }`}
                        >
                            <Layout size={18} /> Dashboard
                        </button>
                        <button
                            onClick={() => setActiveTab('resume')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${activeTab === 'resume' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                }`}
                        >
                            <FileText size={18} /> Classic Resume
                        </button>
                    </div>
                </div>
            </header>

            {/* --- Main Content Area --- */}
            <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 print-container">

                {/* --- DASHBOARD VIEW --- */}
                {activeTab === 'dashboard' && (
                    <div className="space-y-8 no-print animate-fade-in">
                        {/* Impact Metrics */}
                        <section>
                            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <TrendingUp className="text-blue-600" /> Operational Impact Metrics
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <MetricCard
                                    icon={<Clock size={24} className="text-emerald-500" />}
                                    title="Processing Time"
                                    value="60%"
                                    subtitle="Reduction via VBA/Python automation"
                                    color="bg-emerald-50 border-emerald-100"
                                />
                                <MetricCard
                                    icon={<CheckCircle size={24} className="text-blue-500" />}
                                    title="Data Accuracy"
                                    value="99.5%"
                                    subtitle="Maintained in high-volume shipments"
                                    color="bg-blue-50 border-blue-100"
                                />
                                <MetricCard
                                    icon={<Zap size={24} className="text-purple-500" />}
                                    title="Experience"
                                    value="5+ Yrs"
                                    subtitle="Logistics & Data Management"
                                    color="bg-purple-50 border-purple-100"
                                />
                            </div>
                        </section>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Technical Skills Bars */}
                            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                                    <Code className="text-indigo-600" /> Technical Competencies
                                </h3>
                                <div className="space-y-5">
                                    <SkillBar category="Automation & Scripting" skills="VBA, Python (Pandas), SQL" percentage={95} color="bg-indigo-500" />
                                    <SkillBar category="Data Visualization" skills="Power BI, Tableau, Advanced Excel" percentage={85} color="bg-blue-500" />
                                    <SkillBar category="Methodologies" skills="RPA, Root Cause Analysis, QA/Testing" percentage={90} color="bg-teal-500" />
                                    <SkillBar category="AI & Logic Evaluation" skills="RLHF, Prompt Engineering, LLM QA" percentage={80} color="bg-purple-500" />
                                </div>
                            </section>

                            {/* Career Timeline */}
                            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                                    <Briefcase className="text-orange-600" /> Experience Timeline
                                </h3>
                                <div className="relative border-l-2 border-slate-200 ml-3 space-y-8">
                                    <TimelineItem
                                        date="May 2024 - Present"
                                        role="AI Data Quality Analyst"
                                        company="RWS Group"
                                        highlight="Evaluating complex LLM responses and refining expert-level prompts for next-gen models."
                                    />
                                    <TimelineItem
                                        date="Jan 2020 - Present"
                                        role="Customer Service Coordinator"
                                        company="Total Quality Logistics"
                                        highlight="Automated unstructured Excel parsing via custom VBA, saving 60% data entry time."
                                    />
                                    <TimelineItem
                                        date="August 2014 - Dec 2019"
                                        role="BS Interdisciplinary Studies"
                                        company="University of Central Florida"
                                        highlight="Minor in Entrepreneurship. Developed foundations in data analysis and business."
                                    />
                                </div>
                            </section>
                        </div>
                    </div>
                )}

                {/* --- CLASSIC RESUME VIEW --- */}
                {activeTab === 'resume' && (
                    <div className="bg-white shadow-xl rounded-none md:rounded-lg border border-slate-200 p-8 sm:p-12 print:shadow-none print:border-none print:p-0">

                        {/* Download/Print Button */}
                        <div className="flex justify-end mb-6 no-print">
                            <button
                                onClick={handlePrint}
                                className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm font-medium"
                            >
                                <Download size={16} /> Save as PDF / Print
                            </button>
                        </div>

                        {/* Resume Header */}
                        <div className="text-center border-b-2 border-slate-800 pb-6 mb-6">
                            <h1 className="text-3xl font-bold text-slate-900 mb-1 uppercase tracking-wider">Oyinmiebi Michael Miriki</h1>
                            <p className="text-slate-600 text-sm mb-2">Lake Helen, FL 37244 | (786) 395-4103</p>
                        </div>

                        {/* Summary */}
                        <section className="mb-6">
                            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3 uppercase tracking-wider">Professional Summary</h2>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                Operations Analyst and Process Improvement Specialist with 5+ years of experience in logistics and high-volume data management.
                                Proven track record of automating manual workflows using VBA and Python to reduce processing time by 60%. Skilled in
                                translating complex operational data into actionable insights using SQL, Power BI, and Excel, seeking to leverage technical aptitude
                                and domain expertise to drive efficiency in a dynamic analyst role.
                            </p>
                        </section>

                        {/* Technical Skills */}
                        <section className="mb-6">
                            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3 uppercase tracking-wider">Technical Skills</h2>
                            <ul className="text-sm text-slate-700 space-y-1.5 list-disc pl-5">
                                <li><span className="font-semibold text-slate-900">Automation &amp; Scripting:</span> VBA (Windows API, Legacy System Integration), Python (Pandas, Automation logic), SQL (Querying &amp; Data Extraction).</li>
                                <li><span className="font-semibold text-slate-900">Data Visualization:</span> Power BI, Tableau, Advanced Excel (Macros, Power Query, Pivot Tables).</li>
                                <li><span className="font-semibold text-slate-900">Methodologies:</span> Process Automation (RPA), Data Cleansing, Root Cause Analysis, QA/Testing.</li>
                            </ul>
                        </section>

                        {/* Experience */}
                        <section className="mb-6">
                            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3 uppercase tracking-wider">Professional Experience</h2>

                            {/* Job 1 */}
                            <div className="mb-5">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-slate-900 text-base">TOTAL QUALITY LOGISTICS</h3>
                                    <span className="text-sm font-medium text-slate-700">Jan 2020 - Present</span>
                                </div>
                                <div className="text-sm font-medium text-slate-800 mb-2 italic">Customer Service Coordinator | Role Focus: Logistics Operations Analysis &amp; Process Automation</div>
                                <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                                    <li>Spearheaded account-specific data entry automation initiatives while managing standard account coordination duties.</li>
                                    <li><span className="font-semibold">Process Automation Project:</span> Designed and deployed a custom VBA-based automation tool utilizing Windows API calls to interface between Excel datasets and legacy desktop ERP systems.</li>
                                    <li><span className="font-semibold">Operational Impact:</span> The tool parses unstructured Excel forms (invoices/load sheets) to auto-populate complex shipment logic, reducing manual data entry time by ~60% and eliminating human transposition errors.</li>
                                    <li><span className="font-semibold">Data Integrity:</span> Managed the validation and entry of high-volume shipment data into load management systems, ensuring 99.5% accuracy for critical product recalls and site construction projects.</li>
                                    <li><span className="font-semibold">Stakeholder Management:</span> Acted as the primary technical liaison between shippers, receivers, and carriers, utilizing data to identify bottlenecks and resolve delivery exceptions in real-time.</li>
                                </ul>
                            </div>

                            {/* Job 2 */}
                            <div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-slate-900 text-base">RWS GROUP</h3>
                                    <span className="text-sm font-medium text-slate-700">May 2024 - Present</span>
                                </div>
                                <div className="text-sm font-medium text-slate-800 mb-2 italic">AI Data Quality Analyst (Contract) | Specialized in logic evaluation and Reinforcement Learning from Human Feedback (RLHF).</div>
                                <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                                    <li><span className="font-semibold">Logic &amp; Code Evaluation:</span> Evaluated AI model responses for logical consistency, factual accuracy, and reasoning quality, specifically focusing on complex instruction following and technical prompts.</li>
                                    <li><span className="font-semibold">Quality Assurance (QA):</span> Conducted rigorous peer reviews of data annotations to ensure high-fidelity training data for next-generation Large Language Models (LLMs).</li>
                                    <li><span className="font-semibold">Prompt Engineering:</span> Developed and refined expert-level prompts to test the boundaries of AI capabilities, documenting failure modes and hallucination patterns for developer review.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Education */}
                        <section className="mb-6">
                            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3 uppercase tracking-wider">Education</h2>
                            <div className="flex justify-between items-baseline">
                                <div>
                                    <h3 className="font-bold text-slate-900 text-base">University of Central Florida</h3>
                                    <div className="text-sm text-slate-700">Bachelor of Science in Interdisciplinary Studies | Minor in Entrepreneurship</div>
                                </div>
                                <div className="text-sm text-slate-700 text-right">
                                    <div>Orlando, FL</div>
                                    <div>Class of Dec 2019</div>
                                </div>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3 uppercase tracking-wider">Projects &amp; Independent Study</h2>
                            <div className="mb-2">
                                <h3 className="font-bold text-slate-900 text-sm">Algorithmic Trading &amp; Financial Analysis</h3>
                                <ul className="text-sm text-slate-700 space-y-1 mt-1 list-disc pl-5">
                                    <li>Developed automated alert systems and data pipelines for financial market analysis using Python.</li>
                                    <li>Applied statistical modeling to evaluate market trends, reinforcing skills in data logic and automated decision-making.</li>
                                </ul>
                            </div>
                        </section>

                    </div>
                )}

            </main>
        </div>
    );
};

/* --- Subcomponents --- */

const MetricCard = ({ icon, title, value, subtitle, color }) => (
    <div className={`p-5 rounded-xl border ${color} flex flex-col items-start transition-transform hover:-translate-y-1 duration-300`}>
        <div className="mb-3 p-2 bg-white rounded-lg shadow-sm">
            {icon}
        </div>
        <div className="text-3xl font-black text-slate-800 mb-1">{value}</div>
        <div className="font-bold text-slate-700 mb-1">{title}</div>
        <div className="text-xs text-slate-600 leading-tight">{subtitle}</div>
    </div>
);

const SkillBar = ({ category, skills, percentage, color }) => (
    <div className="group">
        <div className="flex justify-between items-end mb-1">
            <span className="text-sm font-bold text-slate-800">{category}</span>
            <span className="text-xs font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">Proficiency High</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2.5 mb-1.5 overflow-hidden">
            <div className={`h-2.5 rounded-full ${color} transition-all duration-1000 ease-out`} style={{ width: `${percentage}%` }}></div>
        </div>
        <div className="text-xs text-slate-600">{skills}</div>
    </div>
);

const TimelineItem = ({ date, role, company, highlight }) => (
    <div className="relative pl-6 pb-2 group">
        <div className="absolute left-[-9px] top-1.5 w-4 h-4 bg-white border-2 border-orange-500 rounded-full group-hover:bg-orange-500 transition-colors"></div>
        <div className="text-xs font-bold text-orange-600 mb-1 uppercase tracking-wider">{date}</div>
        <div className="text-base font-bold text-slate-800 leading-tight">{role}</div>
        <div className="text-sm font-medium text-slate-600 mb-2">{company}</div>
        <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100 group-hover:border-orange-100 transition-colors">
            {highlight}
        </p>
    </div>
);

export default InteractiveResume;
