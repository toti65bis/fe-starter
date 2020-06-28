import { TRAER_USER, CARGANDO, ERROR } from '@types/userTypes';

const INITIAL_STATE = {
  user: [],
  cargando: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_USER:
      return {
        ...state,
        user: action.payload,
        cargando: false,
        error: ''
      };

    case CARGANDO:
      return { ...state, cargando: true };

    case ERROR:
      return { ...state, error: action.payload, cargando: false };

    default: return state;
  }
};