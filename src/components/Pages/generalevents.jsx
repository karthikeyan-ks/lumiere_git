import React from 'react';
import { motion } from "framer-motion";
import './generalevents.css';
import quiz from "./images/quiz.webp";
import football from "./general/images/WhatsApp Image 2023-03-18 at 7.26.18 PM (1).webp";
import { Link} from 'react-router-dom';


function GeneralEvents() {
  return (
    <motion.div initial={{ y: 250 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}>
      
      <div className='Generalevents'>
        <h1><u>GENERAL EVENTS</u></h1>
      </div>
      <div className="cards-list">
        <div className="card 1">
          <div className="card_image"> 
            <img src={football} alt="football" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"general",eventName:"7's Football"}}>7's Football</Link></h6>
        </div>

        <div className="card 2">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"general",eventName:"7's Football"}}>7's Football</Link></h6>
        </div>

        <div className="card 3">
          <div className="card_image">
            <img src={quiz} alt="Quiz" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"general",eventName:"7's Football"}}>7's Football</Link></h6>
        </div>

        <div className="card 4">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"general",eventName:"7's Football"}}>7's Football</Link></h6>
        </div>

        <div className="card 5">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"general",eventName:"7's Football"}}>7's Football</Link></h6>
        </div>

        <div className="card 6">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"general",eventName:"7's Football"}}>7's Football</Link></h6>
        </div>

        <div className="card 7">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"general",eventName:"7's Football"}}>7's Football</Link></h6>
        </div>

        <div className="card 8">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"general",eventName:"7's Football"}}>7's Football</Link></h6>
        </div>

        <div className="card 9">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"general",eventName:"7's Football"}}>7's Football</Link></h6>
        </div>

        <div className="card 10">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"general",eventName:"7's Football"}}>7's Football</Link></h6>
        </div>

        <div className="card 11">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"general",eventName:"7's Football"}}>7's Football</Link></h6>
        </div>

        <div className="card 12">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"general",eventName:"7's Football"}}>7's Football</Link></h6>
        </div>

        <div className="card 13">
          <div className="card_image">
          <img src={quiz} alt="Quiz" />
          </div>
          <h6><Link to="/Ui" state={{eventType:"general",eventName:"7's Football"}}>7's Football</Link></h6>
        </div>

      </div>
     &nbsp;
    </motion.div>
  );
}

export default GeneralEvents;