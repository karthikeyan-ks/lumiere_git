import React from "react";
import './About.css';
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="containerabout">
      <motion.div initial={{ y: -250 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }} className="about">
      <h4>About</h4>
      </motion.div>
      <motion.div initial={{ y: 250 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }} className="info">
       <p> Lumiere is the celebration of life. <br></br>
        We celebrate Lumiere with the purpose of life which is not merely survival, but to thrive and do it 
        with some passion and love, which results in a game, The game of life. We are setting up the stage to find yourself in these cultural 
        programmes and competitions as we aim Lumiere ‘23 to set the bar one up higher than before. This is a celebration of unity where 
        people congregate, rising above their narrow prejudices and shallow preferences, ripping apart the chains of politics, religion, region, 
        etc. It is a platform where differences are forgotten but they are not surrendered, in the name of love and reverence for a fellow being. 
        Lumiere ‘23 will not just welcome the 'future engineers', this is for all students who have the courage to show and tell what they can 
        do if given proper stages. A place where people from all walks of life can gather and revel in their comfort. Lumiere’23 is an 
        opportunity, a platform, to show you the path, so that all may benefit. Lumiere’23 is something you wouldn't want to miss.</p>
    </motion.div>
    </div>
  );
};
