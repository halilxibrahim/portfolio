import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="container px-4 sm:px-6 lg:px-8 mx-auto mt-2 lg:mt-2 flex justify-center items-center min-h-[calc(100vh-2rem)]">
      <div className="max-w-2xl flex flex-col items-center text-center">
        <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gray-200 overflow-hidden mb-4 lg:mb-8">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D03AQFT3_2ciDLjJA/profile-displayphoto-shrink_800_800/B4DZN85RDIHoAc-/0/1732967207736?e=1743033600&v=beta&t=3sk_wsG_MQtNWw1m5Bd8cmhTfDKS-0TNglfQKfcxk_g"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        <span className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
          Software Developer
        </span>
        
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <span className="px-3 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer">
            JavaScript
          </span>
          <span className="px-3 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer">
            TypeScript
          </span>
          <span className="px-3 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer">
            React.js
          </span>
          <span className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer">
            React Native
          </span>
          <span className="px-3 py-1 text-xs font-medium text-emerald-600 bg-emerald-100 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer">
            Node.js
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-2">
          <span className="px-3 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer">
            🤖 AI/ML
          </span>
          <span className="px-3 py-1 text-xs font-medium text-amber-600 bg-amber-100 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer">
            Robotics
          </span>
          <span className="px-3 py-1 text-xs font-medium text-sky-600 bg-sky-100 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer">
            Aviation
          </span>
        </div>

        <h1 className="mt-4 lg:mt-8 text-xl sm:text-2xl lg:text-3xl font-bold leading-tight px-4">
          Hi, Im Halil Ibrahim! With 3+ years of experience, I specialize in creating modern web and mobile applications using JavaScript/TypeScript and Python. 
        </h1>
        
        <p className="mt-4 lg:mt-6 text-base sm:text-lg text-gray-600 px-4">
          Passionate about building AI-powered applications and innovative solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-8 w-full sm:w-auto px-4">
          <button className="w-full sm:w-auto px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Contact Me
          </button>
          <button 
            className="w-full sm:w-auto px-6 py-3 text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 mt-2 sm:mt-0"
            onClick={() => navigate('/work')}
          >
            My Work
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default HeroSection;