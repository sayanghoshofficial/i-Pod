import React from "react";

const Dropdown = () =>{
    return(
        <div className="dropbtn" style={styles.Dropdown}>
            <div className="dropbtn-div">Cover Flow</div>
            <div className="dropbtn-div">Music</div>
            <div className="dropbtn-div">Games</div>
            <div className="dropbtn-div">Settings</div>
            
        </div>
        
    )
}

const styles = {
    Dropdown:{
        width:'100%',
        height:'70%',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        fontSize:15,
    }
}

export default Dropdown;