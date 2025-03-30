import React from "react";
import "./DeveloperInfo.css";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
const DeveloperInfo = ({ onClose }) => {
  return (
    <motion.div 
      className="developer-info-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="developer-info">
        {/* <img src="/assets/gal1.jpg" alt="Developer" className="developer-img" /> */}
        <h2 className="developer-title">Meet the Developer</h2>
        <p className="developer-name">Ravikiran</p>
        <p className="developer-bio">A passionate Web Developer specializing in ReactJS, crafting immersive and beautiful UI experiences.</p>
        <p className="developer-contact">
        📩 <a href="mailto:ravikiranrcta@gmail.com" className="email-link">ravikiranrcta@gmail.com</a>
        </p>
        <div className="social-links">
        <FaFacebook className="social-icon" onClick={()=>window.open("https://www.facebook.com/ravikiran.kiru.39/")}/>
          <FaInstagram className="social-icon" onClick={()=>window.open("https://www.instagram.com/____mr_____nayaka______/")}/>
          <FaWhatsapp className="social-icon" onClick={()=>window.open("https://web.whatsapp.com/")}/>
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </motion.div>
  );
};

export default DeveloperInfo;
