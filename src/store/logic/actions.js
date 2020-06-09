/* eslint-disable import/prefer-default-export */
import masterController from '../../logic';
import { UPDATE } from './constants';

const update = (state) => ({ type: UPDATE, payload: state });

export const execute = (opcode) => (dispatch, getState) => {
  const { logic: state } = getState();
  const newState = masterController.execute(state, opcode);
  dispatch(update(newState));
};
