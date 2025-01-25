const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Stealth Startup",
      location: "Ankara, Türkiye",
      period: "September 2024 - January 2025",
      achievements: [
        "Managed the end-to-end development of a start-up product, requirements analysis, architecture design.",
        "Developed scalable and efficient solutions using React.js, Node.js, Django and MongoDB."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Kam Software",
      location: "Ankara, Türkiye",
      period: "September 2023 - September 2024",
      achievements: [
        "Led the development of 4 full-stack web and mobile projects using React.js, Next.js, React Native, Node.js, and Django, achieving a 30% improvement in deployment speed.",
        "Delivered high-quality websites for prominent clients, including Dortgen VIP, Yavuz Industries, Selcup, and Yilmazlar Construction."
      ]
    },
    {
      title: "Front End Developer",
      company: "Arma Group Holding",
      location: "Ankara, Türkiye",
      period: "April 2023 - September 2023",
      achievements: [
        "Developed and launched a web and mobile-integrated mail and cloud storage platform for bul.com.tr using Next.js and React Native.",
        "Designed and built a responsive web interface with Next.js and Tailwind CSS, delivering a pixel-perfect experience across all devices.",
        "Implemented modern UI components with custom animations and transitions to enhance user engagement and overall user experience."
      ]
    },
    {
      title: "Front End Developer",
      company: "Ekip.co",
      location: "Pinedale, Wyoming, USA",
      period: "May 2022 - April 2023",
      achievements: [
        "Led front-end development for a financial technology product and the ekip.co website.",
        "Designed a modern trading interface using Next.js, featuring real-time data visualization.",
        "Developed a responsive dashboard to display complex financial data with Tailwind CSS and Chart.js."
      ]
    },
    {
      title: "Front End Developer",
      company: "Appcent",
      location: "Istanbul, Türkiye",
      period: "June 2021 - May 2022",
      achievements: [
        "Extensive experience in JavaScript, TypeScript, React.js, Next.js, and React Native for modern web and mobile applications.",
        "Developed scalable e-commerce platforms, admin panels, and dashboards for data visualization.",
        "Contributed to frontend solutions for top brands like Beymen, Allianz, Unilever, and Unishop."
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
                      <span className="mr-2 mt-1.5">•</span>
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
