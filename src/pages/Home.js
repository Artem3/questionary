import React, { useContext } from 'react';
import { LocalisationContext } from 'localisation';

export default function Home() {
  const page = 'Home';
  const translation = useContext(LocalisationContext);
  
  return<>
    <h1>{translation[page]['Welcome']}</h1>
    <p>{translation[page]['Contact me']}</p>
  </>;
}
