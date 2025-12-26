import React from "react";
import { useNavigate } from "react-router-dom";
import LightTheme from "../theme/LightTheme";

const ProgressPage = () => {
  const navigate = useNavigate();

  const topicMastery = [
    { topic: "Algebra", progress: 85 },
    { topic: "Geometry", progress: 60 },
    { topic: "Fractions", progress: 45 },
    { topic: "Word Problems", progress: 70 },
  ];

  return (
    <div style={{ minHeight: "100vh", paddingBottom: "80px", background: `linear-gradient(180deg, ${LightTheme.colors.background} 0%, #E0F7FA 100%)` }}>
      {/* Header */}
      <div style={{ 
        padding: "32px 24px",
        background: `linear-gradient(135deg, #4DD0E1 0%, ${LightTheme.colors.primaryBlue} 100%)`,
        boxShadow: "0px 4px 20px rgba(77, 208, 225, 0.3)",
        position: "relative"
      }}>
        {/* Logout Button */}
        <button
          onClick={() => navigate("/")}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            color: "#FFFFFF",
            padding: "10px 20px",
            borderRadius: "12px",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "700",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.3)";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "translateY(0)";
          }}
        >
          🚪 Logout
        </button>

        <h2 style={{ 
          fontSize: "32px",
          fontWeight: "800",
          color: "#FFFFFF",
          margin: 0,
          textShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)"
        }}>
          Your Progress 📊
        </h2>
        <p style={{ 
          fontSize: "18px",
          color: "#FFFFFF",
          marginTop: "8px",
          fontWeight: "600"
        }}>
          Track your amazing learning journey!
        </p>
      </div>

      <div style={{ padding: "24px" }}>
        {/* Overall Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px", marginBottom: "24px" }}>
          <div style={{ 
            background: `linear-gradient(135deg, ${LightTheme.colors.primaryBlue} 0%, #4DD0E1 100%)`,
            padding: "24px",
            borderRadius: "20px",
            boxShadow: "0px 8px 25px rgba(91, 124, 250, 0.3)",
            textAlign: "center",
            color: "#FFFFFF"
          }}>
            <h3 style={{ fontSize: "48px", fontWeight: "800", margin: 0 }}>247</h3>
            <p style={{ fontSize: "16px", marginTop: "8px", fontWeight: "600" }}>Questions Solved</p>
          </div>
          <div style={{ 
            background: `linear-gradient(135deg, ${LightTheme.colors.accentCoral} 0%, #FF8A80 100%)`,
            padding: "24px",
            borderRadius: "20px",
            boxShadow: "0px 8px 25px rgba(255, 138, 128, 0.3)",
            textAlign: "center",
            color: "#FFFFFF"
          }}>
            <h3 style={{ fontSize: "48px", fontWeight: "800", margin: 0 }}>78%</h3>
            <p style={{ fontSize: "16px", marginTop: "8px", fontWeight: "600" }}>Accuracy</p>
          </div>
          <div style={{ 
            background: `linear-gradient(135deg, ${LightTheme.colors.primaryBlue} 0%, #4DD0E1 100%)`,
            padding: "24px",
            borderRadius: "20px",
            boxShadow: "0px 8px 25px rgba(91, 124, 250, 0.3)",
            textAlign: "center",
            color: "#FFFFFF"
          }}>
            <h3 style={{ fontSize: "48px", fontWeight: "800", margin: 0 }}>12h</h3>
            <p style={{ fontSize: "16px", marginTop: "8px", fontWeight: "600" }}>Study Time</p>
          </div>
        </div>

        {/* Accuracy Chart Placeholder */}
        <div style={{ backgroundColor: LightTheme.colors.card, padding: "24px", borderRadius: LightTheme.borderRadius.card, boxShadow: LightTheme.shadows.cardShadow, marginBottom: "24px" }}>
          <h3 style={{ ...LightTheme.typography.headingL, color: LightTheme.colors.textPrimary }}>
            Accuracy Over Time
          </h3>
          <div style={{ height: "200px", backgroundColor: LightTheme.colors.elevatedCard, borderRadius: LightTheme.borderRadius.button, marginTop: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ ...LightTheme.typography.bodyText, color: LightTheme.colors.textMuted }}>
              📈 Chart will be rendered here
            </p>
          </div>
        </div>

        {/* Topic-wise Mastery */}
        <div style={{ backgroundColor: LightTheme.colors.card, padding: "24px", borderRadius: LightTheme.borderRadius.card, boxShadow: LightTheme.shadows.cardShadow, marginBottom: "24px" }}>
          <h3 style={{ ...LightTheme.typography.headingL, color: LightTheme.colors.textPrimary }}>
            Topic-wise Mastery
          </h3>
          {topicMastery.map((item, index) => (
            <div key={index} style={{ marginTop: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ ...LightTheme.typography.bodyText, color: LightTheme.colors.textSecondary }}>{item.topic}</span>
                <span style={{ ...LightTheme.typography.bodyText, color: LightTheme.colors.primaryBlue }}>{item.progress}%</span>
              </div>
              <div style={{ height: "12px", backgroundColor: LightTheme.colors.elevatedCard, borderRadius: "6px", overflow: "hidden" }}>
                <div style={{ width: `${item.progress}%`, height: "100%", backgroundColor: item.progress < 50 ? LightTheme.colors.accentCoral : LightTheme.colors.primaryBlue, transition: "width 0.5s ease" }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Insights */}
        <div style={{ backgroundColor: LightTheme.colors.softHighlight, padding: "20px", borderRadius: LightTheme.borderRadius.card, border: `1px solid ${LightTheme.colors.accentCoral}` }}>
          <h3 style={{ ...LightTheme.typography.headingL, color: LightTheme.colors.textPrimary }}>
            AI Insights 🤖
          </h3>
          <ul style={{ ...LightTheme.typography.bodyText, color: LightTheme.colors.textSecondary, marginTop: "12px", paddingLeft: "20px" }}>
            <li>You're weak in fractions due to LCM confusion</li>
            <li>Best learning time: 6 PM - 8 PM</li>
            <li>You learn faster with visual examples</li>
          </ul>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: LightTheme.colors.card, boxShadow: "0px -2px 6px rgba(0, 0, 0, 0.1)", display: "flex", justifyContent: "space-around", padding: "16px" }}>
        <button onClick={() => navigate("/dashboard")} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: LightTheme.colors.textMuted }}>
          <div style={{ fontSize: "24px" }}>🏠</div>
          <div style={{ ...LightTheme.typography.caption }}>Home</div>
        </button>
        <button onClick={() => navigate("/badges")} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: LightTheme.colors.textMuted }}>
          <div style={{ fontSize: "24px" }}>🏅</div>
          <div style={{ ...LightTheme.typography.caption }}>Badges</div>
        </button>
        <button onClick={() => navigate("/progress")} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: LightTheme.colors.primaryBlue }}>
          <div style={{ fontSize: "24px" }}>📊</div>
          <div style={{ ...LightTheme.typography.caption }}>Progress</div>
        </button>
        <button onClick={() => navigate("/youtube")} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: LightTheme.colors.textMuted }}>
          <div style={{ fontSize: "24px" }}>🎥</div>
          <div style={{ ...LightTheme.typography.caption }}>YouTube</div>
        </button>
        <button onClick={() => navigate("/chat")} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: LightTheme.colors.textMuted }}>
          <div style={{ fontSize: "24px" }}>💬</div>
          <div style={{ ...LightTheme.typography.caption }}>AI Chat</div>
        </button>
      </div>
    </div>
  );
};

export default ProgressPage;
