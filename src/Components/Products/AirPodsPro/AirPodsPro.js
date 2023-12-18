import "./AirPodsPro.scss";
function AirPodsPro() {
  return (
    <div className="col AirPodsPro">
      <div className="content">
        <h4 className="head">AirPods Pro</h4>
        <h5 className="sub-head">Adaptive Audio. Now playing.</h5>
        <div className="link">
          <a href="#">
            Learn More
            <img
              src="./assets/chevron-right.svg"
              width={"15px"}
              height={"20px"}
              alt="chevron-right"
            />
          </a>
          <a href="#" className="right-link">
            Buy
            <img
              src="./assets/chevron-right.svg"
              width={"15px"}
              height={"20px"}
              alt="chevron-right"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AirPodsPro;
