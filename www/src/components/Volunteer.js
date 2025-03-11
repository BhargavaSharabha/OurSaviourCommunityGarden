import React from 'react';
import './Volunteer.css';
import VolunteerImage from './portImages/volunteerTree.jpg'; 
import InfoImage from './portImages/2.jpg'; 
import Footer from './Footer';

const Volunteer = () => {
  return (
    <div className="volunteer-container">
      <div className="top-section">
        <div className="info-image-container">
          <img src={InfoImage} alt="Information" className="info-img" />
        </div>
        <div className="info-box">
          <h1>VOLUNTEER to PLOT AGAINST HUNGER and GROW JUST GREENS!</h1>
          <h2>Check calendar and to schedule</h2>
          <p>
            Call or Text: Rebecca (Becky) Smith<br />
            Volunteer Garden Coordinator<br />
            214-564-5801
          </p>
          <p>
            Our Saviour Community Gardens<br />
            A ministry of Church of Our Saviour<br />
            1616 N. Jim Miller Rd, Dallas, TX 75217
          </p>
          <p>
            Facebook: Our SavioUr Community Gardens
          </p>
        </div>
      </div>
      <div className="info-section">
        <div className="fun-facts-box">
          <h2>Fun Facts About Us</h2>
          <ul>
            <li>We make and harvest our own compost which provides vital nutrients for our gardens.</li>
            <li>We practice vermiculture – worm composting! When the worms create worm castings (worm poop), we mix it in with the compost to improve plant growth.</li>
            <li>We practice seed saving, so that we have seeds for the next planting season.</li>
            <li>Since 2003, we have donated over 50 tons of fresh, organic produce to the Pleasant Grove Food Pantry.</li>
          </ul>
        </div>
        <div className="volunteer-image-container">
          <img src={VolunteerImage} alt="Volunteer" className="volunteer-img" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Volunteer;


