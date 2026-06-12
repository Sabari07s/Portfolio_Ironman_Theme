import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { 
  Box, 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  useScrollTrigger, 
  Fab,
  Menu,
  MenuItem,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TerminalIcon from '@mui/icons-material/Terminal';
import theme from './theme';
import HudOverlay from './components/HudOverlay';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import JarvisConsole from './components/JarvisConsole';

function App() {
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navPages = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleCloseNavMenu();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Cockpit HUD Scanlines and Graphics */}
      <HudOverlay />

      {/* Futuristic HUD AppBar Navigation */}
      <AppBar 
        position="sticky" 
        sx={{ 
          backgroundColor: 'rgba(5, 7, 15, 0.85)', 
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Desktop Brand Logo */}
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: '"Orbitron", sans-serif',
                fontWeight: 900,
                letterSpacing: '.2rem',
                color: '#00F0FF',
                textDecoration: 'none',
                textShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
                cursor: 'pointer',
              }}
              onClick={() => handleNavClick('home')}
            >
              STARK_CORP//
            </Typography>

            {/* Mobile Navigation Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="nav menu toggle"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: '#00F0FF' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                PaperProps={{
                  sx: {
                    backgroundColor: '#0b0f19',
                    border: '1px solid rgba(0, 240, 255, 0.25)',
                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.8)',
                    borderRadius: 0,
                  }
                }}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {navPages.map((page) => (
                  <MenuItem 
                    key={page.id} 
                    onClick={() => handleNavClick(page.id)}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(0, 240, 255, 0.1)',
                      }
                    }}
                  >
                    <Typography 
                      textAlign="center" 
                      sx={{ 
                        fontFamily: '"Orbitron", sans-serif', 
                        color: '#00F0FF',
                        fontSize: '0.85rem',
                      }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Mobile Brand Logo */}
            <Typography
              variant="h6"
              noWrap
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                fontFamily: '"Orbitron", sans-serif',
                fontWeight: 900,
                letterSpacing: '.2rem',
                color: '#00F0FF',
                textShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
              }}
            >
              STARK_CORP
            </Typography>

            {/* Desktop Navigation Links */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 2 }}>
              {navPages.map((page) => (
                <Button
                  key={page.id}
                  onClick={() => handleNavClick(page.id)}
                  sx={{
                    my: 2,
                    color: '#e2e8f0',
                    fontFamily: '"Orbitron", sans-serif',
                    fontSize: '0.8rem',
                    letterSpacing: '1px',
                    position: 'relative',
                    '&:hover': {
                      color: '#00F0FF',
                      backgroundColor: 'transparent',
                      '&::after': {
                        width: '100%',
                      }
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 8,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      backgroundColor: '#00F0FF',
                      transition: 'width 0.3s ease',
                    }
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Page Layout Sections */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Box>

      {/* Footer copyright */}
      <Box 
        sx={{ 
          py: 4, 
          textAlign: 'center', 
          backgroundColor: '#03050a', 
          borderTop: '1px solid rgba(0, 240, 255, 0.1)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: '"Share Tech Mono", monospace' }}>
          © {new Date().getFullYear()} STARK SYSTEMS // ENGINEERED BY SABARI MANIKANDAN E
        </Typography>
      </Box>

      {/* J.A.R.V.I.S. Simulated Terminal Console Toggle & Floating Drawer */}
      <Fab
        color="primary"
        aria-label="jarvis command uplink"
        onClick={() => setConsoleOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          zIndex: 1000,
          backgroundColor: '#FF003C',
          boxShadow: '0 0 15px rgba(255, 0, 60, 0.4)',
          '&:hover': {
            backgroundColor: '#FF3366',
            boxShadow: '0 0 25px rgba(255, 0, 60, 0.7)',
          }
        }}
      >
        <TerminalIcon />
      </Fab>

      <Drawer
        anchor="bottom"
        open={consoleOpen}
        onClose={() => setConsoleOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            p: 2,
          }
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
          {/* Close trigger overlaying the console drawer */}
          <Button 
            variant="contained" 
            color="primary" 
            size="small"
            onClick={() => setConsoleOpen(false)}
            sx={{
              position: 'absolute',
              top: -15,
              zIndex: 1010,
              fontFamily: '"Share Tech Mono", monospace',
              fontSize: '0.75rem',
            }}
          >
            DISCONNECT PROTOCOL
          </Button>
          <JarvisConsole />
        </Box>
      </Drawer>
    </ThemeProvider>
  );
}

export default App;
