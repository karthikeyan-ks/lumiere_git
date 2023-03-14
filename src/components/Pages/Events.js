import React from "react";
import './Events.css';

export const Events = () => {
  return (
    <>
      <section id='events-page'>
      <div className='events-title'>

        <h4>EVENTS</h4>

      </div>
      <div className='events-lists1'>
        <div className='event-card' id="card-general"><div class="card-content">
            <h2 class="card-title">GENERAL EVENTS</h2>

          </div>
        </div>
        <div className='event-card' id='card-technical'><div class="card-content">
            <h2 class="card-title">TECHNICAL EVENTS</h2>

          </div>
        </div>
        <div className='event-card' id='card-cultural'><div class="card-content">
            <h2 class="card-title">CULTURAL EVENTS</h2>

          </div>
        </div>
      </div>
      <div className='events-lists2' >
        <div className='event-card' id='card-publicity'>
          <div class="card-content">
            <h2 class="card-title">PUBLICITY EVENTS</h2>

          </div> </div>
        <div className='event-card' id='card-workshops'><div class="card-content">
            <h2 class="card-title">WORKSHOPS</h2>

          </div>
        </div>
      </div>

    </section>
    
    </>
  );
};
