import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Map from "./components/Map";
import Testimony from "./components/Testimony";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Map />
      <Testimony />
      <Footer />
    </>
  );
}

export default App;
