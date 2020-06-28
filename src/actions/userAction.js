import axios from 'axios';
import { TRAER_USER, CARGANDO, ERROR } from '@types/userTypes';

export const traerUser = () => async (dispatch) => {
  dispatch({
    type: CARGANDO
  });

  try {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    dispatch({
      type: TRAER_USER,
      payload: respuesta.data
    })
  }
  catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Información de usuario no disponible.'
    })
  }
};