import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Data from "./Data.json";

import CvItem from "./CvItem";
import NavBar from "./NavBar";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";



function App() {
  
  const tempArray = [];
  const [displayArray, setDisplayArray] = useState([]);
  
  Object.keys(Data).map((item, index) => {
    tempArray.push(Data[item])
    return null
  })
  
  const dataArray = [...tempArray];

  /*const [displayData, setDisplayData] = useState([]);*/
  
  useEffect(() => {
    function getDisplayArrays() {
      let displayArrays = [];
      dataArray.map((data, index) => {
        let tempArray = [];
        data.map((item, i) => (tempArray[i] = true));
        displayArrays[index] = tempArray;
        return null;
      })
      setDisplayArray(displayArrays);
    }
    getDisplayArrays();
    // eslint-disable-next-line
  }, []);
  
  const reload = () =>{
    
    let tempDisplayArrays = [];
    displayArray.map((array, i) => {
      let tempArray = [...displayArray[i]]
      tempArray.map((item, index) => (tempArray[index] = true))
      tempDisplayArrays.push(tempArray);
      return null;
    })
    setDisplayArray(tempDisplayArrays)
  }
  return (
    <div className="App">
      <NavBar reloadFunction={reload} />
      
      {displayArray.map((array, i) => {

        return (
          array.every(x => !x) ? (
            ""
          ) : (
            <div key={Object.keys(Data)[i]}>
            <h3 className="headers" >{Object.keys(Data)[i]}</h3>
          <div className="SlideContainer">
            {dataArray[i].map((item, index) => {
              return (displayArray[i][index] ? (
                <CvItem
                  label={item.Label}
                  date={item.Date}
                  description={item.Description}
                  detail={item.Detail}
                  imageSrc={item.ImageSrc}
                  closeFunction={() => {
                    let tempArray = [...displayArray];
                    tempArray[i][index] = false;
                    setDisplayArray(tempArray);
                  }}
                  key={index}
                />
              ) : (
                ""
              ))
            })}
          </div>
          </div>
          )
        )
      })}

      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
