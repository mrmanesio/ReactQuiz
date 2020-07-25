import React from 'react'
import classes from "./BackDrop.module.css"

const BackDrop = props => <div 
        className = {classes.Backdrop}
        onClick = {props.onClick}
        > 
     </div>


export default BackDrop;