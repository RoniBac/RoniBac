import React from "react";


function AC(props) {
  
  return(<div>
    <div class="AD1"> 
        <h3>PERFIL​:</h3>
        <p class="AD1T">Me considero responsable y capaz. Con conocimientos en redes, base de datos y programación orientada a objetos. En busca de desarrollar mis conocimientos y formarme profesionalmente.</p>
    </div>
        
    <div class="AD2">
        <h3>APTITUDES:</h3>
        <ul>
            <li>Creativo</li>
            <li>Facilidad de aprendizaje</li>
            <li>Resolucion de problemas</li>
        </ul>
    </div>

    <div class="AD3">
        <p><img class= "iconsl" src = "icons/cvd.svg" alt="icon"/><a class="down" download="CV Ronaldo Lopez" href="cv/CV-RLR.pdf" >&nbsp;Descargar CV</a></p>
    </div>
    </div>
  );
}

export default AC;
