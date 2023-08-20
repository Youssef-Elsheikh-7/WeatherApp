import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../Style/Navba.scss";
import avatar from "../images/avatar.jpg";
function Navbar() {
  const addActiveClass = () => {
    document.querySelector(".side-bar").classList.add("barActive");
  };

  return (
    <section className="navbar">
      <div className="container">
        <div className="logo">the.weather</div>

        <button className="search-nav" onClick={() => addActiveClass()}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </section>
  );
}

export default Navbar;
// <a className="avatar" href="https://github.com/Youssef-Elsheikh-7">
// <img src={avatar} alt="avatar" />
// </a>
