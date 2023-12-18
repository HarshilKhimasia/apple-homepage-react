import "./WatchProd.scss";
function WatchProd() {
  return (
    <div className="col watchProd">
      <div className="content">
        <h4 className="head">
          <img src="./assets/apple-watch-black.png" alt="apple-watch-black" />
        </h4>
        <h5 className="sub-head">Next-level adventure.</h5>
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

export default WatchProd;
