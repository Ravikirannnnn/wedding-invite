import "./CoupleSection.css";
import Backround from '../assets/Circle.png'
import Male from '../assets/vishnu2.jpg'
import Female from '../assets/rashmi.jpg'
import fb from '../assets/Fb.png'
import insta from '../assets/Insta.png'

const CoupleSection = () => {
  return (
    <section className="couple">
      <h2>Meet The Happy Couple</h2>
      <span>With the blessings of our elders and the divine presence of the Almighty, <br />we begin this beautiful journey together.</span>
      <div className="couple-card">
        <div className="groom-info">
          <div className="profile-container">
          <img src={Male} alt="Groom" />
          <img className="lotus" src={Backround} alt="" />
          </div>
          <h3>Maruthi </h3>
          <span>Son of </span>
          <p>Gurusanthappa & Hanumanthamma</p>
          <img className="social" src={fb} alt="facebook" />
          <img className="social" src={insta} alt="instagram" />
        </div>
        <div className="groom-info">
        <div className="profile-container">
        <img src={Female} alt="Groom" />
        <img className="lotus" src={Backround} alt="" />
        </div>
          <h3>Manjula</h3>
          <span>Daughter of </span>
          <p>..........................</p>
          <img className="social" src={fb} alt="facebook" />
          <img className="social" src={insta} alt="instagram" />

        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
