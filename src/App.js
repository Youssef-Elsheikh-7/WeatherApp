import { useEffect, useState } from "react";
import "./App.css";
import DetailsInfo from "./Components/DetailsInfo";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";

function App() {
  const [loadingPage, setLoadingPage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(true);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {(() => {
        if (loadingPage) {
          return (
            <>
              <Navbar />
              <DetailsInfo />
              <SideBar />
              <Footer />
            </>
          );
        } else {
          return <Loader />;
        }
      })()}
    </div>
  );
}

export default App;
