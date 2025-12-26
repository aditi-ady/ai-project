import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LightTheme from "../theme/LightTheme";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      background: `linear-gradient(135deg, ${LightTheme.colors.primaryBlue} 0%, ${LightTheme.colors.accentCoral} 100%)`,
      padding: "20px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated Background Circles */}
      <div style={{
        position: "absolute",
        top: "-100px",
        left: "-100px",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.1)",
        animation: "float 6s ease-in-out infinite"
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "-150px",
        right: "-150px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.1)",
        animation: "float 8s ease-in-out infinite reverse"
      }}></div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <div
        style={{
          backgroundColor: LightTheme.colors.card,
          padding: "48px 40px",
          borderRadius: "24px",
          boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.3)",
          width: "100%",
          maxWidth: "420px",
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease",
          position: "relative",
          zIndex: 1
        }}
      >
        {/* Logo/Icon */}
        <div style={{ 
          textAlign: "center", 
          marginBottom: "32px",
          animation: "fadeInUp 0.8s ease"
        }}>
          <div style={{
            width: "80px",
            height: "80px",
            margin: "0 auto 20px",
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${LightTheme.colors.primaryBlue}, ${LightTheme.colors.accentCoral})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            boxShadow: LightTheme.shadows.cardShadow
          }}>
            🎓
          </div>
          <h2 style={{ 
            ...LightTheme.typography.headingXL, 
            color: LightTheme.colors.textPrimary,
            margin: 0,
            background: `linear-gradient(135deg, ${LightTheme.colors.primaryBlue}, ${LightTheme.colors.accentCoral})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Welcome Back!
          </h2>
          <p style={{ 
            ...LightTheme.typography.bodyText, 
            color: LightTheme.colors.textSecondary,
            marginTop: "8px"
          }}>
            Continue your learning journey
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "24px", animation: "slideIn 0.6s ease 0.2s backwards" }}>
            <label style={{ 
              ...LightTheme.typography.bodyText, 
              color: LightTheme.colors.textPrimary,
              fontWeight: "500",
              display: "block",
              marginBottom: "8px"
            }}>
              📧 Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: LightTheme.borderRadius.button,
                border: `2px solid ${LightTheme.colors.border}`,
                outline: "none",
                fontSize: LightTheme.typography.bodyText.fontSize,
                transition: "all 0.3s ease",
                backgroundColor: LightTheme.colors.background
              }}
              onFocus={(e) => e.target.style.borderColor = LightTheme.colors.primaryBlue}
              onBlur={(e) => e.target.style.borderColor = LightTheme.colors.border}
            />
          </div>

          <div style={{ marginBottom: "24px", animation: "slideIn 0.6s ease 0.4s backwards" }}>
            <label style={{ 
              ...LightTheme.typography.bodyText, 
              color: LightTheme.colors.textPrimary,
              fontWeight: "500",
              display: "block",
              marginBottom: "8px"
            }}>
              🔒 Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: LightTheme.borderRadius.button,
                border: `2px solid ${LightTheme.colors.border}`,
                outline: "none",
                fontSize: LightTheme.typography.bodyText.fontSize,
                transition: "all 0.3s ease",
                backgroundColor: LightTheme.colors.background
              }}
              onFocus={(e) => e.target.style.borderColor = LightTheme.colors.primaryBlue}
              onBlur={(e) => e.target.style.borderColor = LightTheme.colors.border}
            />
          </div>

          <button
            type="submit"
            style={{
              background: `linear-gradient(135deg, ${LightTheme.colors.primaryBlue}, ${LightTheme.colors.accentCoral})`,
              color: "#FFFFFF",
              padding: "16px 24px",
              borderRadius: LightTheme.borderRadius.button,
              border: "none",
              cursor: "pointer",
              width: "100%",
              fontSize: LightTheme.typography.buttonText.fontSize,
              fontWeight: "600",
              boxShadow: "0px 8px 20px rgba(91, 124, 250, 0.4)",
              transition: "all 0.3s ease",
              animation: "slideIn 0.6s ease 0.6s backwards"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0px 12px 30px rgba(91, 124, 250, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0px 8px 20px rgba(91, 124, 250, 0.4)";
            }}
          >
            🚀 Start Learning
          </button>
        </form>

        <p style={{ 
          ...LightTheme.typography.caption, 
          color: LightTheme.colors.textMuted,
          textAlign: "center",
          marginTop: "24px",
          animation: "fadeInUp 0.8s ease 0.8s backwards"
        }}>
          Don't have an account? <span style={{ color: LightTheme.colors.primaryBlue, cursor: "pointer", fontWeight: "600" }}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
