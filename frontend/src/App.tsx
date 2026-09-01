import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Explore from './pages/Explore';
import WhyAmISeeingThis from './pages/WhyAmISeeingThis';
import FeedDNA from './pages/FeedDNA';
import AyaAssistant from './pages/AyaAssistant';
import EmotionalPacing from './pages/EmotionalPacing';
import CrisisVerification from './pages/CrisisVerification';
import Settings from './pages/Settings';
import CreatorLens from './pages/CreatorLens';
import BrandMatches from './pages/BrandMatches';
import CampaignValuation from './pages/CampaignValuation';
import RevenueCenter from './pages/RevenueCenter';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Viewer Mode Routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/explore" element={<Layout><Explore /></Layout>} />
        <Route path="/why" element={<Layout><WhyAmISeeingThis /></Layout>} />
        <Route path="/dna" element={<Layout><FeedDNA /></Layout>} />
        <Route path="/aya" element={<Layout><AyaAssistant /></Layout>} />
        <Route path="/pacing" element={<Layout><EmotionalPacing /></Layout>} />
        <Route path="/crisis" element={<Layout><CrisisVerification /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
        
        {/* Creator Mode Routes */}
        <Route path="/creator" element={<Layout><CreatorLens /></Layout>} />
        <Route path="/profile" element={<Layout><CreatorLens /></Layout>} />
        <Route path="/brand-matches" element={<Layout><BrandMatches /></Layout>} />
        <Route path="/campaign-valuation" element={<Layout><CampaignValuation /></Layout>} />
        <Route path="/revenue" element={<Layout><RevenueCenter /></Layout>} />

        {/* Fallback */}
        <Route path="*" element={<Layout><Home /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
