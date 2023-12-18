import "./AutoSlide.scss";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function AutoSlide() {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: "auto",
  };

  return (
    <div className="wrapper">
      <h2 id="autoplay-example-heading">Autoplay</h2>
      <Splide
        options={options}
        aria-labelledby="autoplay-example-heading"
        hasTrack={false}
      >
        <div style={{ position: "relative" }}>
          <SplideTrack>
            <SplideSlide>
              <img src="./assets/slide-1.jpg" alt="slide-1" />
            </SplideSlide>
            <SplideSlide>
              <img src="./assets/slide-2.jpg" alt="slide-2" />
            </SplideSlide>
            <SplideSlide>
              <img src="./assets/slide-3.jpg" alt="slide-3" />
            </SplideSlide>
            <SplideSlide>
              <img src="./assets/slide-4.jpg" alt="slide-4" />
            </SplideSlide>
            <SplideSlide>
              <img src="./assets/slide-5.jpg" alt="slide-5" />
            </SplideSlide>
          </SplideTrack>
        </div>

        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>

        <button className="splide__toggle">
          <span className="splide__toggle__play">Play</span>
          <span className="splide__toggle__pause">Pause</span>
        </button>
      </Splide>
    </div>
  );
}

export default AutoSlide;
