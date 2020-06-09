import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  const {
    stack: [x, y, z, t],
  } = useSelector((state) => state.logic);

  return (
    <section>
      <div>t: {t}</div>
      <div>z: {z}</div>
      <div>y: {y}</div>
      <div>x: {x}</div>
    </section>
  );
};

export default Display;
