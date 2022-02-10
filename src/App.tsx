import './App.scss';
import SidebarLayout from './components/SidebarLayout';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  // components: {
  //   MuiDrawer: {
  //     styleOverrides: {
  //       root: {
  //         //css
  //       }
  //     }

  //   }
  // },
  // typography: {
  //   fontFamily: 'geomanist-regular, Arial',
  // },
  palette: {
    success: {
      main: "#A6D800",
      contrastText: "#fff"
    },
    error: {
      main: "#FF0064",
      contrastText: "#fff"
    },
    warning: {
      main: "#FBC02D",
      contrastText: "#fff"
    },
    primary: {
      main: "#3FC2D4",
      contrastText: "#fff"
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SidebarLayout />
      </div>
    </ThemeProvider>
  );
}

export default App;
