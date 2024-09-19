import React from "react";


function Lista(props) {
    const {Class,Href,texto,ClassIm,Src,Alt} = props

    if(ClassIm ==""){
      console.log("sin imagen")
      return(
        <li class={Class}><a href={Href}>{texto}</a></li>
      );
      

    }else{
      console.log("con imagen")
        return(
          <li class={Class}><img class={ClassIm} src={Src} alt={Alt}/>{texto}</li>
      );
      
    }
}

export default Lista;
