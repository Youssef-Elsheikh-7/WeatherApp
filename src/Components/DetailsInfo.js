import { useEffect, useState } from "react";
import "../Style/DetailsInfo.scss";

import Clouds1 from "../images/Clouds1.jpg";
import Clouds2 from "../images/Clouds2.jpg";
import Clouds3 from "../images/Clouds3.jpg";
import Clear1 from "../images/Clear1.jpg";
import Clear2 from "../images/Clear2.jpg";
import Clear3 from "../images/Clear3.jpg";
import Drizzle1 from "../images/Drizzle1.jpg";
import Drizzle2 from "../images/Drizzle2.jpg";
import Mist1 from "../images/Mist1.jpg";
import Mist2 from "../images/Mist2.jpg";
import Rain1 from "../images/Rain1.jpg";
import Rain2 from "../images/Rain2.jpg";
import Sand from "../images/Sand.jpg";
import Snow1 from "../images/Snow1.jpg";
import Snow2 from "../images/Snow2.jpg";
import Thunderstorm1 from "../images/Thunderstorm1.jpg";
import Thunderstorm2 from "../images/Thunderstorm2.jpg";
import Tornado from "../images/Tornado.jpg";
// icons of weather states
import ClearIc from "../images/icons/Clear.png";
import CloudsIc from "../images/icons/Clouds.png";
import SnowIc from "../images/icons/Snow.png";
import ThunderstormIc from "../images/icons/Thunderstorm.png";
import MistIc from "../images/icons/Mist.png";
import WindIc from "../images/icons/wind.png";
import RainIc from "../images/icons/Rain.png";
import SandIc from "../images/icons/Sand.png";
import TornadoIc from "../images/icons/tornado.png";

import Loader from "./Loader";
import SideBar from "./SideBar";
import { compile } from "sass";
import { cityName } from "./SideBar";
import Err404 from "./Err404";
// import DetailsComponents from "./DetailsComponents";

function DetailsInfo() {
  const [weather, setWeather] = useState({});
  const [loader, setLoader] = useState(false);
  const [catckErr, setCatckErr] = useState(false);
  // arrays of bg images
  const Clouds = [Clouds1, Clouds2, Clouds3];
  const Clear = [Clear1, Clear2, Clear3];
  const Drizzle = [Drizzle1, Drizzle2];
  const Mist = [Mist1, Mist2];
  const Rain = [Rain1, Rain2];
  const Snow = [Snow1, Snow2];
  const Thunderstorm = [Thunderstorm1, Thunderstorm2];
  // Date info
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentDate = new Date();
  const dayName = days[currentDate.getDay()];
  const currentMonth = months[currentDate.getMonth()];

  var pmAndAm = "AM";

  if (currentDate.getHours() > 12) {
    pmAndAm = "PM";
  } else {
    pmAndAm = "AM";
  }
  const time = `${
    currentDate.getHours() > 12
      ? currentDate.getHours() - 12
      : currentDate.getHours()
  }:${
    (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes()
  } ${pmAndAm}`;
  const daynum = currentDate.getDay();
  const year = currentDate.getFullYear();
  // Variable
  const apiKey = "0e96362e14e81e1f2ac020d4ebfd05be";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(URL);
      const json = await res.json();
      setWeather(json);
      setLoader(true);
    }
    fetchData();
    // fetch(URL)
    //   .then((response) => response.json())
    //   .then((data) => setWeather(data));
  }, []);

  // const im = `url(${imm})`;
  // const ig = `url(${igg})`;
  // const is = `url(${iss})`;
  // document.body.style.backgroundImage = is;
  // Math.random()
  return (
    <section className="weather-info">
      {(() => {
        if (weather.cod === 200) {
          if (!loader) {
            return <Loader />;
          } else {
            var imgPath = Clouds2;
            var iconf;
            if (weather.weather[0].main === "Clear") {
              imgPath = Clear[Math.round(Math.random() * 2)];
              iconf = ClearIc;
            } else if (weather.weather[0].main === "Clouds") {
              imgPath = Clouds[Math.round(Math.random() * 2)];
              iconf = CloudsIc;
            } else if (weather.weather[0].main === "Drizzle") {
              imgPath = Drizzle[Math.round(Math.random() * 1)];
              iconf = RainIc;
            } else if (weather.weather[0].main === "Mist") {
              imgPath = Mist[Math.round(Math.random() * 1)];
              iconf = MistIc;
            } else if (weather.weather[0].main === "Rain") {
              imgPath = Rain[Math.round(Math.random() * 1)];
              iconf = RainIc;
            } else if (weather.weather[0].main === "Sand") {
              imgPath = Sand;
              iconf = SandIc;
            } else if (weather.weather[0].main === "Snow") {
              imgPath = Snow[Math.round(Math.random() * 1)];
              iconf = SnowIc;
            } else if (weather.weather[0].main === "Thunderstorm") {
              imgPath = Thunderstorm[Math.round(Math.random() * 1)];
              iconf = ThunderstormIc;
            } else if (weather.weather[0].main === "Tornado") {
              imgPath = Tornado;
              iconf = TornadoIc;
            } else {
              imgPath = Clouds1;
              iconf = TornadoIc;
            }

            const is = `url(${imgPath})`;
            document.body.style.backgroundImage = is;

            return (
              <>
                <div className="deg">{Math.round(weather.main.temp)}°</div>
                <div className="cityInfo">
                  <div className="cityName">{weather.name}</div>
                  <p>
                    <span>{time}</span> - <span>{dayName}</span>,{" "}
                    <span> {daynum} </span>
                    <span>{currentMonth} </span>
                    <span>{year} </span>
                  </p>
                </div>
                <div className="weatherIcon">
                  <img src={iconf} alt="icon" />
                  <div className="description">{weather.weather[0].main}</div>
                </div>
                <SideBar dataApi={weather} />
              </>
            );
          }
        } else {
          return <Err404 data={weather} />;
        }
      })()}
    </section>
  );
}

export default DetailsInfo;

// <div className="deg">{weather && weather.main.feels_like} °</div>
//       <div className="cityInfo">
//         <div className="cityName">{weather && weather.name}</div>
//         <p>06:09 - Monday, 9 Sep '19</p>
//       </div>
//       <div className="weatherIcon">
//         <img src={iconf} alt="icon" />
//         <div className="description">{weather.weather.main}</div>
//       </div>

// window.location.reload(true)
