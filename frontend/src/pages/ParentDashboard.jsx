import React from "react";
import { useNavigate } from "react-router-dom";
import LightTheme from "../theme/LightTheme";

const ParentDashboard = () => {
  const navigate = useNavigate();

  const weeklyProgress = [
    { day: "Mon", questions: 12, accuracy: 85 },
    { day: "Tue", questions: 15, accuracy: 78 },
    { day: "Wed", questions: 10, accuracy: 90 },
    { day: "Thu", questions: 18, accuracy: 72 },
    { day: "Fri", questions: 14, accuracy: 88 },
    { day: "Sat", questions: 20, accuracy: 95 },
    { day: "Sun", questions: 16, accuracy: 82 }
  ];

  const weakAreas = [
    { topic: "Fractions", reason: "Struggling with LCM concepts", priority: "high" },
    { topic: "Word Problems", reason: "Needs more practice", priority: "medium" },
    { topic: "Geometry", reason: "Angle calculations", priority: "medium" }
  ];

  return (
    <div style={{ minHeight: "100vh", paddingBottom: "24px" }}>
      {/* Header */}
      <div style={{ 
        padding: "24px", 
        backgroundColor: LightTheme.colors.card, 
        boxShadow: LightTheme.shadows.cardShadow, 
        marginBottom: "24px",
        position: "relative"
      }}>
        {/* Logout Button */}
        <button
          onClick={() => navigate("/")}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            background: `linear-gradient(135deg, ${LightTheme.colors.primaryBlue}, ${LightTheme.colors.accentCoral})`,
            color: "#FFFFFF",
            padding: "10px 20px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "700",
            transition: "all 0.3s ease",
            boxShadow: "0px 4px 15px rgba(91, 124, 250, 0.3)"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0px 6px 20px rgba(91, 124, 250, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0px 4px 15px rgba(91, 124, 250, 0.3)";
          }}
        >
          🚪 Logout
        </button>

        <h2 style={{ ...LightTheme.typography.headingL, color: LightTheme.colors.textPrimary, margin: 0 }}>
          Parent Dashboard 👨‍👩‍👧
        </h2>
        <p style={{ ...LightTheme.typography.bodyText, color: LightTheme.colors.textSecondary, marginTop: "8px" }}>
          Track your child's learning progress
        </p>
      </div>

      <div style={{ padding: "24px" }}>
        {/* Student Info */}
        <div style={{ backgroundColor: LightTheme.colors.card, padding: "24px", borderRadius: LightTheme.borderRadius.card, boxShadow: LightTheme.shadows.cardShadow, marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: LightTheme.colors.primaryBlue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px" }}>
              👦
            </div>
            <div>
              <h3 style={{ ...LightTheme.typography.headingL, color: LightTheme.colors.textPrimary, margin: 0 }}>
                Rahul Sharma
              </h3>
              <p style={{ ...LightTheme.typography.caption, color: LightTheme.colors.textSecondary, marginTop: "4px" }}>
                Class 10 • Mathematics
              </p>
            </div>
          </div>
        </div>

        {/* Weekly Summary */}
        <div style={{ backgroundColor: LightTheme.colors.card, padding: "24px", borderRadius: LightTheme.borderRadius.card, boxShadow: LightTheme.shadows.cardShadow, marginBottom: "24px" }}>
          <h3 style={{ ...LightTheme.typography.headingL, color: LightTheme.colors.textPrimary, marginBottom: "16px" }}>
            📅 This Week's Summary
          </h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "12px", marginBottom: "24px" }}>
            {weeklyProgress.map((day, index) => (
              <div key={index} style={{ backgroundColor: LightTheme.colors.elevatedCard, padding: "16px", borderRadius: LightTheme.borderRadius.button, textAlign: "center" }}>
                <p style={{ ...LightTheme.typography.caption, color: LightTheme.colors.textMuted, marginBottom: "8px" }}>{day.day}</p>
                <p style={{ ...LightTheme.typography.bodyText, color: LightTheme.colors.primaryBlue, fontWeight: "600", marginBottom: "4px" }}>{day.questions}</p>
                <p style={{ ...LightTheme.typography.caption, color: LightTheme.colors.textSecondary }}>{day.accuracy}%</p>
              </div>
            ))}
          </div>

          {/* Overall Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px" }}>
            <div style={{ textAlign: "center" }}>
              <h4 style={{ ...LightTheme.typography.headingXL, color: LightTheme.colors.primaryBlue, margin: 0 }}>105</h4>
              <p style={{ ...LightTheme.typography.caption, color: LightTheme.colors.textMuted, marginTop: "4px" }}>Total Questions</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4 style={{ ...LightTheme.typography.headingXL, color: LightTheme.colors.accentCoral, margin: 0 }}>84%</h4>
              <p style={{ ...LightTheme.typography.caption, color: LightTheme.colors.textMuted, marginTop: "4px" }}>Avg Accuracy</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4 style={{ ...LightTheme.typography.headingXL, color: LightTheme.colors.primaryBlue, margin: 0 }}>8.5h</h4>
              <p style={{ ...LightTheme.typography.caption, color: LightTheme.colors.textMuted, marginTop: "4px" }}>Study Time</p>
            </div>
          </div>
        </div>

        {/* Weak Areas */}
        <div style={{ backgroundColor: LightTheme.colors.card, padding: "24px", borderRadius: LightTheme.borderRadius.card, boxShadow: LightTheme.shadows.cardShadow, marginBottom: "24px" }}>
          <h3 style={{ ...LightTheme.typography.headingL, color: LightTheme.colors.textPrimary, marginBottom: "16px" }}>
            ⚠️ Areas Needing Attention
          </h3>
          {weakAreas.map((area, index) => (
            <div key={index} style={{ backgroundColor: area.priority === "high" ? LightTheme.colors.softHighlight : LightTheme.colors.elevatedCard, padding: "16px", borderRadius: LightTheme.borderRadius.button, marginBottom: "12px", border: area.priority === "high" ? `1px solid ${LightTheme.colors.accentCoral}` : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h4 style={{ ...LightTheme.typography.bodyText, color: LightTheme.colors.textPrimary, fontWeight: "600", marginBottom: "4px" }}>
                    {area.topic}
                  </h4>
                  <p style={{ ...LightTheme.typography.caption, color: LightTheme.colors.textSecondary }}>
                    {area.reason}
                  </p>
                </div>
                <span style={{ ...LightTheme.typography.caption, color: area.priority === "high" ? LightTheme.colors.accentCoral : LightTheme.colors.textMuted, backgroundColor: LightTheme.colors.card, padding: "4px 12px", borderRadius: "12px" }}>
                  {area.priority === "high" ? "🔴 High" : "🟡 Medium"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* AI Recommendations */}
        <div style={{ backgroundColor: LightTheme.colors.primaryBlue, color: "#FFFFFF", padding: "24px", borderRadius: LightTheme.borderRadius.card, boxShadow: LightTheme.shadows.cardShadow }}>
          <h3 style={{ ...LightTheme.typography.headingL, margin: 0, marginBottom: "12px" }}>
            🤖 AI Teacher Recommendations
          </h3>
          <ul style={{ ...LightTheme.typography.bodyText, paddingLeft: "20px", lineHeight: "1.8" }}>
            <li>Focus on fraction basics and LCM concepts this week</li>
            <li>Best learning time: 6-8 PM (highest accuracy)</li>
            <li>Encourage more practice with word problems</li>
            <li>Consider visual learning aids for geometry</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;