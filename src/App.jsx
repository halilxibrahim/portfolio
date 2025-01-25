import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col lg:flex-row bg-indigo-50 text-gray-900">
        <Sidebar />
        <main className="flex-1 p-4 lg:p-6 pt-16 lg:pt-6">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/work" element={<WorkSection />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
