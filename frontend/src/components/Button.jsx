import React from "react";
import PropTypes from "prop-types";
import LightTheme from "../theme/LightTheme";

const Button = ({ type, onClick, children, isLoading }) => {
  const styles = {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: "48px",
      padding: "0 24px",
      borderRadius: LightTheme.borderRadius.button,
      fontSize: LightTheme.typography.buttonText.fontSize,
      fontWeight: LightTheme.typography.buttonText.fontWeight,
      lineHeight: LightTheme.typography.buttonText.lineHeight,
      cursor: "pointer",
      transition: "all 0.2s ease",
      boxShadow: LightTheme.shadows.buttonShadow,
    },
    primary: {
      backgroundColor: LightTheme.colors.primaryBlue,
      color: "#FFFFFF",
      border: "none",
    },
    secondary: {
      backgroundColor: LightTheme.colors.background,
      color: LightTheme.colors.primaryBlue,
      border: `1px solid ${LightTheme.colors.primaryBlue}`,
    },
    hover: {
      transform: "translateY(-2px)",
    },
  };

  const buttonStyle = type === "primary" ? styles.primary : styles.secondary;

  return (
    <button
      style={{ ...styles.base, ...buttonStyle }}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  type: "primary",
  onClick: () => {},
  isLoading: false,
};

export default Button;
