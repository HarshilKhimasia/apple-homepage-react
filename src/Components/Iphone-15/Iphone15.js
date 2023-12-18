import "./Iphone15.scss";
function Iphone15() {
  return (
    <section className="iphone-15">
      <div className="content">
        <h2 className="head">iPhone 15</h2>
        <h3 className="sub-head">New camera. New design. Newphoria.</h3>
        <div className="links">
          <a href="#">
            Learn more
            <img
              src="./assets/chevron-right.svg"
              width={"22px"}
              alt="chevron-right"
            />
          </a>
          <a href="#">
            Buy
            <img
              src="./assets/chevron-right.svg"
              width={"22px"}
              alt="chevron-right"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Iphone15;
