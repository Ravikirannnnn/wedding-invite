import "./EventDetails.css";
import Wed1 from '../assets/wed-ring.png'
import Wed2 from '../assets/web-flow.png'
import ring from '../assets/wedding-ring.png'
import table from '../assets/dinner-table.png'
import map from '../assets/map.png'
import border from "../assets/border.png"
import { useTranslation } from "react-i18next";

const EventDetails = () => {
  const {t} = useTranslation();

  return (
    <>
    <section className="events">
      <div className="event-card" style={{backgroundImage:`url(${Wed1})`}}>
      <div className="overlay-ev"></div>
      <img loading="lazy" src={table} alt="" />
        <h3>{t("b1_tit")}</h3>
        <p>{t("b1_date")}</p>
        <p>{t("b1_time")}</p>
        <h5>{t("kalyan")}</h5>
        <p>{t("address")}</p>
        <button onClick={()=>window.open("https://www.google.com/maps/dir//Panchacharya+Kalyana+Mantpa,+Maniyur,+Chitradurga,+Karnataka+577501/@14.2190001,76.4115013,938m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x3bba75aa6bfc75fb:0x7e1bb543e4e7af42!2m2!1d76.4140499!2d14.2189766!3e0?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D")}>
          <img className="map" src={map} alt="map" />
          Open Map</button>
      </div>
      <div className="event-card"  style={{backgroundImage:`url(${Wed2})`}}>
      <div className="overlay-ev"></div>
      <img loading="lazy" src={ring} alt="" />
      <h3>{t("b2_tit")}</h3>
        <p>{t("b2_date")}</p>
        <p>{t("b2_time")}</p>
        <h5>{t("kalyan")}</h5>
        <p>{t("address")}</p>
        <button onClick={()=>window.open("https://www.google.com/maps/dir//Panchacharya+Kalyana+Mantpa,+Maniyur,+Chitradurga,+Karnataka+577501/@14.2190001,76.4115013,938m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x3bba75aa6bfc75fb:0x7e1bb543e4e7af42!2m2!1d76.4140499!2d14.2189766!3e0?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D")}>
          <img className="map" src={map} alt="map" />
          Open Map</button>
      </div>
    </section>
      <div>
                  <img className="border-map-ev" src={border} alt="" />
          </div>
          </>
  );
};

export default EventDetails;
