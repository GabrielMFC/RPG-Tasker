import DrawSprites from "../../../utils/drawingSprites/drawImage"
import { useEffect, useState } from "react"
import "./scroll.css"
import LoginPage from "../LoginPage"

function ScrollIntro() {
    const[showLoginPage, setShowLoginPage] = useState(false)

    return (
        <div id="container" className="login-wrapper">
            <img className="pergaminho-container" src="src/components/LoginPage/scrollIntro/AncientBannerAnimation.gif" alt="Scroll animation" onAnimationEnd={() => setShowLoginPage(true)}/>
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