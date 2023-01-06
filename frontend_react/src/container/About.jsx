import React from 'react';
import { motion } from 'framer-motion';

import './About.scss';

const abouts = [
  {title: 'Web Developer', description: 'I am a good developer.', imgUrl: ''},
  {title: 'Frontend Developer', description: 'I am a good developer.', imgUrl: ''},
  {title: 'Backend Developer', description: 'I am a good developer.', imgUrl: ''},
  {title: 'MERN Developer', description: 'I am a good developer.', imgUrl: ''}
];

const About = () =>{
  return (
    <>
      <h2 className="head-text">I Know that <span>Good Development</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;