import React from "react";
import Dropdown from "./Dropdown";


const Display =() =>{
    return(
        <div className="ipod-display">
            <div className="main">
                <div className="screen" style={styles.Screen}>
                    <div className="left-div" style={styles.Leftdiv}>
                            <h5>iPad.js</h5>
                            <Dropdown/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

const styles = ({
    Screen:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        width: 250,
        height: 230,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight:'auto',
        backgroundImage:'url("https://wallpaperaccess.com/full/636909.jpg")',
        backgroundSize:'cover'
    },
    Leftdiv:{
        width:'50%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        backgroundColor:'white',
        opacity: '.7',
        alignItems:'center'
    }
})
export default Display;