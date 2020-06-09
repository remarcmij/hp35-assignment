import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.section`
  margin: 4px;
`;

const Display = () => {
  const {
    stack: [x, y, z, t],
  } = useSelector((state) => state.logic);

  return (
    <Container>
      <div>t: {t}</div>
      <div>z: {z}</div>
      <div>y: {y}</div>
      <div>x: {x}</div>
    </Container>
  );
};

export default Display;
