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
                  <h2>01</h2>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis dolore minus ut eligendi nesciunt tempora recusandae reprehenderit. Corporis, ullam saepe.</p>
                  <a href="https://github.com/chinmay200" target={"_blank"}>Project Link</a>
                </div>
              </div>

              <div className="card">
                <div className="circle">
                  <h2>01</h2>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis dolore minus ut eligendi nesciunt tempora recusandae reprehenderit. Corporis, ullam saepe.</p>
                  <a href="https://github.com/chinmay200" target={"_blank"}>Project Link</a>
                </div>
              </div>

              <div className="card">
                <div className="circle">
                  <h2>01</h2>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis dolore minus ut eligendi nesciunt tempora recusandae reprehenderit. Corporis, ullam saepe.</p>
                  <a href="https://github.com/chinmay200" target={"_blank"}>Project Link</a>
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