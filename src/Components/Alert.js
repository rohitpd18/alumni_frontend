import React from "react";

export const Alert = (props) => {
  const capitalize=(word)=>{
    if(word==='danger'){
      word='error'
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1)
  }

  return (
    <div style={{position: "absolute", width: "100%", zIndex:10}}>
      {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.massage}
      </div>}
    </div>
  );
};
