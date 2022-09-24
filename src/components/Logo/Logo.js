import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt parallax-effect-glare-scale br2 shadow-2"
        perspective={500}
        gyroscope={true}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner inner-element pa3">
          <img style={{ paddingTop: '5px' }} alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
