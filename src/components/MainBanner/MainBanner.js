'use client'

import React, { useState, useEffect } from 'react'
import './MainBanner.scss'

export const MainBanner = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            const windowWidth = window.innerWidth
            const windowHeight = window.innerHeight
            const mouseX = e.pageX
            const mouseY = e.pageY

            const xPercentage = (mouseX / windowWidth) * 100
            const yPercentage = (mouseY / windowHeight) * 100

            setMousePosition({ x: xPercentage, y: yPercentage })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div className="main-banner">
            <div className="content">
                <h1>
                    <span>
                        The best <b>games</b>
                    </span>
                    <span>
                        at better <b>prices</b>
                    </span>
                </h1>
                <h2>
                    Buy the cheapest CD keys of your favourite
                    <br />
                    games at the cheapest prices on internet
                </h2>
            </div>
            <img
                className="back"
                src="main-banner-back.png"
                style={{
                    right: `${-mousePosition.x / 40}%`,
                    bottom: `${-mousePosition.y / 40}%`,
                }}
            ></img>
            <img
                className="front"
                src="main-banner-front.png"
                style={{
                    right: `${mousePosition.x / 20}%`,
                    top: `${-mousePosition.y / 20}%`,
                }}
            ></img>
        </div>
    )
}
