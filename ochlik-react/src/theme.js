import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6b35',
      light: '#ff8555',
      dark: '#e55a2a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1a1a1a',
      light: '#2d2d2d',
      dark: '#0d0d0d',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    h1: {
      fontSize: '4.5rem',
      fontWeight: 900,
      lineHeight: 1.1,
      '@media (max-width:968px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 900,
      marginBottom: '1rem',
      '@media (max-width:968px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 800,
    },
    h5: {
      fontSize: '1.3rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.8,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.8,
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 700,
      letterSpacing: '1px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '1.2rem 3rem',
          fontSize: '0.9rem',
          transition: 'all 0.3s',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlined: {
          borderWidth: '3px',
          '&:hover': {
            borderWidth: '3px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
})

export default theme
