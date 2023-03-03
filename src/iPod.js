import React from "react";
import Display from "./Display";
import Button from "./Button";

const Ipod = () =>{
    return (
        <div className="ipod-body" style={styles.body}>
            <Display/>
            <Button/>

    </div>
    )
    
}

const styles = {
    body:{
        display:'flex',
        flexDirection:'column',
        borderRadius:'15px 15px 15px 15px',
        boxShadow: 'inset 0px 10px 90px 29px rgb(0 0 0 / 30%)',
        marginTop: 30,
        height: 470,
        width: 280
    }
}

export default Ipod;