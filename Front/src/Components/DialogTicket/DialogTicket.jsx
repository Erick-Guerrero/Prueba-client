// DialogTicket.js

import React from "react";
import { Modal } from 'flowbite-react';
import "./DialogTicket.css"

function DialogTicket({ open1, onClose1, ticketInfo }) {
  const isMobile = window.innerWidth <= 768;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString();
  };

  return (
<Modal dismissible show={open1} isOpen={open1} size="5xl" onClose={onClose1} popup style={{borderRadius:"20px" ,display: "flex", justifyContent: "center", alignItems: "center", top: 0, left: 0, width: "100%", height: "100%", }}>
  <Modal.Body >
      <Modal.Header style={{ display: "flex", justifyContent: "flex-end", paddingRight: "20px",marginTop:"20px" }} />
      <div className="ticket-info-container" size="sm" style={{ display: "flex", justifyContent: "center" }}>
        {ticketInfo ? (
          <div className="ticket-info">
            <h1>Lottery Numbers</h1>
            <p className={ticketInfo.message === 'Ticket ganador' ? 'winner-text' : 'not-winner-text'}>
              {ticketInfo.message}
            </p>
            <hr />
            <div  style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{formatDate(ticketInfo.ticket.createdAt)} </p>
              <p>{formatTime(ticketInfo.ticket.createdAt)}</p>
            </div>
            <hr />
            <p>Ticket: {ticketInfo.ticket.idTicket}</p>
            <p>Código validación: {ticketInfo.ticket.validationCode}</p>
            <hr />
            <p>Lotería: {ticketInfo.ticket.lotteryName} /  {ticketInfo.ticket.lotteryHr} hr</p>
            <hr />
            <div className="ticket-numbers">
              <table>
                <thead>
                  <tr>
                    <th>Número</th>
                    <th>Apuesta</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketInfo.ticket.TicketNumbers.map((number, index) => (
                    <tr key={index}>
                      <td>{number.number === 100 ? "00" :  number.number.toString().padStart(2, '0')}</td>
                      <td>S/ {number.bet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <hr />
            
          
          </div>
        ) : null}
      </div>
    </Modal.Body>
  </Modal>
  );
}

export default DialogTicket;
