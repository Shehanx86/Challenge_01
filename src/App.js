
import React, { useEffect, useState } from 'react';
import { getElement } from './factory';

export default function App(props) {
  const [isButton, setIsButton] = useState(false);
  const [isLabel, setIsLabel] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  return(
      <>
        <h3>Button</h3>
        <input type="checkbox" onChange={() => setIsButton(true)} />
        <br/>

        <h3>Label</h3>
        <input type="checkbox" onChange={() => setIsLabel(true)} />
        <br/>

        <button onClick={() => setIsCreate(true)}>Create</button>
        <br/>

        {isCreate && isButton && getElement('button')}
        {isCreate && isLabel && getElement('label')}
      </>

  )
}