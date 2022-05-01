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
          </div>
        </div>
    }
    <div className="underline"></div>
  </>
  )
}

export default Projects