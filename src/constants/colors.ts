// Elegant Earth Tones Palette
export const colors = {
  // Main colors
  primary: {
    light: '#3A3E5C',    // Lighter version of deep navy
    DEFAULT: '#2D3047',  // Deep navy
    dark: '#1F2132',     // Darker version of deep navy
  },
  
  secondary: {
    light: '#4CAF89',    // Lighter version of forest green
    DEFAULT: '#419D78',  // Forest green
    dark: '#368B67',     // Darker version of forest green
  },
  
  accent: {
    light: '#E5B876',    // Lighter version of warm gold
    DEFAULT: '#E0A458',  // Warm gold
    dark: '#D89039',     // Darker version of warm gold
  },
  
  // Background colors
  background: {
    light: '#FAFAFA',    // Off-white
    default: '#F8F8F8',  // Light off-white
    dark: '#F5F5F5',     // Slightly darker off-white
  },
  
  // Text colors
  text: {
    primary: '#2D3047',   // Deep navy for main text
    secondary: '#4A4D66', // Lighter navy for secondary text
    light: '#6E7187',     // Even lighter navy for subtle text
    white: '#FFFFFF',     // Pure white text
  },
  
  // Gradient combinations
  gradients: {
    primary: 'from-[#2D3047] to-[#419D78]',
    background: 'from-[#FAFAFA] to-[#F5F5F5]',
    accent: 'from-[#419D78] to-[#E0A458]',
    hover: 'from-[#3A3E5C] to-[#4CAF89]',
  },
  
  // States
  states: {
    hover: '#3A3E5C',
    active: '#1F2132',
    disabled: '#F5F5F5',
  },
  
  // Border colors
  border: {
    light: '#F5F5F5',
    DEFAULT: '#E0A458',
    dark: '#2D3047',
  },
  
  // Shadow colors with opacity
  shadows: {
    sm: '0 1px 2px rgba(45, 48, 71, 0.05)',
    DEFAULT: '0 1px 3px rgba(45, 48, 71, 0.1), 0 1px 2px rgba(45, 48, 71, 0.06)',
    md: '0 4px 6px rgba(45, 48, 71, 0.1), 0 2px 4px rgba(45, 48, 71, 0.06)',
    lg: '0 10px 15px rgba(45, 48, 71, 0.1), 0 4px 6px rgba(45, 48, 71, 0.05)',
  },
  
  // Status colors (for notifications, alerts, etc.)
  status: {
    success: '#419D78',
    error: '#E14B4B',
    warning: '#E0A458',
    info: '#2D3047',
  }
};

// Tailwind class combinations for common elements
export const colorClasses = {
  // Button variants
  button: {
    primary: `bg-gradient-to-r ${colors.gradients.primary} text-white hover:bg-gradient-to-r ${colors.gradients.hover}`,
    secondary: `bg-gradient-to-r ${colors.gradients.accent} text-white hover:bg-gradient-to-r ${colors.gradients.hover}`,
    outline: `border-2 border-[${colors.primary.DEFAULT}] text-[${colors.primary.DEFAULT}] hover:bg-[${colors.primary.light}] hover:text-white`,
  },
  
  // Text variants
  text: {
    heading: `text-[${colors.text.primary}]`,
    body: `text-[${colors.text.secondary}]`,
    light: `text-[${colors.text.light}]`,
  },
  
  // Card variants
  card: {
    default: `bg-white border border-[${colors.border.light}] shadow-sm`,
    hover: `hover:border-[${colors.border.dark}] hover:shadow-md transition-all duration-300`,
  },
  
  // Background variants
  background: {
    gradient: `bg-gradient-to-b ${colors.gradients.background}`,
    solid: `bg-[${colors.background.default}]`,
  },
  
  // Icon variants
  icon: {
    primary: `text-[${colors.primary.DEFAULT}]`,
    secondary: `text-[${colors.secondary.DEFAULT}]`,
    accent: `text-[${colors.accent.DEFAULT}]`,
  }
};