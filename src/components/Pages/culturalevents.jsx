import React from 'react';
import './generalevents.css';
import quiz from "./images/quiz.webp";
import unplugged from "./cultural/images/unpluggedd-01.webp";
import voice from "./cultural/images/voice of lumiere-01.webp";
import standup from "./cultural/images/STANDUP.webp";
import manager from "./cultural/images/bb manager.webp";
import { motion } from "framer-motion";


function CulturalEvents() {
  return (
    <motion.div initial={{ y: 250 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}>
      
      <div className='Generalevents'>
        <h1><u>CULTURAL EVENTS</u></h1>
      </div>
      <div className="cards-list">
        <div className="card 1">
          <div className="card_image"> 
          <img src={unplugged} alt="unplugged" /> 
          </div>
          <h6>Unplugged</h6>
        </div>

        <div className="card 2">
          <div className="card_image">
          <img src={voice} alt="Voice" />
          </div>
          <h6>Voice of Lumiere</h6>
        </div>

        <div className="card 3">
          <div className="card_image">
            <img src={standup} alt="Standup" />
          </div>
          <h6>Stand Up Comedy</h6>
        </div>

        <div className="card 4">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
        </div>

        <div className="card 5">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
        </div>

        <div className="card 6">
          <div className="card_image">
          <img src={manager} alt="Manager" />
          </div>
          <h6>Best Manager</h6>
        </div>

        <div className="card 7">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
        </div>

        <div className="card 8">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
        </div>

        <div className="card 9">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
        </div>


      </div>
      &nbsp;
    </motion.div>
  );
}

export default CulturalEvents;
