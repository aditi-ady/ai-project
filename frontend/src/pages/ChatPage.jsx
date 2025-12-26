import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LightTheme from "../theme/LightTheme";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "ai", text: "Hi! I'm your AI tutor. How can I help you today?" },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: "student", text: inputText }]);
      setInputText("");
      setIsTyping(true);

      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: prev.length + 1, sender: "ai", text: "That's a great question! Let me explain..." },
        ]);
        setIsTyping(false);
      }, 2000);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", paddingBottom: "80px", background: `linear-gradient(180deg, ${LightTheme.colors.background} 0%, #F3E5F5 100%)` }}>
      {/* Header */}
      <div style={{ 
        padding: "32px 24px",
        background: `linear-gradient(135deg, #9C27B0 0%, ${LightTheme.colors.primaryBlue} 100%)`,
        boxShadow: "0px 4px 20px rgba(156, 39, 176, 0.3)",
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
          AI Tutor 🤖
        </h2>
        <p style={{ 
          fontSize: "18px",
          color: "#FFFFFF",
          marginTop: "8px",
          fontWeight: "600"
        }}>
          Ask me anything - I'm here to help!
        </p>
      </div>

      {/* Chat Messages */}
      <div style={{ flex: 1, padding: "24px", overflowY: "auto" }}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              display: "flex",
              justifyContent: message.sender === "student" ? "flex-end" : "flex-start",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                padding: "16px",
                borderRadius: LightTheme.borderRadius.card,
                backgroundColor: message.sender === "student" ? LightTheme.colors.primaryBlue : LightTheme.colors.elevatedCard,
                color: message.sender === "student" ? "#FFFFFF" : LightTheme.colors.textPrimary,
                boxShadow: LightTheme.shadows.cardShadow,
              }}
            >
              <p style={{ ...LightTheme.typography.bodyText, margin: 0 }}>{message.text}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "16px" }}>
            <div
              style={{
                padding: "16px",
                borderRadius: LightTheme.borderRadius.card,
                backgroundColor: LightTheme.colors.elevatedCard,
                boxShadow: LightTheme.shadows.cardShadow,
              }}
            >
              <p style={{ ...LightTheme.typography.bodyText, color: LightTheme.colors.textMuted, margin: 0 }}>
                AI is thinking...
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div style={{ padding: "16px", backgroundColor: LightTheme.colors.card, boxShadow: "0px -2px 6px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your question here..."
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: LightTheme.borderRadius.button,
              border: `1px solid ${LightTheme.colors.border}`,
              outline: "none",
              fontSize: LightTheme.typography.bodyText.fontSize,
            }}
          />
          <button
            onClick={handleSend}
            style={{
              backgroundColor: LightTheme.colors.primaryBlue,
              color: "#FFFFFF",
              padding: "12px 20px",
              borderRadius: LightTheme.borderRadius.button,
              border: "none",
              cursor: "pointer",
            }}
          >
            Send
          </button>
          <button
            style={{
              backgroundColor: LightTheme.colors.accentCoral,
              color: "#FFFFFF",
              padding: "12px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              width: "48px",
              height: "48px",
            }}
          >
            🎤
          </button>
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
        <button onClick={() => navigate("/progress")} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: LightTheme.colors.textMuted }}>
          <div style={{ fontSize: "24px" }}>📊</div>
          <div style={{ ...LightTheme.typography.caption }}>Progress</div>
        </button>
        <button onClick={() => navigate("/youtube")} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: LightTheme.colors.textMuted }}>
          <div style={{ fontSize: "24px" }}>🎥</div>
          <div style={{ ...LightTheme.typography.caption }}>YouTube</div>
        </button>
        <button onClick={() => navigate("/chat")} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: LightTheme.colors.primaryBlue }}>
          <div style={{ fontSize: "24px" }}>💬</div>
          <div style={{ ...LightTheme.typography.caption }}>AI Chat</div>
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
