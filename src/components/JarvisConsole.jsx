import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import TerminalIcon from '@mui/icons-material/Terminal';

const COMMANDS = {
  help: [
    "Available J.A.R.V.I.S. Uplink Protocols:",
    "  about      - Display Sabari's professional profile summary",
    "  skills     - Access technical skills and inventory matrix",
    "  experience - View timeline of Mark Armor revisions (work history)",
    "  projects   - Inspect weapon/software systems specs (projects)",
    "  contact    - Retrieve direct transmission coordinates",
    "  suitup     - Initialize full suit diagnostic & power charge",
    "  clear      - Purge console feed history"
  ],
  about: [
    "SABARI MANIKANDAN E - FULL STACK SOFTWARE ENGINEER",
    "--------------------------------------------------",
    "Experience: 1.5+ Years in Enterprise ERP, HRMS & POS Systems",
    "Summary: Specializes in turning complex corporate requirements",
    "into clean, high-performance web applications. Comfortably working",
    "across React/Angular, Django REST frameworks, and DB design.",
    "Coordinates: Tuticorin, Tamil Nadu, India."
  ],
  skills: [
    "TECHNICAL INVENTORY STATUS:",
    "---------------------------",
    "[-] FRONTEND SHIELDS: React.js, Next.js, Angular, TypeScript, Material UI, Tailwind CSS",
    "[-] BACKEND ENGINES: Python, Django, REST APIs, Session Frameworks",
    "[-] DATABASES: MySQL, Schema Design, Relational Normalization, Migrations",
    "[-] DEPLOYMENT/OPS: Docker, Nginx, DNS Configuration, SSL Certificates",
    "[-] PROTOTYPING: Figma Design Systems, Interactive Wireframes"
  ],
  experience: [
    "MISSION LOGS (RECORDS DETECTED):",
    "--------------------------------",
    "[Mark III] Dec 2024 - Present: Software Engineer at Postulate Infotech",
    "  - Designed double-entry bookkeeping ledger relational systems.",
    "  - Formulated batch-based stock tracking & automated GST compliance.",
    "  - Implemented custom Django RBAC middleware for multi-tier control.",
    "[Mark II] Jun 2024 - Sep 2024: Full Stack & UI/UX Intern at Parts2product",
    "  - Translated Figma user flows into responsive React/Tailwind screens.",
    "[Mark I] Aug 2023 - Mar 2024: Frontend Developer Intern at ICANIO Technologies",
    "  - Devised speed-optimized E-Learning pages in Next.js + Material UI."
  ],
  projects: [
    "PROJECT SYSTEMS BLUEPRINTS:",
    "----------------------------",
    "1. Ledger Calculation Engine (Accounts ERP) - Real-time ledger audit tools.",
    "2. Automated GST Inventory Controller - Batch stocks & branch transfer routing.",
    "3. Geofenced Dual Attendance System - Django QR & Session security protocols.",
    "4. ML Traffic Violation Dashboard - Next.js integrated alert tracker.",
    "5. E-Learning Delivery Webapp - SEO-tuned educational streaming hub."
  ],
  contact: [
    "ESTABLISHING TRANSMISSION UPLINK...",
    "------------------------------------",
    "Email    : sabarimanikandane@gmail.com",
    "Phone    : +91 63823 21186",
    "LinkedIn : linkedin.com/in/sabari-manikandan-e-20072003s",
    "Status   : Ready for recruitment and custom contract consulting."
  ]
};

const JarvisConsole = () => {
  const [history, setHistory] = useState([
    "J.A.R.V.I.S. Core V3.1.2 online.",
    "System diagnostics: 100% operational.",
    "Type 'help' to initialize diagnostic subroutines.",
    ""
  ]);
  const [inputVal, setInputVal] = useState("");
  const feedEndRef = useRef(null);

  useEffect(() => {
    feedEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let response = [];

    if (trimmedCmd === "") return;

    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    } else if (trimmedCmd === "suitup") {
      response = [
        "⚡ SECURE SUIT-UP PROTOCOL INITIATED...",
        "⚡ CHARGING ARC REACTOR CAPACITORS...",
        "⚡ THRUSTER FUEL PUMPS: ONLINE",
        "⚡ HOLOGRAPHIC SYSTEMS CALIBRATED",
        "⚡ ALL SYSTEMS EXCEEDING 100% POWER CAP.",
        "⚡ STATUS: READY TO SOAR."
      ];
    } else if (COMMANDS[trimmedCmd]) {
      response = COMMANDS[trimmedCmd];
    } else {
      response = [
        `Command '${cmd}' not recognized in Stark Command Directory.`,
        "Type 'help' to view available system commands."
      ];
    }

    setHistory((prev) => [
      ...prev,
      `StarkUser@jarvis:~$ ${cmd}`,
      ...response,
      ""
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal("");
    }
  };

  const handleSend = () => {
    handleCommand(inputVal);
    setInputVal("");
  };

  return (
    <Box
      className="hud-panel"
      sx={{
        width: '100%',
        maxWidth: '750px',
        backgroundColor: 'rgba(5, 7, 15, 0.85)',
        border: '1px solid rgba(0, 240, 255, 0.25)',
        boxShadow: '0 0 20px rgba(0, 240, 255, 0.15)',
        fontFamily: '"Share Tech Mono", monospace',
        display: 'flex',
        flexDirection: 'column',
        height: '380px',
        mx: 'auto',
        my: 2,
        overflow: 'hidden',
      }}
    >
      {/* Header bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(0, 240, 255, 0.08)',
          borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
          px: 2,
          py: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TerminalIcon sx={{ color: '#00F0FF', fontSize: '1.2rem' }} />
          <Typography
            sx={{
              fontFamily: '"Orbitron", sans-serif',
              fontSize: '0.85rem',
              color: '#00F0FF',
              letterSpacing: '1px',
              fontWeight: 'bold',
            }}
          >
            STARK_INDUSTRIES_LINK.EXE
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FF003C' }} />
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FFC107' }} />
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#00F0FF' }} />
        </Box>
      </Box>

      {/* Terminal logs content */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 0.5,
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0, 240, 255, 0.2)',
          },
        }}
      >
        {history.map((line, idx) => (
          <Typography
            key={idx}
            sx={{
              fontFamily: '"Share Tech Mono", monospace',
              fontSize: '0.95rem',
              color: line.startsWith('StarkUser@jarvis') 
                ? '#FFC107' 
                : line.startsWith('⚡')
                ? '#FF003C'
                : line.startsWith('Command')
                ? '#ff3366'
                : '#00F0FF',
              whiteSpace: 'pre-wrap',
              lineHeight: 1.4,
              textShadow: line.startsWith('StarkUser@jarvis')
                ? 'none'
                : '0 0 3px rgba(0, 240, 255, 0.3)',
            }}
          >
            {line}
          </Typography>
        ))}
        <div ref={feedEndRef} />
      </Box>

      {/* Command input textfield */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderTop: '1px solid rgba(0, 240, 255, 0.2)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          px: 1.5,
          py: 0.5,
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Share Tech Mono", monospace',
            color: '#FFC107',
            mr: 1,
            fontSize: '1rem',
          }}
        >
          StarkUser@jarvis:~$
        </Typography>
        <TextField
          variant="standard"
          fullWidth
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          placeholder="input diagnostics request..."
          InputProps={{
            disableUnderline: true,
            style: {
              color: '#00F0FF',
              fontFamily: '"Share Tech Mono", monospace',
              fontSize: '1rem',
            },
          }}
          sx={{ mr: 1 }}
        />
        <IconButton onClick={handleSend} size="small" sx={{ color: '#00F0FF' }}>
          <SendIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default JarvisConsole;
