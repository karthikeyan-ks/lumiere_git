import React from "react";
import { motion } from "framer-motion";
import quiz from "./images/quiz.webp";
import './generalevents.css';



export const Workshops = () => {
  return (
    <motion.div initial={{ y: 250 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}>
      
      <div className='Generalevents'>
        <h1><u>WORKSHOPS</u></h1>
      </div>
      <div className="cards-list">
        <div className="card 1">
          <div className="card_image"> <img src={quiz} alt="Quiz" /> </div>
        </div>

        <div className="card 2">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
        </div>

        <div className="card 3">
          <div className="card_image">
            <img src={quiz} alt="Quiz" />
          </div>
        </div>

        


      </div>
      &nbsp;
    </motion.div>
  );
};
