import React from 'react';

import paris1 from '../assets/paris1.png';
import paris2 from '../assets/paris2.png';
import paris3 from '../assets/paris3.png';
import paris4 from '../assets/paris4.png';
import paris5 from '../assets/paris5.png';
import paris6 from '../assets/paris6.png';
import paris7 from '../assets/paris7.png';
import paris8 from '../assets/paris8.png';
import rory1 from '../assets/rory1.png';
import rory2 from '../assets/rory2.png';
import rory3 from '../assets/rory3.png';
import rory4 from '../assets/rory4.png';
import roryParis1 from '../assets/rory&paris1.png';
import roryParis2 from '../assets/rory&paris2.png';

const GellarGilmore = () => {
  const photos = [
    paris1, paris2, paris3, paris4, paris5, paris6, paris7, paris8,
    rory1, rory2, rory3, rory4,
    roryParis1, roryParis2
  ];

  return (
    <div className='fixed z-[2] flex justify-center items-center'>
      {photos.map((photo, index) => (
        <img
          src={photo}
          className='w-[6.7rem] h-[6.7rem] m-2 rounded-lg overflow-hidden'
        />
      ))}
    </div>
  );
};

export default GellarGilmore;

