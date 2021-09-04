interface PaletteColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

// const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
// createTheme()

const Palette = {
  mode: 'dark', // light
  primary: {
    light: '#e3f2fd',
    main: '#90caf9',
    dark: '#42a5f5',
    contrastText: '#fff',
  },
  secondary: {
    light: '#f3e5f5',
    main: '#ce93d8',
    dark: '#ab47bc',
    contrastText: '#fff',
  },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  warning: {
    light: '#ffb74d',
    main: '#ffa726',
    dark: '#f57c00',
    contrastText: '#fff',
  },
  info: {
    light: '#4fc3f7',
    main: '#29b6f6',
    dark: '#0288d1',
    contrastText: '#fff',
  },
  success: {
    light: '#81c784',
    main: '#66bb6a',
    dark: '#388e3c',
    contrastText: '#fff',
  },
};
