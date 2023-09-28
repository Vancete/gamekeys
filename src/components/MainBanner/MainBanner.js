import React, { useState, useEffect } from 'react'
import './MainBanner.scss'

export const MainBanner = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const bannerMovement = {
        back: {
            horizontalPercent: 5,
            verticalPercent: 5,
        },
        front: {
            horizontalPercent: 5,
            verticalPercent: 5,
            shadowHorizontalPercent: 5,
            horizontalPerspectiveDegrees: 7.5,
            verticalPerspectiveDegrees: 5,
        },
    }

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
                src="main-banner-back-cyb.jpg"
                style={{
                    right: `${-mousePosition.x * (bannerMovement.back.horizontalPercent / 100)}%`,
                    bottom: `${-mousePosition.y * (bannerMovement.back.verticalPercent / 100)}%`,
                }}
            ></img>
            <img
                className="front shadow"
                src="main-banner-front-cyb.png"
                style={{
                    right: `${mousePosition.x * (bannerMovement.front.horizontalPercent / 100)}%`,
                    top: `${-mousePosition.y * (bannerMovement.front.verticalPercent / 100)}%`,
                    filter: 'blur(16px) brightness(0) opacity(0.5)',
                    transform: `perspective(500px) translateX(${
                        bannerMovement.front.shadowHorizontalPercent -
                        mousePosition.x * (bannerMovement.front.shadowHorizontalPercent / 100)
                    }%) translateZ(-8px) rotateX(${
                        mousePosition.y * (bannerMovement.front.verticalPerspectiveDegrees / 100)
                    }deg) rotateY(${
                        -bannerMovement.front.horizontalPerspectiveDegrees +
                        mousePosition.x * (bannerMovement.front.horizontalPerspectiveDegrees / 100)
                    }deg)`,
                }}
            ></img>
            <img
                className="front"
                src="main-banner-front-cyb.png"
                style={{
                    right: `${mousePosition.x / 20}%`,
                    top: `${-mousePosition.y / 20}%`,
                    transform: `perspective(500px) rotateX(${mousePosition.y / 20}deg) rotateY(${
                        -7.5 + mousePosition.x / 13.33
                    }deg)`,
                }}
            ></img>
        </div>
    )
}
