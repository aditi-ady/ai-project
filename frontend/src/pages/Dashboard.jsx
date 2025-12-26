import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LightTheme from "../theme/LightTheme";

const Dashboard = () => {
  const [answer, setAnswer] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setShowFeedback(true);
    setIsCorrect(Math.random() > 0.5); // Simulate AI evaluation
  };

  return (
    <div style={{ minHeight: "100vh", paddingBottom: "80px", background: `linear-gradient(180deg, ${LightTheme.colors.background} 0%, #E8F1FF 100%)` }}>
      {/* Header */}
      <div style={{ 
        padding: "32px 24px", 
        background: `linear-gradient(135deg, ${LightTheme.colors.primaryBlue} 0%, ${LightTheme.colors.accentCoral} 100%)`,
        boxShadow: "0px 4px 20px rgba(91, 124, 250, 0.3)",
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
          Welcome Back, Rahul! 👋
        </h2>
        <div style={{ display: "flex", gap: "16px", marginTop: "16px", flexWrap: "wrap" }}>
          <span style={{ 
            fontSize: "16px",
            fontWeight: "700",
            color: "#FFFFFF",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            padding: "10px 16px",
            borderRadius: "12px",
            backdropFilter: "blur(10px)"
          }}>
            📊 Level: Intermediate
          </span>
          <span style={{ 
            fontSize: "16px",
            fontWeight: "700",
            color: "#FFFFFF",
            background: "linear-gradient(135deg, #FF8A65 0%, #FFB84D 100%)",
            padding: "10px 16px",
            borderRadius: "12px",
            boxShadow: "0px 4px 15px rgba(255, 138, 101, 0.4)"
          }}>
            🔥 7 Day Streak
          </span>
        </div>
      </div>

      {/* Learning Section */}
      <div style={{ padding: "24px" }}>
        <div style={{ 
          backgroundColor: LightTheme.colors.card,
          padding: "32px",
          borderRadius: "24px",
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.1)",
          border: `3px solid ${LightTheme.colors.primaryBlue}20`
        }}>
          <h3 style={{ 
            fontSize: "24px",
            fontWeight: "800",
            color: LightTheme.colors.textPrimary,
            marginBottom: "8px"
          }}>
            🎯 Today's Challenge
          </h3>
          <p style={{ 
            ...LightTheme.typography.bodyText,
            color: LightTheme.colors.primaryBlue,
            fontWeight: "600",
            marginBottom: "24px"
          }}>
            Algebra • Question 15 of 20
          </p>
          <p style={{ 
            fontSize: "18px",
            color: LightTheme.colors.textPrimary,
            marginTop: "16px",
            padding: "20px",
            backgroundColor: LightTheme.colors.elevatedCard,
            borderRadius: LightTheme.borderRadius.card,
            borderLeft: `4px solid ${LightTheme.colors.primaryBlue}`,
            fontWeight: "500"
          }}>
            What is the value of <strong style={{ color: LightTheme.colors.primaryBlue }}>x</strong> in the equation: <strong>2x + 5 = 15?</strong>
          </p>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
            style={{
              width: "100%",
              minHeight: "100px",
              padding: "12px",
              marginTop: "16px",
              borderRadius: LightTheme.borderRadius.button,
              border: `1px solid ${LightTheme.colors.border}`,
              outline: "none",
              fontSize: LightTheme.typography.bodyText.fontSize,
            }}
          />

          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: LightTheme.colors.primaryBlue,
              color: "#FFFFFF",
              padding: "12px 24px",
              borderRadius: LightTheme.borderRadius.button,
              border: "none",
              cursor: "pointer",
              marginTop: "16px",
              width: "100%",
            }}
          >
            Submit Answer
          </button>

          {showFeedback && (
            <div style={{ marginTop: "16px", padding: "16px", backgroundColor: isCorrect ? "#E8F5E9" : "#FFEBEE", borderRadius: LightTheme.borderRadius.button }}>
              <p style={{ ...LightTheme.typography.bodyText, color: isCorrect ? "#2E7D32" : "#C62828", margin: 0 }}>
                {isCorrect ? "✅ Correct! Well done!" : "❌ Incorrect. Try again!"}
              </p>
            </div>
          )}

          <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
            <button style={{ ...LightTheme.typography.caption, color: LightTheme.colors.primaryBlue, backgroundColor: "transparent", border: "none", cursor: "pointer" }}>
              💡 Show Hint
            </button>
            <button style={{ ...LightTheme.typography.caption, color: LightTheme.colors.primaryBlue, backgroundColor: "transparent", border: "none", cursor: "pointer" }}>
              📖 Explain Step-by-Step
            </button>
            <button style={{ ...LightTheme.typography.caption, color: LightTheme.colors.primaryBlue, backgroundColor: "transparent", border: "none", cursor: "pointer" }}>
              🎤 Voice Input
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: LightTheme.colors.card, boxShadow: "0px -2px 6px rgba(0, 0, 0, 0.1)", display: "flex", justifyContent: "space-around", padding: "16px" }}>
        <button onClick={() => navigate("/dashboard")} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: LightTheme.colors.primaryBlue }}>
          <div style={{ fontSize: "24px" }}>🏠</div>
          <div style={{ ...LightTheme.typography.caption }}>Home</div>
        </button>
        <button onClick={() => navigate("/badges")} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: LightTheme.colors.textMuted }}>
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

export default Dashboard;
