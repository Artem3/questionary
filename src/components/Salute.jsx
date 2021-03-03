import React from 'react';
import { useWindowSize } from 'hooks/Hooks.jsx';
import Confetti from 'react-confetti';

export default function Salute() {
  const { width, height } = useWindowSize();

  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={550}
      recycle={false}
    />
  );
}
