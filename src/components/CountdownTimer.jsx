import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import border from '../assets/border.png'

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const weddingDate = new Date("2025-05-08T00:00:00").getTime();
    const now = new Date().getTime();
    const diff = weddingDate - now;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <img className="border" src={border} alt="" />
      <h2>We're Getting Married</h2>
      <h3>The Countdown to Forever Begins</h3>
      <p>By seeking the grace and blessings of Lord Ganesha, we are delighted to announce the wedding of <br /> our son and daughter, which, with divine will, will take place on:</p>
      <h1>08 May 2025</h1>
      <div className="timer">
        <span>{timeLeft.days}
        <h5>D</h5>        
          </span>
        <span>{timeLeft.hours}
        <h5>H</h5>
          </span>
        <span>{timeLeft.minutes}
        <h5>M</h5>
        </span>
        <span>{timeLeft.seconds}
        <h5>S</h5>
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
