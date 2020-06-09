import React from 'react';
import { useDispatch } from 'react-redux';
import C from '../../shared/opcodes';
import { execute } from '../../store/logic/actions';
import labels from './labels';

const Keypad = () => {
  const dispatch = useDispatch();

  const handleClick = (opcode) => {
    dispatch(execute(opcode));
  };

  return (
    <section>
      {Object.values(C).map((opcode) => (
        <button key={opcode} type="button" onClick={() => handleClick(opcode)}>
          {labels[opcode] || opcode}
        </button>
      ))}
    </section>
  );
};

export default Keypad;
