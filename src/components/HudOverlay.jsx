import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const HudOverlay = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [latency, setLatency] = useState(42);
  const [coreTemp, setCoreTemp] = useState(38);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      // Randomize latency/temp slightly for realism
      setLatency(prev => Math.max(30, Math.min(60, prev + Math.floor(Math.random() * 7) - 3)));
      setCoreTemp(prev => Math.max(35, Math.min(42, prev + parseFloat((Math.random() * 0.4 - 0.2).toFixed(1)))));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Background Grids and Scanlines */}
      <div className="cyber-bg" />
      <div className="cyber-grid-overlay" />
      <div className="scanlines" />

      {/* Cockpit HUD Decorative Frame */}
      {/* Top Left Corner */}
      <Box
        sx={{
          position: 'fixed',
          top: 15,
          left: 15,
          zIndex: 1000,
          pointerEvents: 'none',
          borderTop: '2px solid #00F0FF',
          borderLeft: '2px solid #00F0FF',
          width: '40px',
          height: '40px',
          display: 'flex',
          flexDirection: 'column',
          pl: 1,
          pt: 1,
        }}
      >
        <Typography sx={{ fontFamily: '"Share Tech Mono", monospace', fontSize: '0.65rem', color: '#00F0FF', opacity: 0.7 }}>
          MK.XXV
        </Typography>
      </Box>

      {/* Top Right Corner */}
      <Box
        sx={{
          position: 'fixed',
          top: 15,
          right: 15,
          zIndex: 1000,
          pointerEvents: 'none',
          borderTop: '2px solid #00F0FF',
          borderRight: '2px solid #00F0FF',
          width: '40px',
          height: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          pr: 1,
          pt: 1,
        }}
      >
        <Typography sx={{ fontFamily: '"Share Tech Mono", monospace', fontSize: '0.65rem', color: '#00F0FF', opacity: 0.7 }}>
          SYS.ON
        </Typography>
      </Box>

      {/* Bottom Left Corner */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 15,
          left: 15,
          zIndex: 1000,
          pointerEvents: 'none',
          borderBottom: '2px solid #00F0FF',
          borderLeft: '2px solid #00F0FF',
          width: '40px',
          height: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          pl: 1,
          pb: 1,
        }}
      >
        <Box sx={{ width: 8, height: 8, backgroundColor: '#FF003C', animation: 'blink 1.5s infinite' }} />
      </Box>

      {/* Bottom Right Corner */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 15,
          right: 15,
          zIndex: 1000,
          pointerEvents: 'none',
          borderBottom: '2px solid #00F0FF',
          borderRight: '2px solid #00F0FF',
          width: '40px',
          height: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          pr: 1,
          pb: 1,
        }}
      >
        <Typography sx={{ fontFamily: '"Share Tech Mono", monospace', fontSize: '0.65rem', color: '#00F0FF', opacity: 0.7 }}>
          LAT: {latency}MS
        </Typography>
      </Box>

      {/* Left Vertical HUD Bar */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          position: 'fixed',
          left: 25,
          top: '25%',
          height: '50%',
          width: '2px',
          backgroundColor: 'rgba(0, 240, 255, 0.15)',
          zIndex: 1000,
          pointerEvents: 'none',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '8px', height: '2px', backgroundColor: '#00F0FF' }} />
        <Typography 
          sx={{ 
            transform: 'rotate(-90deg)', 
            fontFamily: '"Share Tech Mono", monospace', 
            fontSize: '0.65rem', 
            color: '#00F0FF', 
            opacity: 0.6,
            whiteSpace: 'nowrap',
            my: 8
          }}
        >
          THRUSTERS CHARGED
        </Typography>
        <Box sx={{ width: '8px', height: '2px', backgroundColor: '#00F0FF' }} />
        <Typography 
          sx={{ 
            transform: 'rotate(-90deg)', 
            fontFamily: '"Share Tech Mono", monospace', 
            fontSize: '0.65rem', 
            color: '#FF003C', 
            opacity: 0.7,
            whiteSpace: 'nowrap',
            my: 8
          }}
        >
          UNIBEAM: STABLE
        </Typography>
        <Box sx={{ width: '8px', height: '2px', backgroundColor: '#00F0FF' }} />
      </Box>

      {/* Right Vertical HUD Bar */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          position: 'fixed',
          right: 25,
          top: '25%',
          height: '50%',
          width: '2px',
          backgroundColor: 'rgba(0, 240, 255, 0.15)',
          zIndex: 1000,
          pointerEvents: 'none',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '8px', height: '2px', backgroundColor: '#00F0FF' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
          <Typography sx={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontFamily: '"Share Tech Mono", monospace', fontSize: '0.65rem', color: '#00F0FF', opacity: 0.6, letterSpacing: 2 }}>
            CORE_TEMP: {coreTemp.toFixed(1)}°C
          </Typography>
        </Box>
        <Box sx={{ width: '8px', height: '2px', backgroundColor: '#00F0FF' }} />
        <Typography sx={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontFamily: '"Share Tech Mono", monospace', fontSize: '0.65rem', color: '#FFC107', opacity: 0.7, letterSpacing: 2 }}>
          TIME: {time}
        </Typography>
        <Box sx={{ width: '8px', height: '2px', backgroundColor: '#00F0FF' }} />
      </Box>
    </>
  );
};

export default HudOverlay;
