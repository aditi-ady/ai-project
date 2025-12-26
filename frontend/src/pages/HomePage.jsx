import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LightTheme from "../theme/LightTheme";

const HomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div style={{ 
      minHeight: "100vh",
      background: `linear-gradient(135deg, ${LightTheme.colors.primaryBlue} 0%, ${LightTheme.colors.accentCoral} 50%, #FFB84D 100%)`,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px"
    }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
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
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
      `}</style>

      {/* Animated Background Elements */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        fontSize: "80px",
        animation: "float 4s ease-in-out infinite",
        opacity: 0.2
      }}>📚</div>
      <div style={{
        position: "absolute",
        top: "20%",
        right: "10%",
        fontSize: "60px",
        animation: "float 5s ease-in-out infinite 1s",
        opacity: 0.2
      }}>🎓</div>
      <div style={{
        position: "absolute",
        bottom: "15%",
        left: "15%",
        fontSize: "70px",
        animation: "float 6s ease-in-out infinite 2s",
        opacity: 0.2
      }}>✨</div>
      <div style={{
        position: "absolute",
        bottom: "25%",
        right: "8%",
        fontSize: "55px",
        animation: "float 4.5s ease-in-out infinite 1.5s",
        opacity: 0.2
      }}>🚀</div>

      <div style={{
        maxWidth: "1000px",
        width: "100%",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        opacity: fadeIn ? 1 : 0,
        transition: "opacity 0.8s ease"
      }}>
        {/* Logo Icon */}
        <div style={{
          width: "120px",
          height: "120px",
          margin: "0 auto 32px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FFFFFF 0%, #EEF2FA 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "60px",
          boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.3)",
          animation: "pulse 2s ease-in-out infinite"
        }}>
          🤖
        </div>

        {/* Main Heading */}
        <h1 style={{ 
          fontSize: "56px",
          fontWeight: "800",
          color: "#FFFFFF",
          margin: "0 0 24px 0",
          textShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          lineHeight: "1.2",
          animation: "slideInLeft 0.8s ease 0.2s backwards"
        }}>
          AI-Powered Learning<br/>
          <span style={{
            background: "linear-gradient(90deg, #FFE6DE 0%, #FFFFFF 50%, #FFE6DE 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 3s linear infinite"
          }}>
            Made Just for You! ✨
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{ 
          fontSize: "22px",
          color: "#FFFFFF",
          marginBottom: "48px",
          fontWeight: "500",
          textShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
          animation: "slideInRight 0.8s ease 0.4s backwards"
        }}>
          Personalized learning for Indian students • Adaptive AI Tutor<br/>
          Track Progress • Earn Badges • Learn Faster! 🏆
        </p>

        {/* Features Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginBottom: "48px",
          animation: "fadeInUp 0.8s ease 0.6s backwards"
        }}>
          {[
            { icon: "🎯", title: "Smart Practice", desc: "AI-generated questions" },
            { icon: "📊", title: "Track Progress", desc: "Real-time analytics" },
            { icon: "🎥", title: "YouTube Summary", desc: "Learn from videos" },
            { icon: "💬", title: "AI Tutor", desc: "24/7 help available" }
          ].map((feature, index) => (
            <div key={index} style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              padding: "24px",
              borderRadius: "20px",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0px 15px 40px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0px 10px 30px rgba(0, 0, 0, 0.2)";
            }}>
              <div style={{ fontSize: "40px", marginBottom: "12px" }}>{feature.icon}</div>
              <h3 style={{ 
                ...LightTheme.typography.headingL, 
                color: LightTheme.colors.textPrimary,
                margin: "0 0 8px 0",
                fontWeight: "700"
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                ...LightTheme.typography.caption, 
                color: LightTheme.colors.textSecondary,
                margin: 0
              }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button
            style={{
              background: "linear-gradient(135deg, #FFFFFF 0%, #EEF2FA 100%)",
              color: LightTheme.colors.primaryBlue,
              padding: "20px 48px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: "700",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s ease",
              animation: "pulse 2s ease-in-out infinite"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0px 15px 40px rgba(0, 0, 0, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0px 10px 30px rgba(0, 0, 0, 0.3)";
            }}
          >
            🚀 Start Learning Now - It's Free!
          </button>
        </Link>

        {/* Trust Indicators */}
        <div style={{
          marginTop: "40px",
          display: "flex",
          gap: "32px",
          justifyContent: "center",
          flexWrap: "wrap",
          animation: "fadeInUp 0.8s ease 0.8s backwards"
        }}>
          <div style={{ color: "#FFFFFF", fontWeight: "600" }}>
            ⭐ 4.9/5 Rating
          </div>
          <div style={{ color: "#FFFFFF", fontWeight: "600" }}>
            👥 10,000+ Students
          </div>
          <div style={{ color: "#FFFFFF", fontWeight: "600" }}>
            📚 50,000+ Questions
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
