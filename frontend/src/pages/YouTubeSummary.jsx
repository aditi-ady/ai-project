import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LightTheme from "../theme/LightTheme";

const YouTubeSummary = () => {
  const [youtubeLink, setYoutubeLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const [language, setLanguage] = useState("english");
  const navigate = useNavigate();

  const handleSummarize = () => {
    if (youtubeLink.trim()) {
      setIsLoading(true);
      
      // Simulate AI processing
      setTimeout(() => {
        setSummary({
          title: "Introduction to Algebra - Class 10 Math",
          keyConcepts: [
            "Variables and Constants",
            "Linear Equations",
            "Quadratic Equations",
            "Factorization Methods"
          ],
          notes: "This video covers fundamental algebra concepts including solving equations, understanding variables, and applying algebraic methods to real-world problems.",
          questions: [
            "Solve for x: 3x + 7 = 22",
            "What is the difference between a variable and a constant?",
            "Factorize: x² + 5x + 6"
          ]
        });
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <div style={{ minHeight: "100vh", paddingBottom: "80px", background: `linear-gradient(180deg, ${LightTheme.colors.background} 0%, #FFE6E6 100%)` }}>
      {/* Header */}
      <div style={{ 
        padding: "32px 24px",
        background: `linear-gradient(135deg, #FF5252 0%, ${LightTheme.colors.accentCoral} 100%)`,
        boxShadow: "0px 4px 20px rgba(255, 82, 82, 0.3)",
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
          YouTube Video Summarizer 🎥
        </h2>
        <p style={{ 
          fontSize: "18px",
          color: "#FFFFFF",
          marginTop: "8px",
          fontWeight: "600"
        }}>
          Get AI-powered summaries & practice questions!
        </p>
      </div>

      <div style={{ padding: "24px" }}>
        {/* Language Toggle */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
          <button
            onClick={() => setLanguage("english")}
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              border: "none",
              backgroundColor: language === "english" ? LightTheme.colors.primaryBlue : LightTheme.colors.elevatedCard,
              color: language === "english" ? "#FFFFFF" : LightTheme.colors.textSecondary,
              cursor: "pointer",
              ...LightTheme.typography.caption
            }}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("hindi")}
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              border: "none",
              backgroundColor: language === "hindi" ? LightTheme.colors.primaryBlue : LightTheme.colors.elevatedCard,
              color: language === "hindi" ? "#FFFFFF" : LightTheme.colors.textSecondary,
              cursor: "pointer",
              ...LightTheme.typography.caption
            }}
          >
            हिंदी (Hindi)
          </button>
        </div>

        {/* Input Section */}
        <div style={{ backgroundColor: LightTheme.colors.card, padding: "24px", borderRadius: LightTheme.borderRadius.card, boxShadow: LightTheme.shadows.cardShadow, marginBottom: "24px" }}>
          <h3 style={{ ...LightTheme.typography.headingL, color: LightTheme.colors.textPrimary, marginBottom: "16px" }}>
            Paste YouTube Link
          </h3>
          <input
            type="text"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: LightTheme.borderRadius.button,
              border: `1px solid ${LightTheme.colors.border}`,
              outline: "none",
              fontSize: LightTheme.typography.bodyText.fontSize,
              marginBottom: "16px"
            }}
          />
          <button
            onClick={handleSummarize}
            disabled={isLoading || !youtubeLink.trim()}
            style={{
              backgroundColor: isLoading ? LightTheme.colors.textMuted : LightTheme.colors.primaryBlue,
              color: "#FFFFFF",
              padding: "12px 24px",
              borderRadius: LightTheme.borderRadius.button,
              border: "none",
              cursor: isLoading ? "not-allowed" : "pointer",
              width: "100%",
              ...LightTheme.typography.buttonText
            }}
          >
            {isLoading ? "🔄 AI is analyzing..." : "✨ Summarize with AI"}
          </button>
        </div>

        {/* Loading Animation */}
        {isLoading && (
          <div style={{ backgroundColor: LightTheme.colors.elevatedCard, padding: "40px", borderRadius: LightTheme.borderRadius.card, textAlign: "center", marginBottom: "24px" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🤖</div>
            <p style={{ ...LightTheme.typography.bodyText, color: LightTheme.colors.textMuted }}>
              AI is processing the video...
            </p>
          </div>
        )}

        {/* Summary Output */}
        {summary && !isLoading && (
          <>
            {/* Video Title */}
            <div style={{ backgroundColor: LightTheme.colors.card, padding: "20px", borderRadius: LightTheme.borderRadius.card, boxShadow: LightTheme.shadows.cardShadow, marginBottom: "16px" }}>
              <h3 style={{ ...LightTheme.typography.headingL, color: LightTheme.colors.textPrimary }}>
                📹 {summary.title}
              </h3>
            </div>

            {/* Key Concepts */}
            <div style={{ backgroundColor: LightTheme.colors.card, padding: "24px", borderRadius: LightTheme.borderRadius.card, boxShadow: LightTheme.shadows.cardShadow, marginBottom: "16px" }}>
              <h3 style={{ ...LightTheme.typography.headingL, color: LightTheme.colors.textPrimary, marginBottom: "16px" }}>
                🎯 Key Concepts
              </h3>
              <ul style={{ paddingLeft: "20px" }}>
                {summary.keyConcepts.map((concept, index) => (
                  <li key={index} style={{ ...LightTheme.typography.bodyText, color: LightTheme.colors.textSecondary, marginBottom: "8px" }}>
                    {concept}
                  </li>
                ))}
              </ul>
            </div>

            {/* Short Notes */}
            <div style={{ backgroundColor: LightTheme.colors.card, padding: "24px", borderRadius: LightTheme.borderRadius.card, boxShadow: LightTheme.shadows.cardShadow, marginBottom: "16px" }}>
              <h3 style={{ ...LightTheme.typography.headingL, color: LightTheme.colors.textPrimary, marginBottom: "16px" }}>
                📝 Summary Notes
              </h3>
              <p style={{ ...LightTheme.typography.bodyText, color: LightTheme.colors.textSecondary, lineHeight: "1.8" }}>
                {summary.notes}
              </p>
            </div>

            {/* Practice Questions */}
            <div style={{ backgroundColor: LightTheme.colors.softHighlight, padding: "24px", borderRadius: LightTheme.borderRadius.card, border: `1px solid ${LightTheme.colors.accentCoral}` }}>
              <h3 style={{ ...LightTheme.typography.headingL, color: LightTheme.colors.textPrimary, marginBottom: "16px" }}>
                ❓ AI-Generated Practice Questions
              </h3>
              {summary.questions.map((question, index) => (
                <div key={index} style={{ backgroundColor: LightTheme.colors.card, padding: "16px", borderRadius: LightTheme.borderRadius.button, marginBottom: "12px" }}>
                  <p style={{ ...LightTheme.typography.bodyText, color: LightTheme.colors.textPrimary }}>
                    {index + 1}. {question}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
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
        <button onClick={() => navigate("/progress")} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: LightTheme.colors.textMuted }}>
          <div style={{ fontSize: "24px" }}>📊</div>
          <div style={{ ...LightTheme.typography.caption }}>Progress</div>
        </button>
        <button onClick={() => navigate("/youtube")} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: LightTheme.colors.primaryBlue }}>
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

export default YouTubeSummary;