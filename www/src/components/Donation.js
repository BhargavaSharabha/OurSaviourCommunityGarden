import React from 'react';
import './Donation.css';
import DonateImage from './portImages/mainDonate.jpg'
import Footer from './Footer';
import DonationImage from './portImages/23.png';
import newDonationImage from './portImages/27.png';

const Donation = () => {
  return (
    <div>
      <div className="donation-container">
      <div className="image-section">
        <img src={newDonationImage} alt="Tree" className="tree-image" />
      </div>
      <div className="information-section">
        <div className="content-box">
          <h2><strong>Information about the donation:</strong></h2>
          <p>
            Our Saviour Community Gardens<br />
            Plots Against Hunger and Grows Just Greens<br />
            Because of the help of Volunteers, In Kind and Monetary Donations.<br />
            Our Saviour Church/Gardens is a State of Texas Religious Non Profit<br />
            <strong>*Donations are tax deductible.</strong>
          </p>
        </div>
        <div className="content-box">
          <h2><strong>Monetary Donations may be sent to:</strong></h2>
          <p>
            Church of Our Saviour<br />
            Attn. Becky Smith<br />
            1616 N. Jim Miller Rd.<br />
            Dallas, Texas 75217<br /><br />
            <strong>Contact Becky Smith, 214-564-5801 regarding In Kind Donations</strong><br /><br />
            Thank you for your interest in feeding the hungry.
          </p>
        </div>
        <div className="content-box">
          <h2><strong>Wish List:</strong></h2>
          <ul className="wish-list">
            <li>Volunteers</li>
            <li>Gloves</li>
            <li>Water hoses</li>
            <li>Hose end spray nozzles</li>
            <li>Soaker hoses</li>
            <li>Buckets</li>
            <li>Shovels</li>
            <li>Garden forks</li>
            <li>Hay forks</li>
            <li>Eye hoes or grub hoes</li>
            <li>Saws, loppers, clippers</li>
            <li>Wheelbarrows, garden carts</li>
            <li>Straw bales</li>
            <li>Tarps</li>
            <li>Coolers</li>
            <li>Security and trail cameras</li>
            <li>Small Mantis type tillers</li>
            <li>Push lawnmower</li>
            <li>Weed trimmer (battery)</li>
            <li>Raised bed containers</li>
            <li>Tractor service</li>
          </ul>
          <p>* OSCG is a Texas Religious Non Profit. Monetary or In Kind donations are tax deductible.</p>
        </div>
      </div>
    </div>
    <div><Footer/></div>
    </div>
  );
};

export default Donation;
