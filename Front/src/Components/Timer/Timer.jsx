import React, { useState, useEffect } from 'react';
import '../../assets/color.css'

function Timer({ expiryTime, onTimerExpired,fechaSeleccionada }) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const today = new Date();
  
    // Sumar 15 minutos en milisegundos (15 minutos * 60 segundos * 1000 milisegundos)
    const fifteenMinutes = 15 * 60 * 1000;
    const expiryWith15Minutes = expiryTime + fifteenMinutes;
  
    const remaining = Math.max(0, expiryWith15Minutes - today.getTime());
  
    // Si el tiempo restante es cero, ejecuta la función de callback
    if (remaining === 0 && onTimerExpired) {
      onTimerExpired();
    }
  
    return remaining;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [expiryTime, onTimerExpired]);

  const hours = Math.floor(timeRemaining / 3600000);
  const minutes = Math.floor((timeRemaining % 3600000) / 60000);
  const seconds = Math.floor((timeRemaining % 60000) / 1000);

  useEffect(() => {
    if (timeRemaining === 0 && onTimerExpired) {
      onTimerExpired();
    }
  }, [timeRemaining, onTimerExpired]);
  
  const fechaRender = fechaSeleccionada === null ? new Date().toISOString().split('T')[0] : fechaSeleccionada;

  return (
    <>
    {(fechaRender === new Date().toISOString().split('T')[0]) ?
         <div
         style={{
           textAlign: 'center',
           backgroundColor: 'var(--Timer-background-color-timer)',
           borderRadius: 'var(--Timer-border-radius-timer)',
           padding: 'var(--Timer-padding-timer)',
           color: 'var(--Timer-color-timer)',
           fontWeight: 'var(--Timer-font-weight-timer)',
         }}
       >
         <div style={{ fontSize: 'var(--Timer-font-size-timer)' }}>
           <span style={{ marginRight: 'var(--Timer-margin-timer)', marginLeft: 'var(--Timer-margin-timer)' }}>
             {hours < 10 ? '0' : ''}
             {hours}
           </span>:
           <span style={{ marginRight: 'var(--Timer-margin-timer)', marginLeft: 'var(--Timer-margin-timer)' }}>
             {minutes < 10 ? '0' : ''}
             {minutes}
           </span>:
           <span style={{ marginRight: 'var(--Timer-margin-timer)', marginLeft: 'var(--Timer-margin-timer)' }}>
             {seconds < 10 ? '0' : ''}
             {seconds}
           </span>
      </div>
    </div>
    : null}
    </>
  );
}

export default Timer;
