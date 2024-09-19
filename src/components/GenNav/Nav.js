import React from "react";
import Lista from './Lista';

function ListaNav(){
  let lista = []
  const ListaClass = ["Acerca De Mi","Portafolio","Resumen","Contactame"]
  const LisRef = ["ACT","PCT"]

  for (let index = 0; index < ListaClass.length; index++) {
    lista[index] = <Lista Class={ListaClass[index]} Href ={("#"+LisRef[index])} texto={ListaClass[index]} ClassIm="" Src="" Alt=""/> 
  }

  return lista;

}

function navegador(){
  return  <nav class="navegador">
            <ul class="menu">
              {ListaNav()}
            </ul>
        </nav>
    ;
}
export default navegador;