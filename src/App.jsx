import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageModal from "./components/LanguageModal";
import Header from "./components/Header";
import CoupleSection from "./components/CoupleSection";
import CountdownTimer from "./components/CountdownTimer";
import EventDetails from "./components/EventDetails";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Quickball from "./components/Quickball";
import "./App.css";

// 
// 
function App() {

  const [showModal, setShowModal] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (!savedLang) {
      setShowModal(true);
    } else {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const handleLanguageSelect = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setShowModal(false);
  };


  return (
     <div>
      {showModal && <LanguageModal onSelect={handleLanguageSelect} />}
      {!showModal && (
        <>
      <Header />
      <CoupleSection />
      <Gallery/>
      <Quickball/>
      <CountdownTimer />
      <EventDetails />
      <MapSection />
      <Footer />
      </>
      )}
    </div>
  );
}

export default App;
