import React, { useState, useEffect } from 'react'
import "./Home.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCubes, faDiceD6 } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
    return (
        <div className="home">
            <div className="nav">
                <div className="header">
                    YouCi
                </div>
                <ul>
                    <li className="item">
                        <span className="icon"><FontAwesomeIcon icon={faCoffee} /></span>
                        <a href="#" className="link">首页</a>
                    </li>
                    <li className="item">
                        <span className="icon"><FontAwesomeIcon icon={faCubes} /></span>
                        <a href="#" className="link">类别</a>
                    </li>
                    <li className="item">
                        <span className="icon"><FontAwesomeIcon icon={faDiceD6} /></span>
                        <a href="#" className="link">产品</a>
                    </li>
                </ul>
            </div>
            <div className="window">2</div>
        </div>
    )
}

export default Home