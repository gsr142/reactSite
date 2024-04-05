import {Outlet} from 'react-router-dom';

import ButtonAppBar from './components/Navbar';
import BottomAppBar from './components/Footer';
function App() {

  return (
    <>
      <ButtonAppBar />
      <Outlet />
      <BottomAppBar />
    </>
  )
}

export default App;
