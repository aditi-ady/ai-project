import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LightTheme from "./theme/LightTheme";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import BadgesPage from "./pages/BadgesPage";
import ProgressPage from "./pages/ProgressPage";
import ChatPage from "./pages/ChatPage";
import YouTubeSummary from "./pages/YouTubeSummary";
import ParentDashboard from "./pages/ParentDashboard";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: LightTheme.colors.background, minHeight: "100vh", width: "100%" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/badges" element={<BadgesPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/youtube" element={<YouTubeSummary />} />
          <Route path="/parent" element={<ParentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
