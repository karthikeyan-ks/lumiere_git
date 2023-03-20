import React from "react";
import { motion } from "framer-motion";
import quiz from "./images/quiz.webp";
import './generalevents.css';
import { Link} from 'react-router-dom';


export const Workshops = () => {
  return (
    <motion.div initial={{ y: 250 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}>
      
      <div className='Generalevents'>
        <h1><u>WORKSHOPS</u></h1>
      </div>
      <div className="cards-list">
        <div className="card 1">
          <div className="card_image"> <img src={quiz} alt="Quiz" /> </div>
          <h6><Link to="/Ui" state={{eventType:"workshop",eventName:"Quiz"}}>Quiz</Link></h6>
        </div>

        <div className="card 2">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          <h6><Link to="/Ui" state={{eventType:"workshop",eventName:"Quiz"}}>Quiz</Link></h6>
          </div>
        </div>

        <div className="card 3">
          <div className="card_image">
            <img src={quiz} alt="Quiz" />
            <h6><Link to="/Ui" state={{eventType:"workshop",eventName:"Quiz"}}>Quiz</Link></h6>
          </div>
        </div>

        


      </div>
      &nbsp;
    </motion.div>
  );
};
