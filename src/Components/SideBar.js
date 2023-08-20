import { useEffect, useState } from "react";
import "../Style/SideBar.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBar(props) {
  const [weatherProp, setWeatherProp] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setWeatherProp(props.dataApi);
    setLoading(true);
  }, []);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSideBar();
    }
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      putCity();
    }
  });
  const changeCountry = (e) => {
    localStorage.setItem("city", JSON.stringify(e.target.innerText));
    window.location.reload(true);
  };
  const closeSideBar = () => {
    document.querySelector(".side-bar").classList.remove("barActive");
  };
  const putCity = () => {
    if (document.getElementById("put").value !== "") {
      localStorage.setItem(
        "city",
        JSON.stringify(document.getElementById("put").value)
      );
      window.location.reload(true);
    }
  };
  return (
    <section className="side-bar">
      <button
        className="close-container"
        onClick={() => {
          closeSideBar();
        }}
      >
        <div className="leftright"></div>
        <div className="rightleft"></div>
      </button>
      <div className="cont">
        {(() => {
          if (!loading || weatherProp === undefined) {
            return <p>Loading...</p>;
          } else {
            return (
              <>
                <div className="city-form">
                  <input
                    className="input"
                    id="put"
                    placeholder="Another location"
                  />
                  <button
                    className="form-btn"
                    onClick={() => {
                      putCity();
                    }}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
                <div className="info-box">
                  <ul className="countries listUl">
                    <li className="listEl">
                      <button
                        onClick={(e) => {
                          changeCountry(e);
                        }}
                      >
                        Cairo
                      </button>
                    </li>
                    <li className="listEl">
                      <button
                        onClick={(e) => {
                          changeCountry(e);
                        }}
                      >
                        Palestine
                      </button>
                    </li>
                    <li className="listEl">
                      <button
                        onClick={(e) => {
                          changeCountry(e);
                        }}
                      >
                        Alexandria
                      </button>
                    </li>
                    <li className="listEl">
                      <button
                        onClick={(e) => {
                          changeCountry(e);
                        }}
                      >
                        Moscow
                      </button>
                    </li>
                    <li className="listEl">
                      <button
                        onClick={(e) => {
                          changeCountry(e);
                        }}
                      >
                        Berlin
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="info-box">
                  <p className="tit">Weather Details</p>
                  <ul className="countries listUl">
                    <li className="listEl">
                      <span>Cloudy</span>
                      <span>{weatherProp.clouds.all} %</span>
                    </li>
                    <li className="listEl">
                      <span>Humidity</span>
                      <span>{weatherProp.main.humidity} %</span>
                    </li>
                    <li className="listEl">
                      <span>Wind Speed</span>
                      <span>
                        {Math.round(weatherProp.wind.speed * 3.6)} km/h
                      </span>
                    </li>
                    <li className="listEl">
                      <span>pressure</span>
                      <span>{weatherProp.main.pressure} hPa</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="https://youssef-elsheikh-7.github.io/myPortfolio/"
                  className="button-27"
                >
                  Let's Talk
                </a>
              </>
            );
          }
        })()}
      </div>
    </section>
  );
}
export default SideBar;
export var cityName = localStorage.getItem("city")
  ? JSON.parse(localStorage.getItem("city"))
  : "cairo";
