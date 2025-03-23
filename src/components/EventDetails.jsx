import "./EventDetails.css";
import Wed1 from '../assets/wed-ring.png'
import Wed2 from '../assets/web-flow.png'
import ring from '../assets/wedding-ring.png'
import table from '../assets/dinner-table.png'
import map from '../assets/map.png'
const EventDetails = () => {
  return (
    <section className="events">
      <div className="event-card" style={{backgroundImage:`url(${Wed1})`}}>
      <div className="overlay-ev"></div>
      <img src={ring} alt="" />
        <h3>Wedding Ceremony</h3>
        <p>10:00 - 11:00</p>
        <h5>Sri Ram Kalyana Mantapa</h5>
        <p>Sri Ram Kalyana Mantapa, Chithradurga 577-501</p>
        <button onClick={()=>window.open("https://www.google.com/maps/place/Sri+Rama+Kalyana+Mantapa/@14.2203443,73.9825324,480190m/data=!3m1!1e3!4m10!1m2!2m1!1ssri+ram+kalyana!3m6!1s0x3bba75a80611c0b9:0xf35bc2b82ac7b13!8m2!3d14.2203443!4d76.4214972!15sCg9zcmkgcmFtIGthbHlhbmGSAQ13ZWRkaW5nX3ZlbnVl4AEA!16s%2Fg%2F11cn69k8x7?authuser=0&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D")}>
          <img className="map" src={map} alt="map" />
          Open Map</button>
      </div>
      <div className="event-card"  style={{backgroundImage:`url(${Wed2})`}}>
      <div className="overlay-ev"></div>
      <img src={table} alt="" />
        <h3>Wedding Party</h3>
        <p>10:00 - 11:00</p>
        <h5>Groom's House</h5>
        <p>Hosa Rangapura,sirigere, Chithradurga 577-501</p>
        <button onClick={()=>window.open("https://www.google.com/maps/place/Hosarangapura,+Karnataka+577541/@14.2898651,76.1606375,3750m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bba137dbc69c839:0xa196dd6813cb8d1d!8m2!3d14.288968!4d76.181272!16s%2Fg%2F11vj7hl6m?authuser=0&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D")}>
          <img className="map" src={map} alt="map" />
          Open Map</button>
      </div>
    </section>
  );
};

export default EventDetails;
