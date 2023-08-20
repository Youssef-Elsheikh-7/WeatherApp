import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/Err404.scss";
import errImg from "../images/error404.png";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
function Err404(props) {
  const [lod, setLod] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLod(true);
    }, 1000);
  }, []);
  const backToHome = () => {
    localStorage.clear();
    window.location.reload(true);
  };
  return (
    <section className="err-404">
      {(() => {
        if (lod) {
          return (
            <>
              <img src={errImg} alt="Error404Image" />
              <div className="tex">City Is Not Found</div>
              <button
                className="backTh"
                onClick={() => {
                  backToHome();
                }}
              >
                Back To Home <FontAwesomeIcon icon={faHouse} />
              </button>
            </>
          );
        } else {
        }
      })()}
    </section>
  );
}
export default Err404;
