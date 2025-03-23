import Header from "./components/Header";
import CoupleSection from "./components/CoupleSection";
import CountdownTimer from "./components/CountdownTimer";
import EventDetails from "./components/EventDetails";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <CoupleSection />
      <CountdownTimer />
      <EventDetails />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
