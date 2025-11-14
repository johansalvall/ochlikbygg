import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#3d5a80',
      light: '#5a7aa0',
      dark: '#2a3f5f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#a8a8a8',
      light: '#2d2d2d',
      dark: '#cec0c0',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#000000',
      light: '#f7d66b',
      dark: '#d4a82f',
      contrastText: '#1a1a1a',
    },
    background: {
      default: '#a38f8f',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#555555',
      light: '#aaa',
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
    MuiContainer: {
      defaultProps: {
        disableGutters: false,
      },
      styleOverrides: {
        root: {
          paddingLeft: '48px',
          paddingRight: '48px',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@media (max-width: 600px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
        },
        maxWidthLg: {
          '@media (min-width: 1200px)': {
            maxWidth: '1500px !important',
          },
        },
        maxWidthXl: {
          '@media (min-width: 1536px)': {
            maxWidth: '1500px !important',
          },
        },
      },
    },
  },
})

export default theme