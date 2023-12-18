import "./IpadProd.scss";
function IpadProd() {
  return (
    <div className="col ipad-prod">
      <div className="content">
        <h4 className="head">iPad</h4>
        <h5 className="sub-head">Lovable. Drawable. Magical.</h5>
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

export default IpadProd;
