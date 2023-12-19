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
          arrows: true,
          // Add any other options you may have here
        }}
        aria-labelledby="autoplay-example-heading"
        hasTrack={false}
      >
        <div style={{ position: "relative" }}>
          <SplideTrack>
            <SplideSlide>
              <div className="cistome-slide">
                <img
                  src="./assets/slide-1.jpg"
                  alt="slide-1"
                  className="lg-slide"
                />
                <img
                  src="./assets/slide-1-mob.jpg"
                  alt="slide-1-mob"
                  className="sm-slide"
                />
                <div class="inner">
                  <div class="info-top">
                    {/* <figure class="atv-plus-icon"></figure>
                    <figure
                      class="logo"
                      style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/qOsAe0YuSE0kbguTATsVLQ/548x165.png)"
                    ></figure> */}
                  </div>
                  <div class="info-bottom">
                    <div
                      class="custom-button play"
                      aria-label="Stream now, The Morning Show"
                    >
                      Stream now
                      <figure>
                        <img
                          src="../assets/play-circle-svgrepo-com.svg"
                          alt="play-circle-svgrepo-com"
                        />
                      </figure>
                    </div>
                    <p class="typography-shows-genre">
                      <span class="genre">Drama</span>
                      <span class="m-dot" aria-hidden="true">
                        &nbsp;·&nbsp;
                      </span>
                      Change is on the air.
                    </p>
                  </div>
                </div>
                <div class="outer">
                  <div class="info-top">
                    {/* <figure class="atv-plus-icon"></figure>
                    <figure
                      class="logo"
                      style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/qOsAe0YuSE0kbguTATsVLQ/548x165.png)"
                    ></figure> */}
                  </div>
                  <div class="info-bottom">
                    <p class="typography-shows-genre">
                      <span class="genre">
                        Drama<br></br>
                      </span>
                      Change is on the air.
                    </p>
                    <div
                      class="custom-button play"
                      aria-label="Stream now, The Morning Show"
                    >
                      Stream now
                      <figure>
                        <img
                          src="../assets/play-circle-svgrepo-com.svg"
                          alt="play-circle-svgrepo-com"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="cistome-slide">
                <img
                  src="./assets/slide-2.jpg"
                  alt="slide-2"
                  className="lg-slide"
                />
                <img
                  src="./assets/slide-2-mob.jpg"
                  alt="slide-2-mob"
                  className="sm-slide"
                />
                <div class="inner">
                  <div class="info-top">
                    {/* <figure class="atv-plus-icon"></figure>
                    <figure
                      class="logo"
                      style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/qOsAe0YuSE0kbguTATsVLQ/548x165.png)"
                    ></figure> */}
                  </div>
                  <div class="info-bottom">
                    <div
                      class="custom-button play"
                      aria-label="Stream now, The Morning Show"
                    >
                      Stream now
                      <figure>
                        <img
                          src="../assets/play-circle-svgrepo-com.svg"
                          alt="play-circle-svgrepo-com"
                        />
                      </figure>
                    </div>
                    <p class="typography-shows-genre">
                      <span class="genre">Drama</span>
                      <span class="m-dot" aria-hidden="true">
                        &nbsp;·&nbsp;
                      </span>
                      Change is on the air.
                    </p>
                  </div>
                </div>
                <div class="outer">
                  <div class="info-top">
                    {/* <figure class="atv-plus-icon"></figure>
                    <figure
                      class="logo"
                      style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/qOsAe0YuSE0kbguTATsVLQ/548x165.png)"
                    ></figure> */}
                  </div>
                  <div class="info-bottom">
                    <p class="typography-shows-genre">
                      <span class="genre">
                        Drama<br></br>
                      </span>
                      Change is on the air.
                    </p>
                    <div
                      class="custom-button play"
                      aria-label="Stream now, The Morning Show"
                    >
                      Stream now
                      <figure>
                        <img
                          src="../assets/play-circle-svgrepo-com.svg"
                          alt="play-circle-svgrepo-com"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="cistome-slide">
                <img
                  src="./assets/slide-3.jpg"
                  alt="slide-3"
                  className="lg-slide"
                />
                <img
                  src="./assets/slide-3-mob.jpg"
                  alt="slide-3-mob"
                  className="sm-slide"
                />
                <div class="inner">
                  <div class="info-top">
                    {/* <figure class="atv-plus-icon"></figure>
                    <figure
                      class="logo"
                      style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/qOsAe0YuSE0kbguTATsVLQ/548x165.png)"
                    ></figure> */}
                  </div>
                  <div class="info-bottom">
                    <div
                      class="custom-button play"
                      aria-label="Stream now, The Morning Show"
                    >
                      Stream now
                      <figure>
                        <img
                          src="../assets/play-circle-svgrepo-com.svg"
                          alt="play-circle-svgrepo-com"
                        />
                      </figure>
                    </div>
                    <p class="typography-shows-genre">
                      <span class="genre">Drama</span>
                      <span class="m-dot" aria-hidden="true">
                        &nbsp;·&nbsp;
                      </span>
                      Change is on the air.
                    </p>
                  </div>
                </div>
                <div class="outer">
                  <div class="info-top">
                    {/* <figure class="atv-plus-icon"></figure>
                    <figure
                      class="logo"
                      style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/qOsAe0YuSE0kbguTATsVLQ/548x165.png)"
                    ></figure> */}
                  </div>
                  <div class="info-bottom">
                    <p class="typography-shows-genre">
                      <span class="genre">
                        Drama<br></br>
                      </span>
                      Change is on the air.
                    </p>
                    <div
                      class="custom-button play"
                      aria-label="Stream now, The Morning Show"
                    >
                      Stream now
                      <figure>
                        <img
                          src="../assets/play-circle-svgrepo-com.svg"
                          alt="play-circle-svgrepo-com"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="cistome-slide">
                <img
                  src="./assets/slide-4.jpg"
                  alt="slide-4"
                  className="lg-slide"
                />
                <img
                  src="./assets/slide-4-mob.jpg"
                  alt="slide-4-mob"
                  className="sm-slide"
                />
                <div class="inner">
                  <div class="info-top">
                    {/* <figure class="atv-plus-icon"></figure>
                    <figure
                      class="logo"
                      style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/qOsAe0YuSE0kbguTATsVLQ/548x165.png)"
                    ></figure> */}
                  </div>
                  <div class="info-bottom">
                    <div
                      class="custom-button play"
                      aria-label="Stream now, The Morning Show"
                    >
                      Stream now
                      <figure>
                        <img
                          src="../assets/play-circle-svgrepo-com.svg"
                          alt="play-circle-svgrepo-com"
                        />
                      </figure>
                    </div>
                    <p class="typography-shows-genre">
                      <span class="genre">Drama</span>
                      <span class="m-dot" aria-hidden="true">
                        &nbsp;·&nbsp;
                      </span>
                      Change is on the air.
                    </p>
                  </div>
                </div>
                <div class="outer">
                  <div class="info-top">
                    {/* <figure class="atv-plus-icon"></figure>
                    <figure
                      class="logo"
                      style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/qOsAe0YuSE0kbguTATsVLQ/548x165.png)"
                    ></figure> */}
                  </div>
                  <div class="info-bottom">
                    <p class="typography-shows-genre">
                      <span class="genre">
                        Drama<br></br>
                      </span>
                      Change is on the air.
                    </p>
                    <div
                      class="custom-button play"
                      aria-label="Stream now, The Morning Show"
                    >
                      Stream now
                      <figure>
                        <img
                          src="../assets/play-circle-svgrepo-com.svg"
                          alt="play-circle-svgrepo-com"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="cistome-slide">
                <img
                  src="./assets/slide-5.jpg"
                  alt="slide-5"
                  className="lg-slide"
                />
                <img
                  src="./assets/slide-5-mob.jpg"
                  alt="slide-5-mob"
                  className="sm-slide"
                />
                <div class="inner">
                  <div class="info-top">
                    {/* <figure class="atv-plus-icon"></figure>
                    <figure
                      class="logo"
                      style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/qOsAe0YuSE0kbguTATsVLQ/548x165.png)"
                    ></figure> */}
                  </div>
                  <div class="info-bottom">
                    <div
                      class="custom-button play"
                      aria-label="Stream now, The Morning Show"
                    >
                      Stream now
                      <figure>
                        <img
                          src="../assets/play-circle-svgrepo-com.svg"
                          alt="play-circle-svgrepo-com"
                        />
                      </figure>
                    </div>
                    <p class="typography-shows-genre">
                      <span class="genre">Drama</span>
                      <span class="m-dot" aria-hidden="true">
                        &nbsp; · &nbsp;
                      </span>
                      Change is on the air.
                    </p>
                  </div>
                </div>
                <div class="outer">
                  <div class="info-top">
                    {/* <figure class="atv-plus-icon"></figure>
                    <figure
                      class="logo"
                      style="background-image: url(https://is1-ssl.mzstatic.com/image/thumb/qOsAe0YuSE0kbguTATsVLQ/548x165.png)"
                    ></figure> */}
                  </div>
                  <div class="info-bottom">
                    <p class="typography-shows-genre">
                      <span class="genre">
                        Drama<br></br>
                      </span>
                      Change is on the air.
                    </p>
                    <div
                      class="custom-button play"
                      aria-label="Stream now, The Morning Show"
                    >
                      Stream now
                      <figure>
                        <img
                          src="../assets/play-circle-svgrepo-com.svg"
                          alt="play-circle-svgrepo-com"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
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
