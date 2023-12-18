import "./Iphone15pro.scss";
function Iphone15Pro() {
  return (
    <section className="iphone-15-pro">
      <div className="content">
        <h2 className="head">iPhone 15 Pro</h2>
        <h3 className="sub-head">Titanium. So strong. So light. So Pro.</h3>
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

export default Iphone15Pro;
