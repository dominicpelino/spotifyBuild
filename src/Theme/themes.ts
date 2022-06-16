import { createTheme } from '@mui/material';  

export const theme = createTheme({
    palette: {
        primary: {
          main: 'rgb(27,29,29)',
        },
        secondary: {
          main: 'rgb(4,85,34)',
        },
      },
    breakpoints: {
      values: {
        xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      },
    }
});