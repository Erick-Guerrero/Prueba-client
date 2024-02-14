import axios from "axios";
export const  GET_ALL_NUMBERS = "GET_ALL_NUMBERS"
export const GET_NAME_LOTTERY = "GET_NAME_LOTTERY"
export const FECHA_SELECIONADA = "FECHA_SELECIONADA"
export const CHECK_TICKET = "CHECK_TICKET"
export const GET_HOT_NUMBERS = "GET_HOT_NUMBERS"
export const CLEAN_UP_DATA_IN_CHECK = 'CLEAN_UP_DATA_IN_CHECK';

//const app = "http://localhost:3001"

//const app ="https://erick-guerrero-back-production.up.railway.app"

const app = "https://back-production-3b46.up.railway.app"

export const getAllNumbers = (date) => {
  return async (dispatch) => {
    try {
      let today = new Date();
      const url = date ? `${app}/number?date=${date}` : `${app}/number?date=${today}`;
      const response = await axios.get(url);
      const data = response.data;

      dispatch({ type: GET_ALL_NUMBERS, payload: data });

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const fechaSelecionada = (date) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FECHA_SELECIONADA, payload: date });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const getNameLottery = (nameLottery, hr) => {
  return async (dispatch) => {
    try {
      let today = new Date();
      const url = nameLottery && hr ? `${app}/number?nameLottery=${nameLottery}&hr=${hr}` : `${app}/number?date=${today}`;
      const response = await axios.get(url);
      const data = response.data;

      dispatch({ type: GET_NAME_LOTTERY, payload: data });

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};


export const checkTicket = (value) => {
  return async (dispatch) => {
    try {
      const url =  `${app}/checkTicket`;
      const response = await axios.post(url,value);
      const data = response.data;

      dispatch({ type: CHECK_TICKET, payload: data });

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};


export const getHotNumbers = (nameLottery, hr) => {
  return async (dispatch) => {
    try {
      const url = `${app}/getHotTickets`;
      const response = await axios.get(url);
      const data = response.data;

      dispatch({ type: GET_HOT_NUMBERS, payload: data });

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const cleanUpDataInCheck = () => {
  return {
    type: 'CLEAN_UP_DATA_IN_CHECK',
  };
};