import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import CreatorLens from './pages/CreatorLens';
import EmotionalPacing from './pages/EmotionalPacing';
import CrisisVerification from './pages/CrisisVerification';
import Settings from './pages/Settings';
import RevenueCenter from './pages/RevenueCenter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected routes wrapped in Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        
        {/* Viewer Routes */}
        <Route path="/explore" element={<Layout><div className="p-8 text-white">Explore (Work in Progress)</div></Layout>} />
        <Route path="/dna" element={<Layout><div className="p-8 text-white">Feed DNA Visualization (Work in Progress)</div></Layout>} />
        <Route path="/pacing" element={<Layout><EmotionalPacing /></Layout>} />
        <Route path="/crisis" element={<Layout><CrisisVerification /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
        
        {/* Creator Routes */}
        <Route path="/profile" element={<Layout><CreatorLens /></Layout>} />
        <Route path="/revenue" element={<Layout><RevenueCenter /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
