import { motion } from 'framer-motion';
import { image } from 'framer-motion/client';
import { useState } from 'react';

const WorkSection = () => {
  const [viewMode, setViewMode] = useState('web'); // 'web' or 'mobile'

  const webProjects = [
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
      image: "https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/profileItems/8wrjlVDUCib3EgtxdbQ5xyEBsm12/newProfileItem/cd217358-0878-4118-8a50-0835dc95ce42.jpg?_a=DATAdtAAZAA0",
      link: "#"
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description for Project 4",
      image: "https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/profileItems/8wrjlVDUCib3EgtxdbQ5xyEBsm12/newProfileItem/8412c1b9-d030-482d-a6a9-53c4c622712b.jpg?_a=DATAdtAAZAA0",
      link: "#"
    },
    {
      id: 5,
      title: "Project 5",
      description: "Description for Project 5",
      image: "https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/profileItems/8wrjlVDUCib3EgtxdbQ5xyEBsm12/newProfileItem/95559ec8-c422-4575-ac22-8a78f5c1fe61.jpg?_a=DATAdtAAZAA0",
      link: "#"
    },
    {
      id: 6,
      title: "Project 6",
      description: "Description for Project 6",
      image: "https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/profileItems/8wrjlVDUCib3EgtxdbQ5xyEBsm12/newProfileItem/8499377d-b091-4022-b711-a93bc225a244.png?_a=DATAdtAAZAA0",
      link: "#"
    },
    {
      id: 7,
      title: "Project 7",
      description: "Description for Project 7",
      image: "https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/profileItems/8wrjlVDUCib3EgtxdbQ5xyEBsm12/newProfileItem/30fdf49d-d621-4b26-9558-decf1c226e67.jpg?_a=DATAdtAAZAA0",
      link: "#"
    },
    {
      id: 7,
      title: "Project 7",
      description: "Description for Project 7",
      image:"https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/profileItems/8wrjlVDUCib3EgtxdbQ5xyEBsm12/newProfileItem/d546b14c-ddf9-403a-8724-e9c31151bc2a.png?_a=DATAdtAAZAA0",
      link: "#"
    }
  ];
  const mobileProjects = [
    {
      id: 8,
      title: "Project 8",
      description: "Description for Project 8",
      image: "https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/profileItems/8wrjlVDUCib3EgtxdbQ5xyEBsm12/newProfileItem/6ed5f845-d960-4d69-9e14-dc563b95122b.png?_a=DATAdtAAZAA0",
      link: "#"
    },
    {
      id: 9,
      title: "Project 9",
      description: "Description for Project 8",
      image: "https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/profileItems/8wrjlVDUCib3EgtxdbQ5xyEBsm12/wmlSnBunqwWZwHyGdRyN/62efbb32-4389-401f-a363-d693ce6eef69.png?_a=DATAdtAAZAA0",
      link: "#"
    },
    {
      id: 10,
      title: "Project 9",
      description: "Description for Project 8",
      image:"https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/profileItems/8wrjlVDUCib3EgtxdbQ5xyEBsm12/newProfileItem/3d3d7490-99fb-4f17-a343-2a9150bb7b0f.png?_a=DATAdtAAZAA0",
      link: "#"
    },
    {
      id: 11,
      title: "Project 9",
      description: "Description for Project 8",
      image:"https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/profileItems/8wrjlVDUCib3EgtxdbQ5xyEBsm12/newProfileItem/15671d3d-7e03-471e-af03-6066a3cdd043.png?_a=DATAdtAAZAA0",
      link: "#"
    }
  ];
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="p-4 sm:p-6 h-screen overflow-hidden">
      <div className="flex items-center justify-between mb-4 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">My Work</h2>
        <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setViewMode('web')}
            className={`px-4 py-2 rounded-md transition-all ${
              viewMode === 'web'
                ? 'bg-white shadow-md text-indigo-600'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setViewMode('mobile')}
            className={`px-4 py-2 rounded-md transition-all ${
              viewMode === 'mobile'
                ? 'bg-white shadow-md text-indigo-600'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Mobile
          </button>
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-130px)] pr-2 sm:pr-4">
        <motion.div
          className={`grid gap-4 sm:gap-6 ${
            viewMode === 'mobile'
              ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
          variants={container}
          initial="hidden"
          animate="visible"
          key={viewMode} // Add this to force re-render on viewMode change
        >
          {(viewMode === 'web' ? webProjects : mobileProjects).map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
              style={{
                willChange: 'transform',
              }}
            >
              <div className="flex flex-col h-full">
                <div className={`w-full relative ${
                  viewMode === 'mobile'
                    ? 'h-64 sm:h-72'
                    : 'h-40 sm:h-48'
                }`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`absolute inset-0 w-full h-full object-cover ${
                      viewMode === 'mobile' ? 'object-top' : 'object-center'
                    }`}
                    loading="lazy"
                  />
                </div>
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
