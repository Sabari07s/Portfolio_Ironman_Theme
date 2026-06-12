import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF003C', // Iron Man Stark Red
      light: '#FF3366',
      dark: '#B3002A',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FFC107', // Iron Man Gold
      light: '#FFE082',
      dark: '#C79100',
      contrastText: '#000000',
    },
    info: {
      main: '#00F0FF', // Arc Reactor Cyan
      light: '#33F3FF',
      dark: '#00A8B3',
      contrastText: '#000000',
    },
    background: {
      default: '#05070f', // Deep dark metallic space
      paper: '#0b0f19', // Slightly lighter container dark
    },
    text: {
      primary: '#e2e8f0', // Crisp slate white
      secondary: '#94a3b8', // Slate gray
    },
    divider: 'rgba(0, 240, 255, 0.15)', // Cyan tint divider
  },
  typography: {
    fontFamily: '"Rajdhani", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Orbitron", "Rajdhani", sans-serif',
      fontWeight: 900,
      letterSpacing: '0.1em',
    },
    h2: {
      fontFamily: '"Orbitron", "Rajdhani", sans-serif',
      fontWeight: 800,
      letterSpacing: '0.05em',
    },
    h3: {
      fontFamily: '"Orbitron", "Rajdhani", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    h4: {
      fontFamily: '"Orbitron", "Rajdhani", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Orbitron", "Rajdhani", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Orbitron", "Rajdhani", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.95rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    button: {
      fontFamily: '"Orbitron", "Rajdhani", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.1em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Hard tech edges
          textTransform: 'uppercase',
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
        containedPrimary: {
          boxShadow: '0 0 10px rgba(255, 0, 60, 0.4)',
          '&:hover': {
            boxShadow: '0 0 20px rgba(255, 0, 60, 0.8)',
          },
        },
        outlinedInfo: {
          color: '#00F0FF',
          borderColor: 'rgba(0, 240, 255, 0.4)',
          boxShadow: 'inset 0 0 5px rgba(0, 240, 255, 0.1)',
          '&:hover': {
            borderColor: '#00F0FF',
            backgroundColor: 'rgba(0, 240, 255, 0.05)',
            boxShadow: '0 0 15px rgba(0, 240, 255, 0.5), inset 0 0 10px rgba(0, 240, 255, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#0a0d1a',
          border: '1px solid rgba(0, 240, 255, 0.15)',
          borderRadius: '4px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          '&:hover': {
            borderColor: '#00F0FF',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
