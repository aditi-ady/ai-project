import React from "react";
import { useNavigate } from "react-router-dom";
import LightTheme from "../theme/LightTheme";

const BadgesPage = () => {
  const navigate = useNavigate();

  const badges = [
    { id: 1, name: "First Step", icon: "🎯", unlocked: true },
    { id: 2, name: "7 Day Streak", icon: "🔥", unlocked: true },
    { id: 3, name: "Math Master", icon: "🧮", unlocked: false },
    { id: 4, name: "Quick Learner", icon: "⚡", unlocked: true },
    { id: 5, name: "100 Questions", icon: "💯", unlocked: false },
    { id: 6, name: "Perfect Score", icon: "⭐", unlocked: false },
  ];

  return (
    <div style={{ minHeight: "100vh", paddingBottom: "80px", background: `linear-gradient(180deg, ${LightTheme.colors.background} 0%, #FFF5F0 100%)` }}>
      {/* Header */}
      <div style={{ 
        padding: "32px 24px",
        background: `linear-gradient(135deg, #FFB84D 0%, ${LightTheme.colors.accentCoral} 100%)`,
        boxShadow: "0px 4px 20px rgba(255, 138, 101, 0.3)",
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
          Your Badges 🏅
        </h2>
        <p style={{ 
          fontSize: "18px",
          color: "#FFFFFF",
          marginTop: "8px",
          fontWeight: "600"
        }}>
          Keep learning to unlock more rewards!
        </p>
      </div>

      {/* Progress Card */}
      <div style={{ padding: "24px" }}>
        <div style={{ 
          background: `linear-gradient(135deg, ${LightTheme.colors.primaryBlue} 0%, ${LightTheme.colors.accentCoral} 100%)`,
          padding: "32px",
          borderRadius: "24px",
          boxShadow: "0px 8px 30px rgba(91, 124, 250, 0.3)",
          marginBottom: "24px",
          color: "#FFFFFF"
        }}>
          <h3 style={{ 
            fontSize: "24px",
            fontWeight: "800",
            margin: "0 0 16px 0"
          }}>
            🎯 Daily Goal Progress
          </h3>
          <div style={{ marginTop: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "16px", fontWeight: "600" }}>15 / 20 Questions</span>
              <span style={{ fontSize: "16px", fontWeight: "600" }}>75%</span>
            </div>
            <div style={{ height: "12px", backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: "6px", overflow: "hidden" }}>
              <div style={{ width: "75%", height: "100%", backgroundColor: "#FFFFFF", transition: "width 0.5s ease" }}></div>
            </div>
          </div>
        </div>

        {/* AI Motivation Card */}
        <div style={{ backgroundColor: LightTheme.colors.softHighlight, padding: "20px", borderRadius: LightTheme.borderRadius.card, marginBottom: "24px", border: `1px solid ${LightTheme.colors.accentCoral}` }}>
          <p style={{ ...LightTheme.typography.bodyText, color: LightTheme.colors.textPrimary, margin: 0 }}>
            💪 "You're doing great! Just 5 more questions to reach your daily goal. Keep it up!"
          </p>
        </div>

        {/* Badges Grid */}
        <h3 style={{ ...LightTheme.typography.headingL, color: LightTheme.colors.textPrimary, marginBottom: "16px" }}>
          All Badges
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "16px" }}>
          {badges.map((badge) => (
            <div
              key={badge.id}
              style={{
                backgroundColor: LightTheme.colors.card,
                padding: "24px",
                borderRadius: LightTheme.borderRadius.card,
                boxShadow: LightTheme.shadows.cardShadow,
                textAlign: "center",
                opacity: badge.unlocked ? 1 : 0.5,
                transform: badge.unlocked ? "scale(1)" : "scale(0.95)",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "12px" }}>{badge.icon}</div>
              <h4 style={{ ...LightTheme.typography.bodyText, color: LightTheme.colors.textPrimary, margin: 0 }}>
                {badge.name}
              </h4>
              {!badge.unlocked && (
                <p style={{ ...LightTheme.typography.caption, color: LightTheme.colors.textMuted, marginTop: "8px" }}>
                  🔒 Locked
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: LightTheme.colors.card, boxShadow: "0px -2px 6px rgba(0, 0, 0, 0.1)", display: "flex", justifyContent: "space-around", padding: "16px" }}>
        <button onClick={() => navigate("/dashboard")} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: LightTheme.colors.textMuted }}>
          <div style={{ fontSize: "24px" }}>🏠</div>
          <div style={{ ...LightTheme.typography.caption }}>Home</div>
        </button>
        <button onClick={() => navigate("/badges")} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: LightTheme.colors.primaryBlue }}>
          <div style={{ fontSize: "24px" }}>🏅</div>
          <div style={{ ...LightTheme.typography.caption }}>Badges</div>
        </button>
        <button onClick={() => navigate("/progress")} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: LightTheme.colors.textMuted }}>
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

export default BadgesPage;
