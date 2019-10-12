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
  const [educationDisplayArray, setEducationDisplayArray] = useState([]);
  const [projectsDisplayArray, setProjectsDisplayArray] = useState([]);

  /*const [displayData, setDisplayData] = useState([]);*/
  const experienceData = Data.Experience;
  const educationData = Data.Education;
  const projectsData = Data.Projects;
  useEffect(() => {
    function getDisplayArrays() {
      let tempArray = [];
      experienceData.map((item, index) => (tempArray[index] = true));
      setExperienceDisplayArray(tempArray);
      tempArray = [];
      educationData.map((item, index) => (tempArray[index] = true));
      setEducationDisplayArray(tempArray);
      tempArray = [];
      projectsData.map((item, index) => (tempArray[index] = true));
      setProjectsDisplayArray(tempArray);
    }
    getDisplayArrays();
  }, [experienceData, educationData, projectsData]);

  const reload = () =>{
    let tempArray = [...experienceDisplayArray]
    tempArray.map((item, index) => (tempArray[index] = true))
    setExperienceDisplayArray(tempArray)

    tempArray = [...educationDisplayArray]
    tempArray.map((item, index) => (tempArray[index] = true))
    setEducationDisplayArray(tempArray)

    tempArray = [...projectsDisplayArray]
    tempArray.map((item, index) => (tempArray[index] = true))
    setProjectsDisplayArray(tempArray)
  }

  return (
    <div className="App">
      <NavBar reloadFunction={reload} />
      {experienceDisplayArray.every(x => !x) ? (
        ""
      ) : (
        <h3 className="headers">Experience</h3>
      )}
      <div className="SlideContainer">
        {experienceData.map((item, index) => {
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

      {educationDisplayArray.every(x => !x) ? (
        ""
      ) : (
        <h3 className="headers">Education</h3>
      )}
      <div className="SlideContainer">
        {educationData.map((item, index) => {
          return educationDisplayArray[index] ? (
            <CvItem
              label={item.Label}
              date={item.Date}
              description={item.Description}
              detail={item.Detail}
              closeFunction={() => {
                let tempArray = [...educationDisplayArray];
                tempArray[index] = false;
                setEducationDisplayArray(tempArray);
              }}
              key={index}
            />
          ) : (
            ""
          );
        })}
      </div>

      {projectsDisplayArray.every(x => !x) ? (
        ""
      ) : (
        <h3 className="headers">Projects</h3>
      )}
      <div className="SlideContainer">
        {projectsData.map((item, index) => {
          return projectsDisplayArray[index] ? (
            <CvItem
              label={item.Label}
              date={item.Date}
              description={item.Description}
              detail={item.Detail}
              closeFunction={() => {
                let tempArray = [...projectsDisplayArray];
                tempArray[index] = false;
                setProjectsDisplayArray(tempArray);
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
