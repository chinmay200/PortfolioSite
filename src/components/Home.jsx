import React, { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import "../Styles/home.css";
import react from '../Styles/react.png'
import php from '../Styles/php.png'
import java from '../Styles/java.png'
import andriod from '../Styles/android.png'
 
function Home() {
  const height = 80;
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="page">
        {loader ? (
          <HashLoader
            color={"#000000"}
            loading={loader}
            size={50}
            css={
              "width:100vw;height:" +
              height +
              "vh;display:flex;justify-content:center;align-items:center;"
            }
          />
        ) : (
          <>
            <div className="intro">
              <div className="greet-name">
                <div className="greet">
                  <h1>
                    Hi
                    <span>,</span>I<span>'</span>m
                  </h1>
                </div>
                <div className="name">
                  <h2>
                    Ch<span>i</span>nmay
                  </h2>
                </div>
                <div className="brief">
                  <p>
                    I am a undergraduate student in Computer Science based in New Delhi,
                    who's passionate about developing web and mobile native apps.
                    <br/> 
                    With experience in development using
                  </p>
                  <div className="skills">
                    <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">
                      <img src={react} alt="" srcset="" className="skill"/>
                    </a>
                    <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">
                      <img src={php} alt="" srcset="" className="skill"/>
                    </a>
                    <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">
                      <img src={java} alt="" srcset="" className="skill"/>
                    </a>
                    <a href="https://www.android.com/intl/en_in/" target="_blank" rel="noopener noreferrer">
                      <img src={andriod} alt="" srcset="" className="skill"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="underline"></div>
    </>
  );
}

export default Home;
