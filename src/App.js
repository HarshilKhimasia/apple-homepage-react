import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Offer from "./Components/Offer/Offer";
import Iphone15Pro from "./Components/Iphone-15-pro/Iphone15pro";
import Iphone15 from "./Components/Iphone-15/Iphone15";
import Watch from "./Components/Watch/Watch";

function App() {
  return (
    <>
      <Navbar />
      <Offer />
      <Iphone15Pro />
      <Iphone15 />
      <Watch />
    </>
  );
}

export default App;
