import './Footer.css'
import DeveloperInfo from './DeveloperInfo';
import { useState } from 'react';
const Footer = () => {
  const [showDeveloper, setShowDeveloper] = useState(false);
  return (
    <footer className="footer">
      <p>© 2025 Maruthi & Manjula. All Rights Reserved.</p>
      {/* <p className='dev' onClick={()=>window.open("https://www.instagram.com/____mr_____nayaka______/")}>made by @RaviKiran</p> */}
      <p style={{cursor:'pointer'}} onClick={() => setShowDeveloper(true)}>made by @RaviKiran</p>
      <div>
      {showDeveloper && <DeveloperInfo onClose={() => setShowDeveloper(false)} />}
    </div>
    </footer>
  );
};

export default Footer;
