import React from "react";
import Navbar from "../Navbar/Navbar";
import FooterLot from "../Footer/Footer";
import InputTicket from './InputTicket'
import "../ComoJugar/ComoJugar.css";
import "./EresGanador.css"

export default function EresGanador() {

  return (
    <div className="contenedorglobal" >
      <Navbar />
<br></br>
      <InputTicket/>

      <div className="containerprincipal" style={{display:"flex", alignItems:"center"}}>
        <div className="quiniela-info1">
          <div className="section">
            <h2 className="titlesJugar">¿Eres Ganador?</h2>
            <p>
            Si eres ganador y tienes tu ticket digital, acércate a cualquier establecimiento afiliado para reclamar tu premio, debes de mostrar el ticket para que el encargado del establecimiento verifique la jugada y el ID del ticket.
            Si eres ganador y no tienes tu ticket digital, acércate con el número que te brindaron al momento de jugar para que el encargado del establecimiento afiliado valide ese número y puedas recibir tu premio.
            </p>
          </div>

          <div className="section">
            <h3 className="titlesJugar1">Reglas de pago de premio</h3>

            
                <ul style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                  <li>◉ El ticket ganador se puede cobrar después de una 30 min de haberse realizado el sorteo.</li>
                  <li>◉ El ticket ganador tiene una vigencia de 7 días, si no lo cobras dentro de esos días, el ticket expira.</li>
                  <li>◉ La persona que jugó es la que debe acercarse al establecimiento a reclamar el premio.</li>
                  <li>◉ Si el establecimiento no está dispuesto a pagar el premio por favor repórtalo al 942 359 134.</li>
                </ul>
          
             
          </div>          
        </div>       
      </div>
      <br></br>
      <FooterLot />
    </div>
  );
}
