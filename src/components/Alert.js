import React, {useState}from 'react';



export default function Alert(props) {
    console.log("Show", props.alert);
  return (
    
        props.alert && <div className={`alert alert-${props.alert.type} fade show`} role="alert">
            {props.alert.message}
        </div>
      
    
  );
}

