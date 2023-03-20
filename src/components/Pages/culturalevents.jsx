import React from 'react';
import './generalevents.css';
import quiz from "./images/quiz.webp";
import unplugged from "./cultural/images/unpluggedd-01.webp";
import voice from "./cultural/images/voice of lumiere-01.webp";
import standup from "./cultural/images/STANDUP.webp";
import manager from "./cultural/images/bb manager.webp";
import { motion } from "framer-motion";
import { Link} from 'react-router-dom';


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
          <h6><Link to="/Ui" state={{eventType:"publicity",eventName:"Unplugged"}}>Unplugged</Link></h6>
        </div>

        <div className="card 2">
          <div className="card_image">
          <img src={voice} alt="Voice" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"publicity",eventName:"Voice of Lumiere"}}>Voice of Lumiere</Link></h6>
        </div>

        <div className="card 3">
          <div className="card_image">
            <img src={standup} alt="Standup" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"publicity",eventName:"Stand Up Comedy"}}>Stand Up Comedy</Link></h6>
        </div>

        <div className="card 4">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"publicity",eventName:"Quiz"}}>Quiz</Link></h6>
        </div>

        <div className="card 5">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          <h6><Link to="/Ui" state={{eventType:"publicity",eventName:"Quiz"}}>Quiz</Link></h6>
          </div>
        </div>

        <div className="card 6">
          <div className="card_image">
          <img src={manager} alt="Manager" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"publicity",eventName:"Best Manager"}}>Best Manager</Link></h6>
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
          <h6><Link to="/Ui" state={{eventType:"publicity",eventName:"Quiz"}}>Quiz</Link></h6>
        </div>

        <div className="card 9">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"publicity",eventName:"Quiz"}}>Quiz</Link></h6>
        </div>


      </div>
      &nbsp;
    </motion.div>
  );
}

export default CulturalEvents;
