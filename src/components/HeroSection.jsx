import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const navigate = useNavigate();
  const [showTechStack, setShowTechStack] = useState(false); // Changed to false

  useEffect(() => {
    const elements = document.querySelectorAll('.skill-tag, .slide-element');
    elements.forEach((element, index) => {
      element.style.animation = `slideIn 1s ease-out ${index * 0.4}s forwards`; // Faster animation
      element.style.opacity = '0';
      element.style.transform = 'translateX(-20px)';
    });
  }, []);

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
        
        <button
          onClick={() => setShowTechStack(!showTechStack)}
          className="mb-4 px-4 py-2 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-full hover:bg-emerald-100 transition-colors"
        >
          {showTechStack ? 'Hide Tech Stack' : 'Show Tech Stack'}
        </button>

        <div className={`flex flex-wrap justify-center gap-2 mt-4 transition-all duration-300 ${showTechStack ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          {/* Languages */}
          <span className="px-3 py-1 text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full hover:bg-emerald-100 transition-colors">
            JavaScript
          </span>
          <span className="px-3 py-1 text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full hover:bg-emerald-100 transition-colors">
            TypeScript
          </span>
          <span className="px-3 py-1 text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full hover:bg-emerald-100 transition-colors">
            Python
          </span>
          
          {/* Frontend */}
          <span className=" px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors">
            React.js
          </span>
          <span className=" px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors">
            Next.js
          </span>
          <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors">
            React Native
          </span>
          
          {/* Backend */}
          <span className=" px-3 py-1 text-xs font-medium text-purple-600 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors">
            Node.js
          </span>
          
          {/* APIs & Data */}
          <span className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-colors">
            REST/GraphQL
          </span>
          <span className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-colors">
            PostgreSQL
          </span>
          <span className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-colors">
            MongoDB
          </span>
          <span className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-colors">
            Firebase / Redis
          </span>

          
          {/* DevOps & AI */}
          <span className=" px-3 py-1 text-xs font-medium text-rose-600 bg-rose-50 rounded-full hover:bg-rose-100 transition-colors">
            Git
          </span>
          <span className=" px-3 py-1 text-xs font-medium text-rose-600 bg-rose-50 rounded-full hover:bg-rose-100 transition-colors">
            Docker
          </span>
          <span className="px-3 py-1 text-xs font-medium text-rose-600 bg-rose-50 rounded-full hover:bg-rose-100 transition-colors">
            AWS
          </span>
          <span className="px-3 py-1 text-xs font-medium text-rose-600 bg-rose-50 rounded-full hover:bg-rose-100 transition-colors">
            OpenAI / HuggingFace / Anthropic / DeepSeek, LLM APIs
          </span>
        </div>

        <h1 className="slide-element mt-4 lg:mt-8 text-xl sm:text-xl lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 leading-tight px-4 animate-pulse">
          Hi, I m Halil ibrahim! with 3+ years of experience, I specialize in creating modern web and mobile applications. 
        </h1>
        
        <p className="slide-element mt-4 lg:mt-6 text-base sm:text-lg text-gray-700 px-6 leading-relaxed 
          hover:scale-105 transition-all duration-300 
          backdrop-blur-lg bg-white/90 rounded-xl py-3 
          border-2 border-gray-200/50 shadow-lg 
          hover:border-emerald-500/50 hover:shadow-emerald-100">
          Passionate about building AI-powered applications and innovative solutions.
          AI/ML, Robotics & Aviation Enthusiast
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-8 w-full sm:w-auto px-4">
        <a href="mailto:halil.kamaci@icloud.com">
          <button className="w-full sm:w-auto px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Contact Me
          </button>
        </a>
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

// Add this style tag to your component or in your global CSS file
const styles = document.createElement('style');
styles.textContent = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes borderColorChange {
    0% { border-color: rgba(16, 185, 129, 0.5); }
    25% { border-color: rgba(37, 99, 235, 0.5); }
    50% { border-color: rgba(139, 92, 246, 0.5); }
    75% { border-color: rgba(239, 68, 68, 0.5); }
    100% { border-color: rgba(16, 185, 129, 0.5); }
  }
`;
document.head.appendChild(styles);

export default HeroSection;