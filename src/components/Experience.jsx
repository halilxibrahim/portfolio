const Experience = () => {
  const experiences = [
    
    {
      title: "Full Stack Developer",
      company: "Freelance",
      location: "Ankara, Türkiye",
      period: "Mar 2024 - Mar 2025",
      achievements: [
        "Developed Enterprise SaaS Applications using Next.js, React.js, React Native, Tailwind CSS, Node.js (Express.js), and MongoDB.",
        <span key="coderi"><span className="font-bold">For CoDeriApp Company:</span> Created a drag-and-drop calendar-based scheduling app, an SEO-optimized landing page with 40% faster loading speed, and a real-time booking system with secure authentication.</span>,
        <span key="kam"><span className="font-bold">For Kam Software Company:</span> Delivered full-stack web and mobile applications for clients including Dortgen VIP, Yavuz Industries, Selcup, and Yilmazlar Construction, achieving a 30% improvement in deployment speed and streamlined processes.</span>
      ]
    },
    {
      title: "Frontend Developer",
      company: "Arma Group Holding",
      location: "Ankara, Türkiye",
      period: "Apr 2023 - Mar 2024",
      achievements: [
        "Designed and launched bul.com.tr - a web and mobile-integrated mail and cloud storage platform using Next.js and Tailwind CSS, increasing customer retention by 25%.",
        "Developed a responsive, pixel-perfect UI with Next.js and Tailwind CSS, ensuring a seamless user experience across all devices.",
        "Implemented smooth animations and transitions, enhancing user engagement by 15%."
      ]
    },
    {
      title: "Frontend Developer",
      company: "Ekip.co",
      location: "Pinedale, Wyoming, USA",
      period: "May 2022 - Apr 2023",
      achievements: [
        "Developed a real-time trading dashboard using Next.js, Tailwind CSS, and Chart.js, ensuring 98% uptime for seamless financial transactions.",
        "Optimized data visualization and rendering, improving data processing speed by 50%.",
        "Designed a responsive and intuitive UI, enhancing user experience and engagement."
      ]
    },
    {
      title: "Frontend Developer",
      company: "Appcent",
      location: "Istanbul, Türkiye",
      period: "Jun 2021 - May 2022",
      achievements: [
        "Scalable E-Commerce & Admin Platforms using React.js, Next.js & Tailwind CSS",
        "Developed scalable e-commerce platforms, admin panels, and dashboards, reducing page load times by 40%.",
        "Built high-performance frontend solutions for Beymen, Allianz, Unilever, and Unishop, ensuring cross-platform compatibility.",
        "Optimized UI components for faster interactions and improved accessibility."
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
