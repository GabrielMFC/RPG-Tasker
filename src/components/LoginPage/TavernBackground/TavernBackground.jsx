import "./tavernBackground.css"
import { useState } from "react"
import ScrollIntro from "../scrollIntro/ScrollIntro"
export default function TavernBackground() {
    const [showScrollAnimation, setShowScrollAnimation] = useState(false)
    return(
        <div id="tavern-bg-container">
            <img id="tavern-bg" src="src/components/LoginPage/TavernBackground/tavernBackground.png" onAnimationEnd={() => setShowScrollAnimation(true)}/>

            {showScrollAnimation && (<ScrollIntro/>)}
        </div>
    )
}