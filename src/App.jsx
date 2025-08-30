import React from 'react';
import "./index.css";
import Navbar from './components/Navbar';
import Landing_page from "./components/Landing_page";
import Footer from './components/Footer';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';





const App = () => {
  return (
    <div className='home  h-[100%] w-[100vw] '>
    
      
        <Navbar />
      <Landing_page/>
      <Page3/>
      <Page4/>
      <Page5/>
  
      






      <Footer/>
    </div>
  );
};

export default App;
