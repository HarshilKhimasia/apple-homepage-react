import { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);
  const collapsedCurtainRef = useRef(null);
  const menuGridRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.clientHeight);
    }
  }, [navRef]);
  const getMenuGridHeight = () => {
    if (menuGridRef.current) {
      return (
        menuGridRef.current.clientHeight +
        0.5 * menuGridRef.current.clientHeight
      );
    }
    return 0;
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(true);
  };
  return (
    <>
      <nav ref={navRef} className={isHovered ? "hovered" : ""}>
        <ul className="desk-ul">
          <li>
            <a href="https://www.apple.com/in/">
              <img
                src="/assets/logo-one.svg"
                height={"auto"}
                width={"16px"}
                alt="logo"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.apple.com/in/"
              onMouseEnter={() => setIsHovered(true)}
            >
              Store
            </a>
          </li>
          <li onMouseEnter={() => setIsHovered(true)}>
            <a href="https://www.apple.com/in/">Mac</a>
          </li>
          <li onMouseEnter={() => setIsHovered(true)}>
            <a href="https://www.apple.com/in/">iPad</a>
          </li>
          <li onMouseEnter={() => setIsHovered(true)}>
            <a href="https://www.apple.com/in/">iPhone</a>
          </li>
          <li onMouseEnter={() => setIsHovered(true)}>
            <a href="https://www.apple.com/in/">Watch</a>
          </li>
          <li onMouseEnter={() => setIsHovered(true)}>
            <a href="https://www.apple.com/in/">AirPods</a>
          </li>
          <li onMouseEnter={() => setIsHovered(true)}>
            <a href="https://www.apple.com/in/">TV & Home</a>
          </li>
          <li onMouseEnter={() => setIsHovered(true)}>
            <a href="https://www.apple.com/in/">Entertainment</a>
          </li>
          <li onMouseEnter={() => setIsHovered(true)}>
            <a href="https://www.apple.com/in/">Accessories</a>
          </li>
          <li onMouseEnter={() => setIsHovered(true)}>
            <a href="https://www.apple.com/in/">Support</a>
          </li>
          <li>
            <a href="https://www.apple.com/in/">
              <img
                src="/assets/search-icon.svg"
                height={"auto"}
                width={"17px"}
                alt="search-icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.apple.com/in/">
              <img
                src="/assets/bag-icon.svg"
                height={"auto"}
                width={"17px"}
                alt="search-icon"
              />
            </a>
          </li>
        </ul>
        <div className="mob-ul">
          <div
            className={`cross-block ${menuOpen ? "" : "hide"}`}
            onClick={toggleMenu}
          >
            <img
              src="/assets/cross-svgrepo-com.svg"
              height={"auto"}
              width={"17px"}
              alt="search-icon"
            />
          </div>
          <ul>
            <li>
              <img
                src="/assets/logo-one.svg"
                height={"auto"}
                width={"16px"}
                alt="logo"
              />
            </li>
          </ul>
          <ul>
            <li>
              <img
                src="/assets/search-icon.svg"
                height={"auto"}
                width={"17px"}
                alt="search-icon"
              />
            </li>
            <li>
              <img
                src="/assets/bag-icon.svg"
                height={"auto"}
                width={"17px"}
                alt="search-icon"
              />
            </li>
            <li
              className={`hamburger ${menuOpen ? "hide" : ""}`}
              onClick={toggleMenu}
            >
              <img
                src="/assets/menu-duo-md-svgrepo-com.svg"
                height={"auto"}
                width={"19px"}
                alt="menu-duo-md-svgrepo-com"
              />
            </li>
          </ul>
          <ul className={`full-menu ${menuOpen ? "show" : ""}`}>
            <li onClick={closeMenu}>Store</li>
            <li onClick={closeMenu}>Mac</li>
            <li onClick={closeMenu}>iPad</li>
            <li onClick={closeMenu}>iPhone</li>
            <li onClick={closeMenu}>Watch</li>
            <li onClick={closeMenu}>AirPods</li>
            <li onClick={closeMenu}>TV & Home</li>
            <li onClick={closeMenu}>Entertainment</li>
            <li onClick={closeMenu}>Accessories</li>
            <li onClick={closeMenu}>Support</li>
          </ul>
        </div>
      </nav>
      <div
        ref={collapsedCurtainRef}
        className={`collapsed-curtain ${isHovered ? "expanded" : ""}`}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div ref={menuGridRef} className="menuGrid">
          <div className="menu-col">
            <h6>Shop</h6>
            <ul className="big-list">
              <li>Shop the Latest</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Apple Watch</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div className="menu-col">
            <h6>Quick Links</h6>
            <ul className="small-list">
              <li>Shop Holiday Gifts</li>
              <li>Find a Store</li>
              <li>Order Status</li>
              <li>Ways to Buy</li>
            </ul>
          </div>
          <div className="menu-col">
            <h6>Shop Special Stores</h6>
            <ul className="small-list">
              <li>Education</li>
              <li>Business</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`behind-overlay ${isHovered ? "gos-on" : ""}`}></div>
      <style jsx>{`
        .collapsed-curtain {
          top: ${navHeight}px;
          left: 0;
        }

        .collapsed-curtain.expanded {
          height: ${getMenuGridHeight()}px;
        }

        .behind-overlay.gos-on {
          opacity: 1;
          height: 80%;
          transition: opacity 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
}

export default Navbar;
