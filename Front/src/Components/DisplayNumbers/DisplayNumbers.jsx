import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DisplayNumbers.css";
import { getAllNumbers, getHotNumbers } from "../Redux/Actions";
import Timer from "../Timer/Timer";
import HotNumbers from "../HotNumbers/HotNumbers";
import Reloj from "../ActualHr/actualHr";
import moment from 'moment-timezone';

function DisplayNumbers() {

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  const dispatch = useDispatch();
  const data = useSelector((state) => state.loteryNumbers);
  const fechaSeleccionada = useSelector((state) => state.fechaSelecionada);
  const hotNumbers = useSelector((state) => state.hotNumbers);
  const [currentDate, setCurrentDate] = useState(time);
  const [selectedLottery, setSelectedLottery] = useState('')

  const number1 = hotNumbers?.data?.lastMonthNumbers1?.[0]?.number1;
  const number2 = hotNumbers?.data?.lastMonthNumbers1?.[1]?.number1;
  const number3 = hotNumbers?.data?.lastMonthNumbers1?.[2]?.number1;
  const number4 = hotNumbers?.data?.lastMonthNumbers1?.[3]?.number1;
  const number5 = hotNumbers?.data?.lastMonthNumbers1?.[4]?.number1;
  const number6 = hotNumbers?.data?.lastMonthNumbers1?.[5]?.number1;

  useEffect(() => {
    dispatch(getHotNumbers())
    if (fechaSeleccionada && selectedLottery) {
      dispatch(getAllNumbers(fechaSeleccionada, selectedLottery)); // Obtener los números según la fecha y lotería seleccionadas
    } else if (fechaSeleccionada) {
      dispatch(getAllNumbers(fechaSeleccionada)); // Obtener los números según la fecha seleccionada
    } else if (selectedLottery) {
      dispatch(getAllNumbers(selectedLottery)); // Obtener los números según la lotería seleccionada
    } else {
      dispatch(getAllNumbers());
    }
  }, [dispatch]);

  function handleTimerExpired() {
    // La función que se ejecutará cuando el temporizador llegue a cero
    window.location.reload();
  }

  function calculateExpiryTimestamp(timeString) {

    const zonaHorariaCliente = obtenerZonaHorariaCliente();
    // Convertir la hora original a la zona horaria del cliente
    const horaCliente = moment.tz(timeString, 'HH:mm', 'America/Santo_Domingo').tz(zonaHorariaCliente);

    if (!horaCliente.isValid()) {
      return null; // Devuelve null si la hora no es válida
    }

    // Si la hora ya pasó, avanzar un día
    if (horaCliente.isBefore(moment())) {
      horaCliente.add(1, 'day');
    }

    // Devuelve el tiempo de expiración en milisegundos
    return horaCliente.valueOf();
  }

  function obtenerZonaHorariaCliente() {
    // Intenta obtener la zona horaria del cliente usando Intl.DateTimeFormat
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return timeZone || 'UTC'; // Si no se puede determinar, devuelve 'UTC'
    } catch (error) {
      console.error('Error al obtener la zona horaria del cliente:', error);
      return 'UTC'; // En caso de error, devuelve 'UTC'
    }
  }


  function formatTimeWithAMPM(timeString) {
    // Convertir la hora original a la zona horaria del cliente
    const zonaHorariaCliente = obtenerZonaHorariaCliente();
    const horaCliente = moment.tz(timeString, 'HH:mm', 'America/Santo_Domingo').tz(zonaHorariaCliente);

    if (!horaCliente.isValid()) {
      return 'Invalid Date';
    }

    // Obtener la hora en formato de 12 horas con AM/PM
    const formattedTime = horaCliente.format('hh:mm A');

    return formattedTime;
  }

  return (
    <>
      <br />
      <div className="hotNumbers">
        <div className="containerHotNumbers">
          <div className="numberContainerRow">
            <HotNumbers number={number1} />
            <HotNumbers number={number2} />
            <HotNumbers number={number3} />
            <HotNumbers number={number4} />
            <HotNumbers number={number5} />
            <HotNumbers number={number6} />

          </div>
        </div>
      </div>
      <br />
      <div className="reloj">
        <Reloj />
      </div>
      <div className="mainContainer">
        <div className="square-container">
          {data && data.data ? (
            data.data.map((item, index) => {
              return (
                <div key={index} className="rectangle">
                  <div className="fechaContainer">
                    <h3 className="loteryName">{item.nameLottery}</h3>
                    <a
                      href={item.page}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="img"
                        src={item?.imageUrl}
                        alt="Nombre de la imagen"
                      />
                    </a>
                    <br />
                  </div>

                  <div className="NumbersContainer">
                    <div className="dateContainer">
                      {item.number1 === -1 ? (


                        <Timer
                          expiryTime={calculateExpiryTimestamp(item.hr)}
                          onTimerExpired={handleTimerExpired}
                          fechaSeleccionada={fechaSeleccionada}
                        />


                      ) : null}
                      {fechaSeleccionada ? (
                        <p className="date">
                          {fechaSeleccionada.split('T')[0].split('-').reverse().join('/')}
                        </p>
                      ) : (
                        item.day && (
                          <p className="date">
                            {new Date(item.day).toLocaleDateString("es-ES")}
                          </p>
                        )
                      )}

                      <p className="date">
                        {formatTimeWithAMPM(item.hr)}
                      </p>
                    </div>
                    <div className="numberRow">
                      <p className="number">
                        {item.number1 === -1 ? "-" : item.number1.toString().padStart(2, '0')}
                      </p>
                      <p className="number">
                        {item.number2 === -1 ? "-" : item.number2.toString().padStart(2, '0')}
                      </p>
                      <p className="number">
                        {item.number3 === -1 ? "-" : item.number3.toString().padStart(2, '0')}
                      </p>
                    </div>
                  </div>
                </div>
              );

            })
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
}

export default DisplayNumbers;