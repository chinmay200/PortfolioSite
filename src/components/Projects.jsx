import React, { useEffect, useState } from 'react'
import '../Styles/projects.css'
import HashLoader from "react-spinners/HashLoader";
import Card from './Card';

function Projects() {

  const height = 80;
  const [loader, setLoader] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Simple whether",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis dolore minus ut eligendi nesciunt tempora recusandae reprehenderit. Corporis, ullam szaepe.",
      link: "https://github.com/chinmay200/SimpleWheather"
    },
    {
      id: 2,
      title: "Rock-Paper-Scissors",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis dolore minus ut eligendi nesciunt tempora recusandae reprehenderit. Corporis, ullam szaepe.",
      link: "https://github.com/chinmay200/Rock-Paper-Scissors"
    },
    {
      id: 3,
      title: "Stackoverflown-Clone",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis dolore minus ut eligendi nesciunt tempora recusandae reprehenderit. Corporis, ullam szaepe.",
      link: "https://github.com/chinmay200/Stackoverflown-Clone"
    }
  ]

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
                My project<span>'s</span>
              </h1>
            </div>
            <div className="container">
              {projects.map((project) => {
                return (
                  <Card key={project.id} title={project.title} id={project.id} desc={project.desc} link={project.link} />
                )
              })}
            </div>
          </div>
        </div>
    }
    <div className="underline"></div>
  </>
  )
}

export default Projects