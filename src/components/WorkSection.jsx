import { motion } from 'framer-motion';

const WorkSection = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description for Project 1",
      image: "https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/profileItems/8wrjlVDUCib3EgtxdbQ5xyEBsm12/newProfileItem/6b2303f5-70ce-4290-8c6e-28cb22dd2181.jpg?_a=DATAdtAAZAA0",
      link: "#"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description for Project 2",
      image: "https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/profileItems/8wrjlVDUCib3EgtxdbQ5xyEBsm12/newProfileItem/3e91f49f-d962-4e2b-98da-716d422ac0cb.png?_a=DATAdtAAZAA0",
      link: "#"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description for Project 3",
      image: "https://via.placeholder.com/300",
      link: "#"
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description for Project 4",
      image: "https://via.placeholder.com/300",
      link: "#"
    },
    {
      id: 5,
      title: "Project 5",
      description: "Description for Project 5",
      image: "https://via.placeholder.com/300",
      link: "#"
    },
    {
      id: 6,
      title: "Project 6",
      description: "Description for Project 6",
      image: "https://via.placeholder.com/300",
      link: "#"
    },
    {
      id: 7,
      title: "Project 7",
      description: "Description for Project 7",
      image: "https://via.placeholder.com/300",
      link: "#"
    },
    {
      id: 8,
      title: "Project 8",
      description: "Description for Project 8",
      image: "https://via.placeholder.com/300",
      link: "#"
    }
  ];

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="p-4 sm:p-6 h-screen overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">My Work</h2>
      <div className="overflow-y-auto h-[calc(100vh-130px)] pr-2 sm:pr-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
              style={{
                willChange: 'transform',
              }}
            >
              <div className="flex flex-col h-full">
                <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 object-cover" />
                <div className="p-3 sm:p-4 flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{project.description}</p>
                  <a href={project.link} className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">
                    View Project →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkSection;
