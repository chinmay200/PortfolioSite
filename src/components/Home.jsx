import React from 'react'
import '../Styles/home.css'

function Home() {
    return (
        <div className='page'>
            <div className="intro">
                <div className="greet-name">
                    <div className="greet">
                        <h1>Hi
                            <span className='animate__bounce'>,</span>
                            I<span >'</span>m
                        </h1>
                    </div>
                    <div className="name">
                        <h2>Ch<span>i</span>nmay</h2>
                    </div>
                    <div className="brief">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id numquam ab ipsum quis. Cumque quos placeat beatae alias incidunt similique totam explicabo, qui eum ipsa delectus deleniti unde veritatis quisquam.</p>
                    </div>
                </div>

            </div>
            <div className="underline"></div>
        </div>
    )
}

export default Home