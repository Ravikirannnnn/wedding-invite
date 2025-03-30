import "./Header.css";
import "./Header.css"
import weddingBg from "../assets/fahmi-ramadhan-WvFKZKzOTEM-unsplash 1.png";
import leaf from "../assets/leaf.png"
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [bgImage, setBgImage] = useState(null); // Start with placeholder
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = weddingBg;
    img.onload = () => setBgImage(weddingBg); // Set actual image once loaded
  }, []);

  return (
    <>
    {bgImage ?
    <header className="hero-section"
    style={{backgroundImage:`url(${bgImage})`}}>
      <div className="overlay">
        <h5>By the grace of the divine</h5>
          <h5>we unite in a timeless bond of love, trust, and devotion.</h5>
        <h2>THE WEDDING OF</h2>
        <h1 className="cssanimation leScaleYIn sequence">
          <img className="leaf-l" src={leaf} alt="" />
          {` `}Maruthi 
          {isMobile && <br />}
           & 
           {isMobile && <br />}
           Manjuala{` `} 
          <img className="leaf-r" src={leaf} alt="" />
          </h1>
        <p>
          <span className="dot">·</span>
          {`   `}08 May 2025{` `}
          <span className="dot">·</span>
          </p>
      </div>
    </header>
  :null}
  </>
  );
};

export default Header;
