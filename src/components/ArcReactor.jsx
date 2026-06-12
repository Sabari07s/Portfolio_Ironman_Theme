import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const ArcReactor = ({ size = 200 }) => {
  const [overdrive, setOverdrive] = useState(false);
  const [powerLevel, setPowerLevel] = useState(100);

  const handleReactorClick = () => {
    if (overdrive) {
      setOverdrive(false);
      setPowerLevel(100);
    } else {
      setOverdrive(true);
      setPowerLevel(300);
      // Play system warning sound if desired
    }
  };

  const activeColor = overdrive ? '#FF003C' : '#00F0FF';
  const shadowColor = overdrive ? 'rgba(255, 0, 60, 0.8)' : 'rgba(0, 240, 255, 0.8)';
  const coreLevel = overdrive ? 'OVERDRIVE ACTIVE' : 'SYSTEM ONLINE';

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onClick={handleReactorClick}
    >
      {/* Outer Glow Ring */}
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          transition: 'all 0.5s ease',
          boxShadow: `0 0 30px ${overdrive ? 'rgba(255, 0, 60, 0.3)' : 'rgba(0, 240, 255, 0.2)'}, 
                      inset 0 0 20px ${overdrive ? 'rgba(255, 0, 60, 0.2)' : 'rgba(0, 240, 255, 0.1)'}`,
          border: `2px solid ${overdrive ? 'rgba(255, 0, 60, 0.3)' : 'rgba(0, 240, 255, 0.2)'}`,
          backgroundColor: 'rgba(5, 7, 15, 0.6)',
          '&:hover': {
            boxShadow: `0 0 45px ${shadowColor}, inset 0 0 30px ${shadowColor}`,
            borderColor: activeColor,
          }
        }}
        className={overdrive ? "arc-pulsing" : ""}
      >
        {/* Outer Tech Ring (Spinning Clockwise) */}
        <svg
          width={size * 0.9}
          height={size * 0.9}
          viewBox="0 0 100 100"
          style={{ position: 'absolute' }}
          className={overdrive ? "spin-fast" : "spin-slow"}
        >
          {/* Outer circle dashes */}
          <circle cx="50" cy="50" r="45" fill="none" stroke={activeColor} strokeWidth="1" strokeDasharray="5,3" opacity="0.6" />
          <circle cx="50" cy="50" r="41" fill="none" stroke={activeColor} strokeWidth="1.5" strokeDasharray="1,6" opacity="0.8" />
          
          {/* Triangular power coils */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const angle = (i * 360) / 8;
            return (
              <line
                key={i}
                x1="50"
                y1="10"
                x2="50"
                y2="20"
                stroke={activeColor}
                strokeWidth="2.5"
                transform={`rotate(${angle} 50 50)`}
                opacity="0.9"
              />
            );
          })}
        </svg>

        {/* Inner Tech Ring (Spinning Counter-Clockwise) */}
        <svg
          width={size * 0.72}
          height={size * 0.72}
          viewBox="0 0 100 100"
          style={{ position: 'absolute' }}
          className={overdrive ? "spin-counter-fast" : "spin-counter-slow"}
        >
          <circle cx="50" cy="50" r="38" fill="none" stroke={activeColor} strokeWidth="0.75" strokeDasharray="10,15" opacity="0.5" />
          <circle cx="50" cy="50" r="32" fill="none" stroke={activeColor} strokeWidth="2" strokeDasharray="3,1" opacity="0.7" />
          
          {/* Mini triangular notches */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
            const angle = (i * 360) / 12;
            return (
              <polygon
                key={i}
                points="50,22 48,25 52,25"
                fill={activeColor}
                transform={`rotate(${angle} 50 50)`}
                opacity="0.8"
              />
            );
          })}
        </svg>

        {/* Center Glow Core */}
        <Box
          sx={{
            width: size * 0.35,
            height: size * 0.35,
            borderRadius: '50%',
            backgroundColor: activeColor,
            boxShadow: `0 0 25px ${activeColor}, 0 0 50px ${activeColor}, inset 0 0 15px #fff`,
            border: '2px solid #fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            transition: 'all 0.3s ease',
          }}
        >
          {/* Inner core triangle detailing */}
          <svg width="60%" height="60%" viewBox="0 0 100 100">
            <polygon 
              points="50,15 85,75 15,75" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="6" 
              opacity="0.85"
            />
            <circle cx="50" cy="55" r="10" fill="#ffffff" />
          </svg>
        </Box>

        {/* Grid lines overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundImage: `radial-gradient(circle, transparent 70%, rgba(5,7,15,0.9) 100%)`,
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />
      </Box>

      {/* Stats Display readout */}
      <Box sx={{ mt: 2, textAlign: 'center', minWidth: '180px' }}>
        <Typography 
          variant="caption" 
          sx={{ 
            fontFamily: '"Share Tech Mono", monospace',
            color: activeColor,
            letterSpacing: '2px',
            textShadow: `0 0 5px ${activeColor}`,
            display: 'block',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
          }}
        >
          {coreLevel}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontFamily: '"Share Tech Mono", monospace',
            color: overdrive ? '#FFC107' : '#94a3b8',
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
          }}
        >
          CORE STATUS: {powerLevel}% POWER
        </Typography>
      </Box>
    </Box>
  );
};

export default ArcReactor;
