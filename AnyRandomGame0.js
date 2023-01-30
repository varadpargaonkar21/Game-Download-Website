import { useState } from "react";
import React from "react";
import './AnyRandomGame0.css';
import Game1 from '../GamesPrice/AnyRandomGame0/Game1.js';


function AnyRandomGame0(props){


    const [showGameFirst, setShowGameFirst] = useState(false);
    

    return (
        

        <div>
        
        <h1>Section First</h1>
        
        <div className="right">

        <div className="line1">
            <button className="btn" id="g1" onClick={() => setShowGameFirst(true)}></button>
            <button className="btn" id="g2"></button>
            <button className="btn" id="g3"></button>
        </div>

        <div className="line2">
            <button className="btn" id="g4"></button>
            <button className="btn" id="g5"></button>
            <button className="btn" id="g6"></button>
        </div>

        <div className="line3">
            <button className="btn" id="g7"></button>
            <button className="btn" id="g8"></button>
            <button className="btn" id="g9"></button>
        </div>
        </div>

    {showGameFirst && <div><Game1/></div>}
    

        </div>
        
    )
}


export default AnyRandomGame0;