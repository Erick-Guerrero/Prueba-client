import {
  FECHA_SELECIONADA,
  GET_ALL_NUMBERS,
  GET_NAME_LOTTERY,
  CHECK_TICKET,
  GET_HOT_NUMBERS,
  CLEAN_UP_DATA_IN_CHECK,
} from "../Actions";

const initialState = {
  loteryNumbers: [],
  namesLottery: [],
  fechaSelecionada: null,
  check: { error: false, data: null },
  hotNumbers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NUMBERS:
      return {
        ...state,
        loteryNumbers: action.payload,
      };
    case GET_NAME_LOTTERY:
      return {
        ...state,
        loteryNumbers: action.payload,
      };
    case FECHA_SELECIONADA:
      return {
        ...state,
        fechaSelecionada: action.payload,
      };
    case CHECK_TICKET:
      return {
        ...state,
        check: action.payload,
      };

    case GET_HOT_NUMBERS:
      return {
        ...state,
        hotNumbers: action.payload,
      };

      case CLEAN_UP_DATA_IN_CHECK:
        return {
          ...state,
          check: { ...state.check, data: null }, // Limpiar 'data' a null
        };
  

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
