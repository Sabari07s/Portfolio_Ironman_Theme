import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

const projectsList = [
  {
    title: 'Accounts Bookkeeping & Ledger Engine',
    category: 'ERP CORE',
    desc: 'Full relational database double-entry bookkeeping engine with real-time financial auditing.',
    tech: ['Python', 'Django', 'MySQL', 'Relational Schema Design'],
    blueprint: [
      'SYSTEM SCHEMATIC: Double-entry journal voucher tracking mapping to debit/credit lines.',
      'LIVE PROCESSING: Live calculation compiler for individual ledgers, group lists, trial balance, profit & loss, and balance sheets.',
      'DATA INTEGRITY: Implemented a reference clearing engine supporting new references, advances, and adjustments against references.'
    ]
  },
  {
    title: 'Automobile ERP Stock & GST Compliance',
    category: 'LOGISTICS',
    desc: 'Batch-wise stock tracker with multi-branch transfer control limits and tax compliance reporting.',
    tech: ['Python', 'Django', 'MySQL', 'Live Migrations'],
    blueprint: [
      'SYSTEM SCHEMATIC: Batch Stock Tracker with automatic multi-branch locks.',
      'INVENTORY CYCLES: Full purchase and sales workflow integration supporting Goods Received Notes (GRN).',
      'TAX REPORTING: Built automatic GST computation reports to minimize accounting preparation steps.'
    ]
  },
  {
    title: 'Custom Django RBAC & Secure Session HRMS',
    category: 'CYBER SHIELD',
    desc: 'Multi-tier role access middleware with active geofenced check-in nodes and timesheets.',
    tech: ['Python', 'Django', 'Session Framework', 'QR APIs'],
    blueprint: [
      'SYSTEM SCHEMATIC: Django middleware restricting views and operations per route mapped to DB roles (Admin, Internal, User).',
      'SECURITY NODES: Configured active forced user logouts and session expirations.',
      'ATTENDANCE ENGINES: Dual track check-in support with QR codes and geofencing APIs.'
    ]
  },
  {
    title: 'High-Performance E-Learning Webapp',
    category: 'INTERFACE',
    desc: 'High SEO-optimized Next.js web application built off detailed Figma prototypes.',
    tech: ['React.js', 'Next.js', 'TypeScript', 'Material UI', 'Figma'],
    blueprint: [
      'SYSTEM SCHEMATIC: Server-side rendering (SSR) templates optimized for core web vitals.',
      'UI TRANSLATION: Turned high-fidelity Figma components into responsive and modular React codes.'
    ]
  },
  {
    title: 'Traffic Violation Monitoring Dashboard',
    category: 'ANALYTICS',
    desc: 'Real-time alert analytics dashboard rendering feeds from a Machine Learning API.',
    tech: ['React.js', 'Material UI', 'REST APIs', 'Machine Learning Link'],
    blueprint: [
      'SYSTEM SCHEMATIC: Asynchronous webhook listener displaying notifications from ML backend endpoints.',
      'DATA GRAPHICS: Chart-based trends mapping traffic metrics by geographic regions.'
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenBlueprint = (project) => {
    setSelectedProject(project);
  };

  const handleCloseBlueprint = () => {
    setSelectedProject(null);
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        backgroundColor: 'rgba(5, 7, 15, 0.4)',
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
            SYSTEM WEAPONRY: //STARK_INDUSTRIES/PROJECT_BLUEPRINTS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              textTransform: 'uppercase',
            }}
          >
            System Blueprints
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projectsList.map((project, idx) => (
            <Grid xs={12} sm={6} md={4} key={idx}>
              <Card
                className="hud-panel"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(11, 15, 25, 0.75)',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                  '&:hover': {
                    borderColor: '#00F0FF',
                    boxShadow: '0 0 25px rgba(0, 240, 255, 0.3)',
                    transform: 'translateY(-5px)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: '"Share Tech Mono", monospace',
                        color: '#FFC107',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                      }}
                    >
                      [{project.category}]
                    </Typography>
                    <PrecisionManufacturingIcon sx={{ color: 'rgba(0, 240, 255, 0.4)', fontSize: '1.2rem' }} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      mb: 1.5,
                      lineHeight: 1.3,
                      fontFamily: '"Orbitron", sans-serif',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {project.desc}
                  </Typography>

                  {/* Tech Stack Badges */}
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {project.tech.map((t, tIdx) => (
                      <Typography
                        key={tIdx}
                        variant="caption"
                        sx={{
                          fontFamily: '"Share Tech Mono", monospace',
                          color: '#00F0FF',
                          backgroundColor: 'rgba(0, 240, 255, 0.05)',
                          border: '1px solid rgba(0, 240, 255, 0.15)',
                          px: 1,
                          py: 0.2,
                          borderRadius: '2px',
                        }}
                      >
                        {t}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>

                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="outlined"
                    color="info"
                    fullWidth
                    onClick={() => handleOpenBlueprint(project)}
                    sx={{
                      fontFamily: '"Share Tech Mono", monospace',
                      fontSize: '0.8rem',
                    }}
                  >
                    ACCESS BLUEPRINT
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Blueprint Details Modal */}
      {selectedProject && (
        <Dialog
          open={Boolean(selectedProject)}
          onClose={handleCloseBlueprint}
          PaperProps={{
            className: "hud-panel",
            sx: {
              backgroundColor: '#05070f',
              border: '1px solid #00F0FF',
              boxShadow: '0 0 35px rgba(0, 240, 255, 0.4)',
              maxWidth: '600px',
              width: '100%',
              m: 2,
            }
          }}
        >
          <DialogTitle
            sx={{
              fontFamily: '"Orbitron", sans-serif',
              fontWeight: 'bold',
              color: '#00F0FF',
              borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
              pb: 1.5,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>SYSTEM_SPEC: {selectedProject.category}</span>
            <Typography variant="caption" sx={{ fontFamily: '"Share Tech Mono", monospace', color: '#FFC107' }}>
              STARK APPROVED
            </Typography>
          </DialogTitle>
          <DialogContent sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Orbitron", sans-serif',
                fontWeight: 800,
                color: '#e2e8f0',
                mb: 2,
              }}
            >
              {selectedProject.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {selectedProject.desc}
            </Typography>
            
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: '"Share Tech Mono", monospace',
                color: '#FFC107',
                mb: 1.5,
                fontWeight: 'bold',
              }}
            >
              ⚙️ ARCHITECTURE DIAGNOSTICS:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {selectedProject.blueprint.map((spec, sIdx) => (
                <Box key={sIdx} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <CodeIcon sx={{ color: '#00F0FF', fontSize: '1.2rem', mt: 0.2 }} />
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: '"Share Tech Mono", monospace',
                      color: '#e2e8f0',
                      lineHeight: 1.5,
                    }}
                  >
                    {spec}
                  </Typography>
                </Box>
              ))}
            </Box>
          </DialogContent>
          <DialogActions sx={{ p: 2.5, pt: 0, borderTop: '1px solid rgba(0, 240, 255, 0.1)' }}>
            <Button
              onClick={handleCloseBlueprint}
              variant="contained"
              color="primary"
              sx={{
                fontFamily: '"Share Tech Mono", monospace',
              }}
            >
              DISENGAGE LINK
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Projects;
