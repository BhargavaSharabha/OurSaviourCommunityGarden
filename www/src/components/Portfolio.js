// import React, { useState } from 'react';
// import './Portfolio.css';
// import IMAGE_1 from './portImages/1.jpg';
// import IMAGE_2 from './portImages/2.jpg';
// import IMAGE_3 from './portImages/3.jpg';
// import IMAGE_4 from './portImages/4.jpg';
// import IMAGE_5 from './portImages/5.jpg';
// import IMAGE_6 from './portImages/6.jpg';
// import IMAGE_7 from './portImages/7.jpg';
// import IMAGE_8 from './portImages/8.jpg';
// import IMAGE_9 from './portImages/9.jpg';
// import IMAGE_10 from './portImages/10.jpg';
// import IMAGE_11 from './portImages/11.jpg';
// import IMAGE_12 from './portImages/12.jpg';
// import IMAGE_13 from './portImages/13.jpg';
// import IMAGE_14 from './portImages/14.jpg';
// import IMAGE_15 from './portImages/15.jpg';
// import IMAGE_16 from './portImages/16.jpg';
// import IMAGE_17 from './portImages/17.jpg';
// import Footer from './Footer';


// const Portfolio = () => {


//   const images = [
//     { src: IMAGE_1, title: 'Waterfalls' },
//     { src: IMAGE_3, title: 'Ocean' },
//     { src: IMAGE_17, title: 'Cliff' },
//     { src: IMAGE_4, title: 'Rain' },
//     { src: IMAGE_5, title: 'Mountains' },
//     { src: IMAGE_6, title: 'Trees' },
//     { src: IMAGE_7, title: 'Beach' },
//     { src: IMAGE_8, title: 'Forest' },
//     { src: IMAGE_9, title: 'Sunset' },
//     { src: IMAGE_10, title: 'Desert' },
//     { src: IMAGE_11, title: 'River' },
//     { src: IMAGE_12, title: 'Field' },
//     { src: IMAGE_13, title: 'Valley' },
//     { src: IMAGE_14, title: 'Lake' },
//     { src: IMAGE_15, title: 'Canyon' },
//     { src: IMAGE_16, title: 'Meadow' },
//   ];

//   return (
//     <div className="portfolio">
//       {images.map((image, index) => (
//         <div
//           className="image-container"
//         >
//           <img src={image.src} alt={image.title} className="image" />
//         </div>
//       ))}
//     </div>
    
//   );
// };

// export default Portfolio;


import React from 'react';
import './Portfolio.css';
import IMAGE_1 from './portImages/1.jpg';
import IMAGE_2 from './portImages/2.jpg';
import IMAGE_3 from './portImages/3.jpg';
import IMAGE_4 from './portImages/4.jpg';
import IMAGE_5 from './portImages/5.jpg';
import IMAGE_6 from './portImages/6.jpg';
import IMAGE_7 from './portImages/7.jpg';
import IMAGE_8 from './portImages/8.jpg';
import IMAGE_9 from './portImages/9.jpg';
import IMAGE_10 from './portImages/10.jpg';
import IMAGE_11 from './portImages/11.jpg';
import IMAGE_12 from './portImages/12.jpg';
import IMAGE_13 from './portImages/13.jpg';
import IMAGE_14 from './portImages/14.jpg';
import IMAGE_15 from './portImages/15.jpg';
import IMAGE_16 from './portImages/16.jpg';
import IMAGE_17 from './portImages/17.jpg';
import Footer from './Footer';

const Portfolio = () => {
  const images = [
    { src: IMAGE_1, title: 'Waterfalls' },
    { src: IMAGE_3, title: 'Ocean' },
    { src: IMAGE_17, title: 'Cliff' },
    { src: IMAGE_4, title: 'Rain' },
    { src: IMAGE_5, title: 'Mountains' },
    { src: IMAGE_6, title: 'Trees' },
    { src: IMAGE_7, title: 'Beach' },
    { src: IMAGE_8, title: 'Forest' },
    { src: IMAGE_9, title: 'Sunset' },
    { src: IMAGE_10, title: 'Desert' },
    { src: IMAGE_11, title: 'River' },
    { src: IMAGE_12, title: 'Field' },
    { src: IMAGE_13, title: 'Valley' },
    { src: IMAGE_14, title: 'Lake' },
    { src: IMAGE_15, title: 'Canyon' },
    { src: IMAGE_16, title: 'Meadow' },
  ];

  return (
    <div className="portfolio">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image.src} alt={image.title} className="image" />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
