import DrawSprites from "../../../utils/drawingSprites/drawImage"
import { useEffect, useState } from "react"
import "./scroll.css"
import LoginPage from "../LoginPage"

function ScrollIntro() {
    const[showLoginPage, setShowLoginPage] = useState(false)

    setTimeout(() => {
        setShowLoginPage(true)
    }, 800);

    return (
        <div id="container" className="login-wrapper">
            <img style={{transform: "rotate(90deg) scale(18)"}}className="pergaminho-container" src="src/components/LoginPage/scrollIntro/animatedScroll.gif" alt="Scroll animation"/>

            <div className="flash-overlay" />
            {showLoginPage && (
                <div id="loginContainer">
                    <LoginPage/>
                </div>
            )}
        </div>
    )
}

export default ScrollIntro