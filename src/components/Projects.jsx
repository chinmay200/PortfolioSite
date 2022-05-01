import React, { useEffect, useState } from 'react'
import '../Styles/projects.css'
import HashLoader from "react-spinners/HashLoader";

function Projects() {

  const height = 80;
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }, [])

  return (<>
    {
      loader ? <HashLoader color={"#7209b7"} loading={loader} size={50} css={"width:100vw;height:" + height + "vh;display:flex;justify-content:center;align-items:center;"} /> :
        <div className='page'>
          <div className="projects">
            <div className="head">
              <h1>
                My project<span>s</span> 
              </h1>
            </div>
            <div className="container">
              <div className="card">
                <div className="circle">
                  <h2>Simple Wheather</h2>
                  <h1>#1</h1>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis dolore minus ut eligendi nesciunt tempora recusandae reprehenderit. Corporis, ullam saepe.</p>
                  <a className='hyperbtn' href="https://github.com/chinmay200/SimpleWheather" target={"_blank"} rel="noreferrer">Project Link</a>

                </div>
              </div>

              <div className="card">
                <div className="circle">
                  <h2>Rock-Paper-Sci</h2>
                  <h1>#2</h1>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis dolore minus ut eligendi nesciunt tempora recusandae reprehenderit. Corporis, ullam saepe.</p>
                  <a className='hyperbtn' href="https://github.com/chinmay200/Rock-Paper-Scissors" target={"_blank"} rel="noreferrer">Project Link</a>
                </div>
              </div>

              <div className="card">
                <div className="circle">
                  <h2>StackOverflow-Clone</h2>
                  <h1>#3</h1>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis dolore minus ut eligendi nesciunt tempora recusandae reprehenderit. Corporis, ullam saepe.</p>
                  <a className='hyperbtn' href="https://github.com/chinmay200/Stackoverflown-Clone" target={"_blank"} rel="noreferrer">Project Link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    }
    <div className="underline"></div>
  </>
  )
}

export default Projects