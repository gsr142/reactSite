import {Outlet} from 'react-router-dom';

import ButtonAppBar from './components/Navbar';
// import Footer from './components/Footer'
function App() {

  return (
    <>
      <ButtonAppBar />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default App;
