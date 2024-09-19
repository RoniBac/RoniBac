import React from "react";
import imgper from "./img/R.png";
import imgbg from "./img/bg.png";
import user from "./icons/user.svg";
import leng from "./icons/leng.svg";
import loc from "./icons/loc.svg";
import hab from "./icons/hab.svg";
import Lista from "./GenNav/Lista";
import IMG from "./img/GenIm";


function GenDaPer(){
    let DaPer =[]

    const naClass=["nom","edad","idioma","lugar"]
    const texto=["Nombre","Edad","Idioma","Lugar"]
    const naClassIM=["iconsus","","iconsid","iconsl"]
    const Imgs=[user,0,leng,loc]

    for (let i = 0; i < naClass.length; i++) {
        DaPer[i] = <Lista Class={naClass[i]} texto={texto[i]} ClassIm={naClassIM[i]} Src={Imgs[i]} Alt="icon"/>
      }

    return DaPer;

}

function GenHab(){
    let Hab =[]

    const LisHab=["H1","H2","H3"]

    for (let i = 0; i < LisHab.length; i++) {
        Hab[i] = <Lista Class="" texto={LisHab[i]} ClassIm="" Src="" Alt=""/>
      }

    return Hab;

}


function AS(){
    return  <aside>
        <div class="imgs">
            <IMG  ClassIm="imgbg" Src={imgbg} Alt="icon"/>
            <IMG ClassIm="imgper" Src={imgper} Alt="icon"/>
        </div>
        <div class="info">
            <ul class="datosp">
                {GenDaPer()}
            </ul>
            <h3><IMG ClassIm= "iconsh" Src = {hab} Alt="icon"/> Habilidades:</h3>
            <ul>
                {GenHab()}
            </ul>  
        </div>
    </aside>
}

export default AS;