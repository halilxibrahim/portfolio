const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Stealth Startup",
      location: "Ankara, Türkiye",
      period: "September 2024 - January 2025",
      achievements: [
        "Led the end-to-end development of a SaaS product, scaling to 10K+ active users within React.js,Node.js and AWS.",
        "Created high-performance APIs, reducing request latency by 35%."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Kam Software",
      location: "Ankara, Türkiye",
      period: "September 2023 - September 2024",
      achievements: [
        "Implemented and deployed 4 full-stack web and mobile applications, achieving a 30% improvement in deployment speed.",
        "Delivered high-impact websites for major clients (Dortgen VIP, Yavuz Industries, Selcup, Yilmazlar Construction)."
      ]
    },
    {
      title: "Front End Developer",
      company: "Arma Group Holding",
      location: "Ankara, Türkiye",
      period: "April 2023 - September 2023",
      achievements: [
        "Designed and launched a web and mobile-integrated mail and cloud storage platform for bul.com.tr, increasing customer retention by 25%.Built a responsive, pixel-perfect UI with Next.js and Tailwind CSS.",
        "Implemented animations and transitions, enhancing user engagement by 15%."
      ]
    },
    {
      title: "Front End Developer",
      company: "Ekip.co",
      location: "Pinedale, Wyoming, USA",
      period: "May 2022 - April 2023",
      achievements: [
        "Led frontend development for a fintech trading platform, achieving a 98% uptime.",
        "Built a real-time trading dashboard with Next.js, Tailwind CSS, and Chart.js, improving data rendering speed by 50%."
      ]
    },
    {
      title: "Front End Developer",
      company: "Appcent",
      location: "Istanbul, Türkiye",
      period: "June 2021 - May 2022",
      achievements: [
        "Produced scalable e-commerce platforms, admin panels, and dashboards, reducing page load times by 40%.",
        "Contributed to frontend solutions for Beymen, Allianz, Unilever, and Unishop, ensuring cross-platform compatibility."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Republic Of Turkey Ministry of Industry and Technology",
      location: "Ankara, Türkiye",
      period: "July 2020 - Aug 2020",
      achievements: [
       "During my internship as a Software Developer, I successfully tackled algorithmic questions and resolved various challenges related to web applications.",
       "I leveraged my problem-solving skills to provide efficient and effective solutions."
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 h-[800px] overflow-y-auto no-scrollbar">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 ">
        Professional Experience
      </h2>
      <div className="relative">
        <div className="relative space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-8 border-l-2 border-indigo-100 hover:border-indigo-500 transition-colors duration-300"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-white border-2 border-indigo-500"></div>
              <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-indigo-500 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500">
                      {exp.location}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-gray-600 text-sm">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
