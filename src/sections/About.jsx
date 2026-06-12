import React from 'react';
import { Box, Container, Typography, Grid, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { name: 'FRONTEND ENGINE (React.js, Next.js, Angular, TS)', level: 90, code: 'FE_SHIELD_V4' },
  { name: 'BACKEND POWER CORE (Python, Django, Django REST)', level: 85, code: 'BE_CORE_V3' },
  { name: 'DATABASE MATRIX (MySQL, Relational DB Design)', level: 80, code: 'DB_MATRIX_V2' },
  { name: 'DEVOPS / SYSTEMS (Docker, Nginx, SSL, DNS)', level: 75, code: 'DEVOPS_GRID_V1' },
  { name: 'SYSTEM DESIGN & FIGMA WIREFRAMING', level: 80, code: 'UI_UX_FLOW' }
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        backgroundColor: 'rgba(5, 7, 15, 0.4)',
        borderTop: '1px solid rgba(0, 240, 255, 0.1)',
        borderBottom: '1px solid rgba(0, 240, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="caption"
            className="glow-text-cyan"
            sx={{
              fontFamily: '"Share Tech Mono", monospace',
              letterSpacing: '3px',
              fontWeight: 'bold',
              display: 'block',
              mb: 1,
            }}
          >
            SECURE ACCESS: //STARK_INTEL/SABARI_M
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              textTransform: 'uppercase',
            }}
          >
            System Parameters
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {/* Left Side: Biography dossier */}
          <Grid item xs={12} md={6}>
            <Box
              className="hud-panel"
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'rgba(11, 15, 25, 0.8)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Orbitron", sans-serif',
                  color: '#FF003C',
                  mb: 3,
                  fontWeight: 700,
                  borderBottom: '1px solid rgba(255, 0, 60, 0.3)',
                  pb: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>OPERATIVE DOSSIER</span>
                <Typography variant="caption" sx={{ fontFamily: '"Share Tech Mono", monospace', color: '#00F0FF' }}>
                  CLASS: SOFTWARE_ENGINEER
                </Typography>
              </Typography>

              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                As a dedicated Full Stack Software Engineer, I focus on constructing resilient backend endpoints paired with highly responsive frontends. I specialize in the Python/Django ecosystem and modern UI architectures like React and Angular.
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                My engineering focus involves mapping database constraints to strict business logic, designing relational double-entry bookkeeping systems, and containerizing workflows. I enjoy translating complex architecture parameters into simple and user-friendly digital tools.
              </Typography>

              <Grid container spacing={2} sx={{ fontFamily: '"Share Tech Mono", monospace', mt: 'auto' }}>
                <Grid item xs={6}>
                  <Typography variant="body2" sx={{ color: '#FFC107' }}>
                    [NAME]: Sabari Manikandan E
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                    [STATUS]: Active Duty
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" sx={{ color: '#00F0FF' }}>
                    [EXP]: 1.5+ Years
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                    [DEP]: Tuticorin, TN, IN
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Right Side: Animated Skill diagnostic charts */}
          <Grid item xs={12} md={6}>
            <Box
              className="hud-panel"
              sx={{
                p: 4,
                backgroundColor: 'rgba(11, 15, 25, 0.8)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Orbitron", sans-serif',
                  color: '#FFC107',
                  mb: 3,
                  fontWeight: 700,
                  borderBottom: '1px solid rgba(255, 193, 7, 0.3)',
                  pb: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>SYSTEM DIAGNOSTICS</span>
                <Typography variant="caption" sx={{ fontFamily: '"Share Tech Mono", monospace', color: '#00F0FF' }}>
                  CORE: CALIBRATED
                </Typography>
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
                {skills.map((skill, index) => (
                  <Box key={index}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.8 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: '"Share Tech Mono", monospace',
                          fontWeight: 'bold',
                          color: '#e2e8f0',
                        }}
                      >
                        {skill.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: '"Share Tech Mono", monospace',
                          color: '#00F0FF',
                          fontWeight: 'bold',
                        }}
                      >
                        {skill.level}%
                      </Typography>
                    </Box>
                    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          position: 'absolute', 
                          left: -8, 
                          color: 'rgba(0, 240, 255, 0.4)', 
                          fontFamily: '"Share Tech Mono", monospace', 
                          fontSize: '0.6rem',
                          transform: 'translateX(-100%)'
                        }}
                      >
                        {skill.code}
                      </Typography>
                      
                      {/* Animated Progress Bar container */}
                      <Box sx={{ width: '100%', height: '8px', backgroundColor: 'rgba(0, 240, 255, 0.05)', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                          style={{
                            height: '100%',
                            backgroundColor: index % 2 === 0 ? '#00F0FF' : '#FF003C',
                            boxShadow: index % 2 === 0 
                              ? '0 0 10px rgba(0, 240, 255, 0.7)' 
                              : '0 0 10px rgba(255, 0, 60, 0.7)',
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
