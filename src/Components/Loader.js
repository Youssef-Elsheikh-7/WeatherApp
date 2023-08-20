import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import "../Style/Loader.scss";
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function Loader() {
  return (
    <section className="Loader-pa">
      <lord-icon
        src="https://cdn.lordicon.com/vnioezyi.json"
        trigger="loop"
        colors="outline:#fff,primary:#4bb3fd"
        style={{ width: "250px", height: "250px" }}
      ></lord-icon>
    </section>
  );
}

export default Loader;
