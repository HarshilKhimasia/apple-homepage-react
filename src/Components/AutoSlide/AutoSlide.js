import "./AutoSlide.scss";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function AutoSlide() {
  const options = {
    type: "loop",
    gap: "1rem",
    speed: 1000,
    easing: "cubic-bezier(.42,0,.58,1) ",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: "auto",
  };

  return (
    <div className="wrapper">
      <Splide
        options={{
          ...options, // Keep your existing options
          perPage: 1.5,
          focus: "center",
          arrows: false,
          // Add any other options you may have here
        }}
        aria-labelledby="autoplay-example-heading"
        hasTrack={false}
      >
        <div style={{ position: "relative" }}>
          <SplideTrack>
            <SplideSlide>
              <div className="cistome-slide">
                <img src="./assets/slide-1.jpg" alt="slide-1" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="cistome-slide">
                <img src="./assets/slide-2.jpg" alt="slide-2" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="cistome-slide">
                <img src="./assets/slide-3.jpg" alt="slide-3" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="cistome-slide">
                <img src="./assets/slide-4.jpg" alt="slide-4" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="cistome-slide">
                <img src="./assets/slide-5.jpg" alt="slide-5" />
              </div>
            </SplideSlide>
          </SplideTrack>
        </div>

        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>

        <button className="splide__toggle">
          <img
            src="./assets/play-svgrepo-com.svg"
            className="splide__toggle__play"
            alt="play-svgrepo-com"
            width={"25px"}
            height={"25px"}
          />

          <img
            src="./assets/pause-circle-svgrepo-com.svg"
            className="splide__toggle__pause"
            alt="pause-circle-svgrepo-com"
            width={"25px"}
            height={"25px"}
          />
        </button>
      </Splide>
    </div>
  );
}

export default AutoSlide;
