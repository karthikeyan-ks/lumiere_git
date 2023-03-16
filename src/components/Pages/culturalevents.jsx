import React from 'react';
import './generalevents.css';
import quiz from "./images/quiz.webp";


function CulturalEvents() {
  return (
    <>
      
      <div className='Generalevents'>
        <h1><u>CULTURAL EVENTS</u></h1>
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
    </>
  );
}

export default CulturalEvents;
