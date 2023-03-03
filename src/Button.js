import React from "react";


const Button = () =>{
    return (
        <div className="ipod-button" style={styles.Button}>
            <div className="keys">
            {/* <!--nav keys--> */}
          
          <span className="menu-btn">MENU</span>
        
          <img className="fwd" src="https://cdn2.iconfinder.com/data/icons/snipicons/5000/fast-forward-256.png"/>
          
          <img className="bkd" src="https://cdn2.iconfinder.com/data/icons/snipicons/5000/fast-backward-128.png"/>
          
          <img className="play-pause" src="https://user-images.githubusercontent.com/99132893/222653735-fd1d9359-c2f9-4732-a2af-aefc252b6388.png"/>
        
          <div className="play">
          </div>

            </div>
        </div>
    )
}

const styles = {
    Button :{
        top:134,
        position:'relative',
        borderRadius:'0px 0px 15px 15px',
       
    }
}

export default Button;