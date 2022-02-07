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
  // palette: {
  //   success: {
  //     main: "#46ad48",
  //     contrastText: "#fff"
  //   },
  //   warning: {
  //     main: "#e05556",
  //     contrastText: "#fff"
  //   },
  // }
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
