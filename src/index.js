import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Data from "./Data.json";

import CvItem from "./CvItem";
import NavBar from "./NavBar";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  const [experienceDisplayArray, setExperienceDisplayArray] = useState([]);
  /*const [displayData, setDisplayData] = useState([]);*/
  const displayData = Data.Experience;
  useEffect(() => {
    function getDisplayArrayExperience() {
      let tempArray = [];
      displayData.map((item, index) => (tempArray[index] = true));
      setExperienceDisplayArray(tempArray);
    }
    getDisplayArrayExperience();
  }, [displayData]);

  return (
    <div className="App">
      <NavBar />
      {experienceDisplayArray.every(x => !x) ? (
        ""
      ) : (
        <h3 className="headers">Experience</h3>
      )}
      <div className="SlideContainer">
        {displayData.map((item, index) => {
          return experienceDisplayArray[index] ? (
            <CvItem
              label={item.Label}
              date={item.Date}
              description={item.Description}
              detail={item.Detail}
              closeFunction={() => {
                let tempArray = [...experienceDisplayArray];
                tempArray[index] = false;
                setExperienceDisplayArray(tempArray);
              }}
              key={index}
            />
          ) : (
            ""
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
