import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BuildIcon from '@mui/icons-material/Build';

const jobs = [
  {
    mark: 'MARK III',
    title: 'Software Engineer',
    company: 'Postulate Infotech Pvt. Ltd.',
    duration: 'Dec 2024 - Present',
    location: 'Tuticorin, Tamil Nadu',
    summary: 'Owned core database design, double-entry ledgers, stock control features, and server deployment routines.',
    logs: [
      'Designed a relational database schema for a double-entry bookkeeping system, handling ledger calculations, balance sheets, and transaction logs in real time.',
      'Constructed batch-wise inventory tracking modules with cross-branch transfer restrictions and automated GST compliance.',
      'Developed a custom RBAC (Role-Based Access Control) engine with multi-tier permissions, enforcing page policies via Django middleware.',
      'Containerized development environments with Docker, handled Nginx reverse-proxies, SSL certificate bindings, and database migrations.'
    ]
  },
  {
    mark: 'MARK II',
    title: 'Full Stack Developer & UI/UX Intern',
    company: 'Parts2product',
    duration: 'Jun 2024 - Sep 2024',
    location: 'Remote / Hybrid',
    summary: 'Bridged wireframe prototyping and responsive React implementations.',
    logs: [
      'Engineered an Employee Management panel in React.js and Tailwind CSS based on high-fidelity Figma models.',
      'Designed end-to-end user flows and responsive prototypes for a Water Fill Station monitoring console.'
    ]
  },
  {
    mark: 'MARK I',
    title: 'Frontend Developer Intern',
    company: 'ICANIO Technologies',
    duration: 'Aug 2023 - Mar 2024',
    location: 'Remote',
    summary: 'Delivered speed-optimized web templates and data-heavy analytics screens.',
    logs: [
      'Created modular, highly performance-tuned layouts for an E-Learning platform utilizing Next.js and Material UI.',
      'Programmed and integrated real-time visual alerts on a Traffic Violation Monitoring dashboard connecting to a Machine Learning backend API.'
    ]
  }
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        backgroundColor: 'rgba(5, 7, 15, 0.2)',
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
            HISTORY LOG: //STARK_ARCHIVES/ARMOR_REVISIONS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              textTransform: 'uppercase',
            }}
          >
            Armor Upgrade Log
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {jobs.map((job, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <Grid xs={12} md={10} key={idx}>
                <Box
                  className={`hud-panel ${idx === 0 ? 'red-panel' : ''}`}
                  sx={{
                    p: 4,
                    backgroundColor: 'rgba(11, 15, 25, 0.85)',
                    border: idx === 0 
                      ? '1px solid rgba(255, 0, 60, 0.3)' 
                      : '1px solid rgba(0, 240, 255, 0.2)',
                    boxShadow: idx === 0 
                      ? '0 0 15px rgba(255, 0, 60, 0.08)' 
                      : '0 0 15px rgba(0, 240, 255, 0.03)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: idx === 0 ? '#FF003C' : '#00F0FF',
                      boxShadow: idx === 0 
                        ? '0 0 25px rgba(255, 0, 60, 0.2)' 
                        : '0 0 25px rgba(0, 240, 255, 0.2)',
                    }
                  }}
                  onClick={() => toggleExpand(idx)}
                >
                  <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    {/* Mark Logo */}
                    <Grid xs={12} sm={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', sm: 'center' } }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: '"Orbitron", sans-serif',
                          fontWeight: 900,
                          color: idx === 0 ? '#FF003C' : '#00F0FF',
                          textShadow: idx === 0 
                            ? '0 0 8px rgba(255, 0, 60, 0.5)' 
                            : '0 0 8px rgba(0, 240, 255, 0.5)',
                        }}
                      >
                        {job.mark}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: '"Share Tech Mono", monospace',
                          color: '#FFC107',
                        }}
                      >
                        {idx === 0 ? 'CURRENT SPEC' : 'DECOMMISSIONED'}
                      </Typography>
                    </Grid>

                    {/* Job Details */}
                    <Grid xs={12} sm={8}>
                      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                        {job.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: '#94a3b8', display: 'flex', gap: 1, alignItems: 'center' }}>
                        <span style={{ color: '#00F0FF' }}>{job.company}</span> | <span>{job.duration}</span>
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                        {job.summary}
                      </Typography>
                    </Grid>

                    {/* Expand Trigger Icon */}
                    <Grid xs={12} sm={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          color: idx === 0 ? '#FF003C' : '#00F0FF',
                        }}
                      >
                        <Typography variant="caption" sx={{ fontFamily: '"Share Tech Mono", monospace' }}>
                          {isExpanded ? 'CLOSE_DIAG' : 'VIEW_DIAG'}
                        </Typography>
                        <ExpandMoreIcon 
                          sx={{ 
                            transform: isExpanded ? 'rotate(180deg)' : 'none', 
                            transition: 'transform 0.3s ease' 
                          }} 
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  {/* Expanded Tech Specs log list */}
                  <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                    <Box sx={{ mt: 3, pt: 3, borderTop: '1px dashed rgba(0, 240, 255, 0.15)' }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontFamily: '"Share Tech Mono", monospace',
                          color: '#FFC107',
                          mb: 2,
                          letterSpacing: 1.5,
                        }}
                      >
                        ⚡ CORE UPGRADE SPECIFICATION LOGS:
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {job.logs.map((log, lIdx) => (
                          <Box key={lIdx} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                            <BuildIcon sx={{ fontSize: '1rem', color: idx === 0 ? '#FF003C' : '#00F0FF', mt: 0.4 }} />
                            <Typography
                              variant="body2"
                              sx={{
                                fontFamily: '"Share Tech Mono", monospace',
                                color: '#e2e8f0',
                                lineHeight: 1.5,
                              }}
                            >
                              {log}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Collapse>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
