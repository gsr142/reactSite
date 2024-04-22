import {Outlet} from 'react-router-dom';

import ButtonAppBar from './components/Navbar';
import BottomAppBar from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export default function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ButtonAppBar />
      <Outlet />
      <br />
      <br />
      <br />    
      <BottomAppBar />
    </ThemeProvider>
  )
}

