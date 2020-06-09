import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import C from '../../shared/opcodes';
import { execute } from '../../store/logic/actions';
import labels from './labels';

const Container = styled.section`
  flex: 1;
  margin: 4px;
`;

const Keypad = () => {
  const dispatch = useDispatch();

  const handleClick = (opcode) => {
    dispatch(execute(opcode));
  };

  return (
    <Container>
      {Object.values(C).map((opcode) => (
        <button key={opcode} type="button" onClick={() => handleClick(opcode)}>
          {labels[opcode] || opcode}
        </button>
      ))}
    </Container>
  );
};

export default Keypad;
