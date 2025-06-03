import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Students from './pages/Students';


const App = () => {
  return (
    
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            {/* Add more routes like Students, Payments, Feedback later */}
          </Routes>
        </main>
      </div>
  );
};

export default App;
