const extraFonts = "Helvetica, Arial, sans-serif";

export const darkTheme = {
  maxWidth: "1440px",
  type: "dark",
  main: {
    background: "#121212", // Dark background for the main content
    hover: "#1E1E1E", // Slightly lighter for hover effects
    fonts: {
      primary: "#E0E0E0", // Light grey for primary text
      secondary: "#B0B0B0", // Slightly darker grey for secondary text
      special: "rgba(0, 168, 232)",
    },
    fontFamily: {
      light: `cyrLight, ${extraFonts}`,
      primary: `cyrRoman, ${extraFonts}`,
      med: `cyrMed, ${extraFonts}`,
      bold: `cyrBold, ${extraFonts}`,
    },
  },
  nav: {
    background: "rgba(15, 15, 15)",
    panelBackground: "rgba(45, 45, 45)",
    fonts: {
      primary: "#A0A0A0", // Grey for primary nav text
      secondary: "#00A8E8", // Light blue for secondary nav text (accent color)
    },
    border: "rgba(25, 25, 25)",
    panelBorder: "rgba(55, 55, 55)",
    shadow: "rgba(0, 168, 232, 0.5)", // Blue shadow for a modern feel
  },
  portfolio: {
    background: "#1A1A1A", // Darker grey for portfolio background
    border: "#414141", // Subtle border to separate sections
    line: "#414141", // Medium grey for lines/dividers
    fontColor: {
      primary: "#FFFFFF", // White for primary text
      secondary: "rgba(255, 255, 255, 0.64)", // Semi-transparent white for secondary text
    },
    buttons: {
      live: {
        background: "#00A8E8", // Blue for live button background (accent color)
        color: "#FFFFFF", // White for button text
      },
      border: "1px solid #00A8E8", // Blue border for buttons (accent color)
    },
  },
  about: {
    filter: "initial",
  },
  footer: {
    clipboard: {
      background: "rgba(15, 15, 15)",
      border: "rgba(55, 55, 55)",
      filter: "invert(1)", 
    },
    underline: "rgba(0, 200, 235)",
  },
};

export const lightTheme = {
  maxWidth: "1440px",
  type: "light",
  main: {
    background: "#FAFAFA", // Very light grey, nearly white background
    hover: "#F0F0F0", // Slightly darker for hover effects
    fonts: {
      primary: "#333333", // Dark grey for primary text
      secondary: "#777777", // Slightly lighter grey for secondary text
      special: "rgba(255, 99, 88)",
    },
    fontFamily: {
      light: `cyrLight, ${extraFonts}`,
      primary: `cyrRoman, ${extraFonts}`,
      med: `cyrMed, ${extraFonts}`,
      bold: `cyrBold, ${extraFonts}`,
    },
  },
  nav: {
    background: "rgba(18, 18, 18)",
    panelBackground: "rgba(45, 45, 45)",
    fonts: {
      primary: "white",
      secondary: "rgba(255, 255, 255, 0.64)",
    },
    border: "rgba(10, 10, 10)",
    panelBorder: "rgba(35, 35, 35)",
    shadow: "rgba(0, 0, 0, 0.8)",
  },
  portfolio: {
    background: "#FFFFFF", // Pure white for portfolio background
    border: "#E0E0E0", // Light grey border to define sections
    line: "#DDDDDD", // Light grey for lines/dividers
    fontColor: {
      primary: "#333333", // Dark grey for primary text
      secondary: "rgba(0, 0, 0, 0.64)", // Semi-transparent black for secondary text
      special: "rgba(0, 168, 232)",
    },
    buttons: {
      live: {
        background: "#FF7F50", // Coral for live button background (accent color)
        color: "#FFFFFF", // White for button text
      },
      border: "1px solid #FF7F50", // Coral border for buttons (accent color)
    },
  },
  about: {
    filter: "initial",
  },
  footer: {
    clipboard: {
      background: "#F5F5F4",
      border: "#E7E5E4",
      filter: "initial",
    },
    underline: "rgba(233, 96, 88)",
  },
};
