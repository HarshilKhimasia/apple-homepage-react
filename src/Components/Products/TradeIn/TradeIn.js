import "./TradeIn.scss";
function TradeIn() {
  return (
    <div className="col TradeIn">
      <div className="content">
        <h4 className="head">
          <img src="./assets/trade-in-logo.png" alt="trade-in-logo" />
        </h4>
        <h5 className="sub-head">Upgrade and save. It’s that easy.</h5>
        <div className="link">
          <a href="#">
            See what your device is worth
            <img
              src="./assets/chevron-right.svg"
              width={"15px"}
              height={"25px"}
              alt="chevron-right"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TradeIn;
