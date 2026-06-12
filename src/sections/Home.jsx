import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import ArcReactor from '../components/ArcReactor';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const phrases = [
    "FULL STACK SOFTWARE ENGINEER",
    "ENTERPRISE ERP BUILDER",
    "PYTHON & DJANGO SPECIALIST",
    "REACT & ANGULAR ARCHITECT"
  ];

  useEffect(() => {
    if (charIndex < phrases[textIndex].length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + phrases[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 75);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setTypedText('');
        setTextIndex((prev) => (prev + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        pt: { xs: 8, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box
              className="hud-panel"
              sx={{
                p: { xs: 3, md: 5 },
                backgroundColor: 'rgba(11, 15, 25, 0.75)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                boxShadow: '0 0 25px rgba(0, 240, 255, 0.05)',
              }}
            >
              <Typography
                variant="caption"
                className="glow-text-cyan"
                sx={{
                  fontFamily: '"Share Tech Mono", monospace',
                  letterSpacing: '4px',
                  fontWeight: 'bold',
                  display: 'block',
                  mb: 1,
                }}
              >
                [ UPLINK SECURED: ACTIVE PROTOCOL ]
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  mb: 2,
                  textShadow: '0 0 10px rgba(226, 232, 240, 0.2)',
                }}
              >
                SABARI <Box component="span" sx={{ color: '#FF003C', textShadow: '0 0 10px rgba(255, 0, 60, 0.4)' }}>MANIKANDAN</Box>
              </Typography>

              <Box sx={{ minHeight: '40px', mb: 3 }}>
                <Typography
                  variant="h5"
                  className="typing-cursor"
                  sx={{
                    fontFamily: '"Share Tech Mono", monospace',
                    color: '#FFC107',
                    fontWeight: 'bold',
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                    textShadow: '0 0 5px rgba(255, 193, 7, 0.3)',
                  }}
                >
                  {typedText}
                </Typography>
              </Box>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '560px' }}>
                System diagnostic check loaded. Over 1.5+ years of experience engineering core ERP modules, relational double-entry ledger engines, batch-wise stock controls, and multi-tier RBAC configurations. Formulating next-gen software systems inside Stark industrial architecture.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="primary"
                  href="#about"
                  sx={{
                    px: 3,
                    py: 1.2,
                    fontSize: '0.85rem',
                  }}
                >
                  ENGAGE SYSTEMS
                </Button>
                <Button
                  variant="outlined"
                  color="info"
                  href="#contact"
                  sx={{
                    px: 3,
                    py: 1.2,
                    fontSize: '0.85rem',
                  }}
                >
                  TRANSMIT UPLINK
                </Button>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                animation: 'float 6s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-15px)' },
                }
              }}
            >
              <ArcReactor size={260} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: 0.7,
          cursor: 'pointer',
          '&:hover': {
            opacity: 1,
            color: '#00F0FF',
          },
          transition: 'all 0.3s ease',
        }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <Typography variant="caption" sx={{ fontFamily: '"Share Tech Mono", monospace', mb: 0.5, letterSpacing: 1 }}>
          DIAGNOSTIC ARCHIVE
        </Typography>
        <KeyboardDoubleArrowDownIcon sx={{ animation: 'bounce 2s infinite', '@keyframes bounce': { '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' }, '40%': { transform: 'translateY(-8px)' }, '60%': { transform: 'translateY(-4px)' } } }} />
      </Box>
    </Box>
  );
};

export default Home;
