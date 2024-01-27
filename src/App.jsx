import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas, AppWrap, SocialMedia } from "./components";

const App = () => {
  const appStyle = {
    backgroundColor: "#ccd8e3", // Set the desired background color
  };

  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>

        <div className='relative z-0' style={appStyle}>
          <About />
          <Tech />
          <Works />
          <Contact />
          <SocialMedia />
          <div className='relative z-0'>
          </div>
          <AppWrap />

        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;