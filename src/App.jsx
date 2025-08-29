import React from 'react';
import "./index.css";
import Navbar from './components/Navbar';
import Landing_page from "./components/Landing_page";
import Landing_video from "./assets/Landing_video.mp4"
import Footer from './components/Footer';
import Page2 from './components/Page2';





const App = () => {
  return (
    <div className='home  h-[100%] w-[100vw] '>
    
      
        <Navbar />
      <Landing_page/>
      <Page2/>
      






      <Footer/>
    </div>
  );
};

export default App;
