import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('STANDBY'); // STANDBY, TRANSMITTING, SUCCESS, ERROR
  const [logFeed, setLogFeed] = useState(['[SYSTEM] Uplink standby. Ready for user transmission.']);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const addLog = (msg) => {
    setLogFeed((prev) => [...prev, msg]);
  };

  const handleTransmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      addLog('[WARNING] Data transmission aborted: incomplete field credentials.');
      setStatus('ERROR');
      return;
    }

    setStatus('TRANSMITTING');
    addLog('[UPLINK] Handshaking Stark server nodes...');
    addLog(`[UPLINK] Packaging secure file stream from ${formState.name}...`);

    setTimeout(() => {
      setStatus('SUCCESS');
      addLog('[SUCCESS] Secure packet delivered. Target node mailbox updated.');
      addLog('[SYSTEM] Thank you, Sabari will review your transmission shortly.');
      setFormState({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <Box
      id="contact"
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
            SECURE LINKAGE: //STARK_NET/CONTACT_UPLINK
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              textTransform: 'uppercase',
            }}
          >
            Secure Uplink
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Left Side: Contact details / stats */}
          <Grid xs={12} md={5}>
            <Box
              className="hud-panel"
              sx={{
                p: 4,
                backgroundColor: 'rgba(11, 15, 25, 0.85)',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Orbitron", sans-serif',
                  color: '#FFC107',
                  fontWeight: 700,
                  borderBottom: '1px solid rgba(255, 193, 7, 0.3)',
                  pb: 1,
                }}
              >
                DIRECT COORDINATES
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <EmailIcon sx={{ color: '#00F0FF' }} />
                  <Box>
                    <Typography variant="caption" display="block" color="text.secondary">
                      SECURE EMAIL
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: '"Share Tech Mono", monospace' }}>
                      sabarimanikandane@gmail.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <PhoneIcon sx={{ color: '#00F0FF' }} />
                  <Box>
                    <Typography variant="caption" display="block" color="text.secondary">
                      DIRECT LINE
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: '"Share Tech Mono", monospace' }}>
                      +91 63823 21186
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <LinkedInIcon sx={{ color: '#00F0FF' }} />
                  <Box>
                    <Typography variant="caption" display="block" color="text.secondary">
                      SECURE SOCIAL LINK
                    </Typography>
                    <Typography
                      variant="body1"
                      component="a"
                      href="https://linkedin.com/in/sabari-manikandan-e-20072003s"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontFamily: '"Share Tech Mono", monospace',
                        color: '#00F0FF',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' }
                      }}
                    >
                      linkedin.com/in/sabari-manikandan-e-20072003s
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <PlaceIcon sx={{ color: '#00F0FF' }} />
                  <Box>
                    <Typography variant="caption" display="block" color="text.secondary">
                      HQ BASE COORDS
                    </Typography>
                    <Typography variant="body1">
                      Tuticorin, Tamil Nadu, India
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Side: Form */}
          <Grid xs={12} md={7}>
            <Box
              className="hud-panel red-panel"
              sx={{
                p: 4,
                backgroundColor: 'rgba(11, 15, 25, 0.85)',
                border: '1px solid rgba(255, 0, 60, 0.3)',
              }}
            >
              <form onSubmit={handleTransmit}>
                <Grid container spacing={3}>
                  <Grid xs={12} sm={6}>
                    <TextField
                      label="NAME CAPTURE"
                      variant="outlined"
                      fullWidth
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      InputLabelProps={{ style: { color: 'rgba(255, 255, 255, 0.6)', fontFamily: '"Share Tech Mono", monospace' } }}
                      InputProps={{
                        style: { color: '#ffffff', fontFamily: '"Share Tech Mono", monospace' },
                        sx: {
                          '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 0, 60, 0.3)' },
                          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#FF003C' },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#FF003C' },
                        }
                      }}
                    />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <TextField
                      label="EMAIL RETRIEVAL"
                      variant="outlined"
                      fullWidth
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      InputLabelProps={{ style: { color: 'rgba(255, 255, 255, 0.6)', fontFamily: '"Share Tech Mono", monospace' } }}
                      InputProps={{
                        style: { color: '#ffffff', fontFamily: '"Share Tech Mono", monospace' },
                        sx: {
                          '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 0, 60, 0.3)' },
                          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#FF003C' },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#FF003C' },
                        }
                      }}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <TextField
                      label="MESSAGE PAYLOAD"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      InputLabelProps={{ style: { color: 'rgba(255, 255, 255, 0.6)', fontFamily: '"Share Tech Mono", monospace' } }}
                      InputProps={{
                        style: { color: '#ffffff', fontFamily: '"Share Tech Mono", monospace' },
                        sx: {
                          '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 0, 60, 0.3)' },
                          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#FF003C' },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#FF003C' },
                        }
                      }}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={status === 'TRANSMITTING'}
                      fullWidth
                      endIcon={<SendIcon />}
                      sx={{
                        py: 1.5,
                        fontFamily: '"Share Tech Mono", monospace',
                        fontSize: '1rem',
                      }}
                    >
                      {status === 'TRANSMITTING' ? 'TRANSMITTING...' : 'TRANSMIT UPLINK'}
                    </Button>
                  </Grid>
                </Grid>
              </form>

              {/* Console log status tracking */}
              <Box
                sx={{
                  mt: 3,
                  p: 2,
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                  fontFamily: '"Share Tech Mono", monospace',
                  maxHeight: '120px',
                  overflowY: 'auto',
                }}
              >
                {logFeed.map((log, lIdx) => (
                  <Typography
                    key={lIdx}
                    sx={{
                      fontFamily: '"Share Tech Mono", monospace',
                      fontSize: '0.8rem',
                      color: log.startsWith('[SUCCESS]')
                        ? '#00F0FF'
                        : log.startsWith('[WARNING]')
                        ? '#FFC107'
                        : log.startsWith('[UPLINK]')
                        ? '#FF003C'
                        : '#94a3b8',
                      lineHeight: 1.4,
                    }}
                  >
                    {log}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
