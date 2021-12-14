import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCubes, faDiceD6 } from '@fortawesome/free-solid-svg-icons'
import "./navigation.scss"

const Navigation = () => {
    return (
        <div className="nav">
            <div className="header">
                YouCi
            </div>
            <ul>
                <li className="item">
                    <span className="icon"><FontAwesomeIcon icon={faCoffee} /></span>
                    <a href="/" className="link">首页</a>
                </li>
                <li className="item">
                    <span className="icon"><FontAwesomeIcon icon={faCubes} /></span>
                    <a href="/category" className="link">类别</a>
                </li>
                <li className="item">
                    <span className="icon"><FontAwesomeIcon icon={faDiceD6} /></span>
                    <a href="/product" className="link">产品</a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation