import React from 'react';
import { Body } from './body';
import { Joker } from './Joker';

export function Header(props) {
    return ( <div className="imageClass">
        <img src = "https://www.pixelstalk.net/wp-content/uploads/images1/Awesome-Harley-Quinn-Backgrounds-Hd.png" width="100%" height="100%" alt="harley"></img>
        <div className="col-lg-6" style={{ position: 'absolute', top: 300, left: 350, right: 10, bottom: 0, justifyContent: 'middle', alignItems: 'center', opacity: "0.5" }}><Joker/></div>
        
    </div>
    )
}
