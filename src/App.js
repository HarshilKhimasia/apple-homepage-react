import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Offer from "./Components/Offer/Offer";
import Iphone15Pro from "./Components/Iphone-15-pro/Iphone15pro";
import Iphone15 from "./Components/Iphone-15/Iphone15";
import Watch from "./Components/Watch/Watch";
import WonderAwaits from "./Components/Products/WonderAwaits/WonderAwaits";
import MacbookPro from "./Components/Products/MacbookPro/MacbookPro";
import WatchProd from "./Components/Products/Watch-prod/WatchProd";
import IpadProd from "./Components/Products/IpadProd/IpadPro";
import AirPodsPro from "./Components/Products/AirPodsPro/AirPodsPro";
import TradeIn from "./Components/Products/TradeIn/TradeIn";
import AutoSlide from "./Components/AutoSlide/AutoSlide";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Offer />
      <Iphone15Pro />
      <Iphone15 />
      <Watch />
      <section className="products">
        <div className="productsContainer">
          <WonderAwaits />
          <MacbookPro />
          <WatchProd />
          <IpadProd />
          <AirPodsPro />
          <TradeIn />
        </div>
      </section>
      <section>
        <AutoSlide />
      </section>
      <Footer />
    </>
  );
}

export default App;
