import React from "react";
import Navbar from "../Navbar/Navbar";
import FooterLot from "../Footer/Footer";
import "./ComoJugar.css";

export default function ComoJugar() {
  return (
    <div className="contenedorglobal">
      <Navbar />
      <div className="containerprincipal">
        <div className="quiniela-info">
          <div className="section">
            <h2 className="titlesJugar">¿Cómo se juega la Quiniela?</h2>
            <p>
              La Quiniela es una forma de apostar en la que los participantes
              eligen hasta tres números, del 00 al 99, en una lotería específica
              con la esperanza de ganar premios en efectivo, apostando un monto
              específico.
            </p>
          </div>

          <div className="sectionPremios">
            <h3 className="titlesJugar1">Ejemplos:</h3>
            <div className="columnas">
              <div className="columna">
                <h4 className="h4Col">Lotería Nacional:</h4>
                <ul>
                  <li>◉ 10 soles al número 11.</li>
                  <li>◉ 10 soles al número 23.</li>
                  <li>◉ 10 soles al número 54.</li>
                </ul>
              </div>
              <div className="columna">
                <h4 className="h4Col">Lotería Real:</h4>
                <ul>
                  <li>◉ 5 soles al número 10.</li>
                  <li>◉ 5 soles al número 15.</li>
                  <li>◉ 5 soles al número 18.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section">
            <h3 className="titlesJugar">¿Cómo funciona?</h3>
            <p>
              Dirígete a un establecimiento con la aplicación de apuestas de
              números y comunica al encargado que deseas participar en la
              Quiniela de la lotería de tu elección. Tendrás la oportunidad de
              seleccionar hasta 3 números, dentro del rango del 00 al 99, y
              elegir el monto a apostar, que puede variar desde 1 sol hasta un
              máximo de 100 soles por número.
            </p>
          </div>

          <div className="section">
            <h3 className="titlesJugar">¿Cuándo se juega?</h3>
            <p>
              La Quiniela se lleva a cabo todos los días del año con horarios
              específicos establecidos por entidades autorizadas. Los tres
              números ganadores se eligen aleatoriamente y se anuncian en el
              establecimiento o se pueden consultar en el sitio web{" "}
              <a href="https://www.fortunenumber.com">www.fortunenumber.com</a>.
            </p>
          </div>
        </div>

        <div className="sectionPremios">
          <h3 className="titlesJugar1">¿Cuándo se ganan premios?</h3>
          <p>
            Los premios se basan en la cantidad apostada y la posición donde
            salieron los 3 números ganadores:
          </p>
          <ul>
            <li>◉ Primera posición paga 30 veces lo apostado</li>
            <li>◉ Segunda posición paga 10 veces lo apostado</li>
            <li>◉ Tercera posición paga 5 veces lo apostado</li>
          </ul>
        </div>
      </div>
      <br></br>
      <FooterLot />
    </div>
  );
}
