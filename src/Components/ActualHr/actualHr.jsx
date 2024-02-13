import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

function Reloj() {

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

  const zonaHorariaCliente = obtenerZonaHorariaCliente();
  const [hora, setHora] = useState(moment().tz(zonaHorariaCliente));

  useEffect(() => {
    const intervalID = setInterval(() => {
      setHora(moment().tz(zonaHorariaCliente));
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [zonaHorariaCliente]);

  return (
    <div>
      <p>{hora.format('hh:mm:ss a')}</p>
    </div>
  );
}

export default Reloj;



