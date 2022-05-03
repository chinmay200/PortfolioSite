import React from 'react'
import '../Styles/card.css'

export default function Card(props) {
    return (
        <div className="card">
            <div className="circle">
                <h2>{props.title}</h2>
                <h1>#{props.id}</h1>
            </div>
            <div className="content">
                <p>{props.desc}</p>
                <a className='hyperbtn' href={props.link} target={"_blank"} rel="noreferrer">Project Link</a>

            </div>
        </div>
    )
}
