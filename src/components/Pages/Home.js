import React from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import Logo2 from "./logolumiere.png";
import Logo from "./sample.png";
import sample from './dasc.mp4';
import '../../App.css';

export const Home = () => {
  const ref = useRef(null);
  const options = {
    smooth: true,
  };
  return (
    
      <LocomotiveScrollProvider options={options} containerRef={ref}>
    <main data-scroll-container ref={ref}>    
      <section className='intro' data-scroll data-scroll-speed="4" data-scroll-section>
      <div className='lumiereh1' data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="9"><img className='logolumiere' src={Logo2} alt="lumierelogo" /></div>
        <div className='imagesample' data-scroll-section><img className='sample' src={Logo} alt="lumiereicon" /></div>
      <video className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>
      </section>
      
      <section className='contents' data-scroll-section>
        <div id="tsparticles"></div>
        <h1 data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="9">About</h1>
              </section>

        <section id="stick" data-scroll-section>
          <h1 data-scroll
            data-scroll-speed="5">
            EVENTS
          </h1>
          <p>General Events</p>
          <p>Technical Events</p>
          <p>Arts Events</p>
          <p>Cultural Events</p>
          <p>Publicity Events</p>
          <p>Workshops</p>
        </section>

      <section className='footer' data-scroll-section>
        <h1 className="op-class"
            data-scroll
            data-scroll-class="fadeIn"
            data-scroll-repeat="true"
            data-scroll-speed="2">Let's end the application with this Footer</h1>
      </section>
    </main>
    </LocomotiveScrollProvider>
  
  );
};
