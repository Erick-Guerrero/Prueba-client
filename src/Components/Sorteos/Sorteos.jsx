import React from "react";
import Navbar from "../Navbar/Navbar";
import FooterLot from "../Footer/Footer";
import "./Sorteos.css";

export default function Sorteos() {

  const datos = [
    { nombre: 'ANGUILLA LOTTERY 08:00 AM', horario: "8:00 am" },
    { nombre: 'ANGUILLA LOTTERY 09:00 AM', horario: "9:00 am" },
    { nombre: 'ANGUILLA LOTTERY 10:00 AM', horario: "10:00 am" },
    { nombre: 'LA PRIMERA DIA', horario: "11:00 am" },
    { nombre: 'LA SUERTE DOMINICANA', horario: "11:30 am" },
    { nombre: 'REAL', horario: "12:00 pm" },
    { nombre: 'LOTEDOM', horario: "12:55 pm" },
    { nombre: 'FLORIDA TARDE', horario: "1:30 pm" },
    { nombre: 'GANA MAS', horario: "1:30 pm" },
    { nombre: 'ANGUILLA LOTTERY 02:00 PM', horario: "2:00 pm" },
    { nombre: 'NEW YORK TARDE', horario: "2:30 pm" },
    { nombre: 'ANGUILLA LOTTERY 03:00 PM', horario: "3:00 pm" },
    { nombre: 'ANGUILLA LOTTERY 04:00 PM', horario: "4:00 pm" },
    { nombre: 'ANGUILLA LOTTERY 05:00 PM', horario: "5:00 pm" },
    { nombre: 'LA SUERTE DOMINICANA 05:00 PM', horario: "5:00 pm" },
    { nombre: 'ANGUILLA LOTTERY 06:00 PM', horario: "6:00 pm" },
    { nombre: 'LOTEKA', horario: "6:55 pm" },
    { nombre: 'LA PRIMERA NOCHE', horario: "7:00 pm" },
    { nombre: 'LEIDSA', horario: "7:55 pm (L-S), 2:55 pm (D)" },
    { nombre: 'NACIONAL', horario: "8:00 pm (L-S), 5:00 pm (D)" },
    { nombre: 'ANGUILLA LOTTERY 09:00 PM', horario: "9:00 pm" },
    { nombre: 'FLORIDA NOCHE', horario: "9:45 pm" },
    { nombre: 'NEW TORK NOCHE', horario: "10:30 pm" },
  ];

  return (
    <div className="contenedorglobal">
      <Navbar />
      <div className="containerprincipal">
         <div className="sectionPremios">
          <h3 className="titlesJugar1">Sorteos</h3>
          <p>
          Puedes apostar a los siguientes sorteos, todos los días, tener en cuenta los horarios.
          </p>
          <table className="tabla">
        <thead>
          <tr>

            <th>Nombre del sorteo</th>
            <th>Horario Perú</th>
          </tr>
        </thead>
        <tbody>
          {datos.map(item => (
            <tr key={item.id}>
 
              <td>{item.nombre}</td>
              <td>{item.horario}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
      <br></br>
      <FooterLot />
    </div>
  );
}

