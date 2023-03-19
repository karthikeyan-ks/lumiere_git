import React from "react";
import './Events.css';
import { motion } from "framer-motion";


export const Events = () => {
  return (
    <>
      <motion.section initial={{ y: -250 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }} id='events-page'>
      <div className='events-title'>

        <h4>EVENTS</h4>

      </div>
      <motion.div initial={{ x: 250 }} animate={{ x: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }} className='events-lists1'>
      <a className='event-card' id="card-general" href="./generalevents"><div class="card-content">
            <h2 class="card-title"><a href="./generalevents">GENERAL EVENTS</a></h2>

          </div>
        </a>
        <a className='event-card' id='card-technical' href="./technicalevents"><div class="card-content">
            <h2 class="card-title"><a href="./technicalevents">TECHNICAL EVENTS</a></h2>

          </div>
        </a>
        <a className='event-card' id='card-cultural' href="./culturalevents"><div class="card-content">
            <h2 class="card-title"><a href="./culturalevents">CULTURAL EVENTS</a></h2>

          </div>
        </a>
      
        <a className='event-card' id='card-publicity' href="./publicityevents">
          <div class="card-content">
            <h2 class="card-title"><a href="./publicityevents">PUBLICITY EVENTS</a></h2>

          </div> </a>
        <a className='event-card' id='card-workshops' href="./Workshops"><div class="card-content">
            <h2 class="card-title"><a href="./Workshops">WORKSHOPS</a></h2>

          </div>
        </a>
      </motion.div>

    </motion.section>
    
    </>
  );
};
