import React from 'react';
import './generalevents.css';
import quiz from "./images/quiz.webp";


function PublicityEvents() {
  return (
    <>
      
      <div className='Generalevents'>
        <h1><u>PUBLICITY EVENTS</u></h1>
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
          <img src={quiz} alt="Quiz" />
          </div>
        </div>

        


      </div>
    </>
  );
}

export default PublicityEvents;
