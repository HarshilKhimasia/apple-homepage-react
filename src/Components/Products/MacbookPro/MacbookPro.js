import "./MacbookPro.scss";
function MacbookPro() {
  return (
    <div className="col macbookpro">
      <div className="content">
        <h4 className="head">MacBook Pro</h4>
        <h5 className="sub-head">Mind-blowing. Head-turning.</h5>
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

export default MacbookPro;
