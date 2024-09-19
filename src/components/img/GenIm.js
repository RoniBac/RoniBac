import React from "react";


function GenIm(props) {
    const {ClassIm,Src,Alt} = props

  return(
    <img class={ClassIm} src={Src} alt={Alt}></img>
  );
}

export default GenIm;
