import border from "../assets/border.png"
import "./MapSection.css"

const MapSection = () => {
  const widthStyle = window.innerWidth <= 800 ? "100%" : "70%";
  return (
    
    <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084.1305747431297!2d76.41150126083326!3d14.219000086247593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba75aa6bfc75fb%3A0x7e1bb543e4e7af42!2sPanchacharya%20Kalyana%20Mantpa%2C%20Maniyur%2C%20Chitradurga%2C%20Karnataka%20577501!5e1!3m2!1sen!2sin!4v1744530279455!5m2!1sen!2sin"
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        height="300"
        width={widthStyle}
        style={{ border: "0",borderRadius:'30px', }}
        allowFullScreen
      ></iframe>
      <div>
              <img className="border-map" src={border} alt="" />
      </div>
      
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084.1062005424897!2d76.41891691083329!3d14.220349486215309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba75a80611c0b9%3A0xf35bc2b82ac7b13!2sSri%20Rama%20Kalyana%20Mantapa!5e1!3m2!1sen!2sin!4v1742720046282!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
  );
};

export default MapSection;
