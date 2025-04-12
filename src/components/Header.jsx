import "./Header.css";
import "./Header.css"
import weddingBg from "../assets/fahmi-ramadhan-WvFKZKzOTEM-unsplash 1.png";
import leaf from "../assets/leaf.png"
import ganesh from "../assets/ganeshw.png"

import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Header = () => {
  const {t} = useTranslation();
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
        <div className="ganesh">
          <img src={ganesh} alt="ganesh" />
        </div>
        <h5>{t("first_line")}</h5>
          <h5>{t("sec_line")}</h5>
        <h2>{t("head")}</h2>
        <h1 className="cssanimation leScaleYIn sequence">
          <img className="leaf-l" src={leaf} alt="" />
          {` `}{t("male")}
          {isMobile && <br />}
           & 
           {isMobile && <br />}
           {t("female")}{` `} 
          <img className="leaf-r" src={leaf} alt="" />
          </h1>
        <p>
          <span className="dot">·</span>
          {`   `}{t("date")}{` `}
          <span className="dot">·</span>
          </p>
      </div>
    </header>
  :null}
  </>
  );
};

export default Header;
