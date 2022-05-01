import React, { useState, useEffect } from 'react'
import HashLoader from "react-spinners/HashLoader";
import '../Styles/home.css'

function Home() {
    const height = 80;
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    } , [])

    return (
        <>
        <div className='page'>
            {
                loader ? 
                <HashLoader
                color={"#7209b7"} loading={loader} size={50} css={"width:100vw;height:"+height+"vh;display:flex;justify-content:center;align-items:center;"}/> :
                    <><div className="intro">
                        <div className="greet-name">
                            <div className="greet">
                                <h1>Hi
                                    <span>,</span>
                                    I<span>'</span>m
                                </h1>
                            </div>
                            <div className="name">
                                <h2>Ch<span>i</span>nmay</h2>
                            </div>
                            <div className="brief">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eum rerum deserunt aut quasi ratione rem sed iste ipsa ipsam consectetur commodi saepe distinctio, numquam provident consequuntur delectus molestias fuga.</p>
                            </div>
                        </div>

                    </div></>
            }
        </div>
        <div className="underline"></div></>
    )
}

export default Home