import React from 'react'
import '../Styles/home.css'

function Home() {
    return (
        <div className='heropage'>
            <div className="intro">
                <div className="greet-name">
                    <div className="greet">
                        <h1>Hi
                            <span>,I'</span>
                            m
                        </h1>
                    </div>
                    <div className="name">
                        <h2>Chinmay</h2>
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