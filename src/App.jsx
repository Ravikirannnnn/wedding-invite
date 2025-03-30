import Header from "./components/Header";
import CoupleSection from "./components/CoupleSection";
import CountdownTimer from "./components/CountdownTimer";
import EventDetails from "./components/EventDetails";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import "./App.css";
import Gallery from "./components/Gallery";
import Quickball from "./components/Quickball";

function App() {
  return (
    <div>
      <Header />
      <CoupleSection />
      <Gallery/>
<Quickball/>
      <CountdownTimer />
      <EventDetails />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
