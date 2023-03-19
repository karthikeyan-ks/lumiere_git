import React from 'react';
import './generalevents.css';
import quiz from "./images/quiz.webp";
import hackathon from "./technical/images/meenhacks cover.webp";
import CirDebugg from "./technical/images/circuit-debugging.webp";
import CTF from "./technical/images/CTF 23.webp";
import expo from "./technical/images/expo.webp";
import coding from "./technical/images/coding.webp";
import popsicle from "./technical/images/popsicle bridge.webp";
import CAD from "./technical/images/cad drawing.webp";
import wave from "./technical/images/wave cloning.webp";
import { motion } from "framer-motion";

function TechnicalEvents() {
  return (
    <motion.div initial={{ y: 250 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}>
      
      <div className='Generalevents'>
        <h1><u>TECHNICAL EVENTS</u></h1>
      </div>
      <div className="cards-list">
        <div className="card 1">
          <div className="card_image"> 
          <img src={hackathon} alt="Hackathon" />
          </div>
          <h6>Hackathon</h6>
        </div>

        <div className="card 2">
          <div className="card_image">
          <img src={CTF} alt="CTF" />
          </div>
          <h6>CTF</h6>
        </div>

        <div className="card 3">
          <div className="card_image">
            <img src={expo} alt="Expo" />
          </div>
          <h6>Technical Expo</h6>
        </div>

        <div className="card 4">
          <div className="card_image">
          <img src={CirDebugg} alt="CirDebugg" />
          </div>
          <h6>Circuit Debugging</h6>
        </div>

        <div className="card 5">
          <div className="card_image">
          <img src={coding} alt="Coding" />
          </div>
          <h6>Coding</h6>
        </div>

        <div className="card 6">
          <div className="card_image">
          <img src={popsicle} alt="Popsicle" />
          </div>
          <h6>Popsicle Bridge</h6>
        </div>

        <div className="card 7">
          <div className="card_image">
          <img src={CAD} alt="CAD" />
          </div>
          <h6>CAD Drawing</h6>
        </div>

        <div className="card 8">
          <div className="card_image">
          <img src={wave} alt="Wave" />
          </div>
          <h6>Wave</h6>
        </div>

        <div className="card 9">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
        </div>

        <div className="card 10">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
        </div>

        <div className="card 11">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
        </div>

        <div className="card 12">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
        </div>

        

      </div>
      &nbsp;
    </motion.div>
  );
}

export default TechnicalEvents;
