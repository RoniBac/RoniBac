import React from "react";
import AC from "./AC";
import PT from "./PT"
import RC from "./RC"
import CR from "./CR"

function SelFrame(nf){
  
  switch (nf) {
    case 1:
      return(<AC/>)

    case 2:
      return(<PT/>)

    case 3:
      return(<RC/>)

    case 4:
      return(<CR/>)
  
    default:
      break;
  }

}





function Frame(props) {
  const {naFrame,NaSection,ArFrame,Tex1,Tex2,NoSection} = props
  
  return(
    <div class="section">
    <section class={NaSection} id={NaSection}>
        <div class={ArFrame}>
            <h2><t class="alt">{Tex1}</t><t>{(" "+Tex2)}</t></h2>

            {SelFrame(NoSection)}

        </div>
    </section>
    </div>
  );
}


export default Frame;
