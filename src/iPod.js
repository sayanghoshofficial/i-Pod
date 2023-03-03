import React from "react";
import ZingTouch from "zingtouch";
import Display from "./Display";
import Button from "./Button";
import Song from "./assets/music/Laal_Ishq.mp3"

class Ipod extends React.Component{
    constructor(){
        super();
        this.state = {
            activeItem : 'Now Playing',
            activePage : 'Home',
            enter: 0,
            play: true
        }
    }

    rotateWheel = () =>{
        var iPodButton = document.getElementsByClassName("ipod-button");
        var activeRegion = new ZingTouch.Region(iPodButton);
        console.log(activeRegion);
    }
    render() {
        return(
            <div className="ipod-body" style={styles.body}>
                <audio className="audio">
                    <source src={Song}></source>
                </audio>
            <Display 
                activeItem={this.state.activeItem} 
                activePage={this.state.activePage} 
                audio={this.state.audio}
            />
            <Button
                onMouseOver={this.rotateWheel}
                onClick={this.changePageToHomeScreen}
            />

            </div>
        )
    }
}

const styles = {
    body:{
        display:'flex',
        flexDirection:'column',
        borderRadius:25,
        boxShadow: 'inset 0px 10px 90px 29px rgb(0 0 0 / 30%)',
        marginTop: 30,
        height: 470,
        width: 280
    }
}

export default Ipod;