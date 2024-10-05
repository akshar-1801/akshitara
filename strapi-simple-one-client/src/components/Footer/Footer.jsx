import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            At Akshitara Ayurveda, we offer authentic Ayurvedic products
            designed to promote natural healing and balance. From functional
            drinks to herbal remedies, our products are crafted using ancient
            Ayurvedic principles to address common health concerns like
            digestion, stress, and more. We believe in the power of nature to
            support overall well-being, combining tradition with modern quality
            standards. Experience the holistic benefits of Ayurveda with
            Akshitara Ayurveda—where nature meets wellness.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Akshitara Ayurved, 1st floor, Khodpara A13, ne. Eid masjid,
              Jetpur, Dist. Rajkot, Gujarat Pincode 360370
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +91 8905686849</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: payalchudasama97@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Sharbats</span>
          <span className="text">Drinks</span>
          <span className="text">Cosmetics</span>
          <span className="text">Functional Foods</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            AKSHITARA. 2024 CREATED BY A.D.O.B PREMIUM E-COMMERCE SOLUTIONS.
          </span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
