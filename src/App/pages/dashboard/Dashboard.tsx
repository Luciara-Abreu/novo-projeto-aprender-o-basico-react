import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Dashboard = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/entrar')
  }

  const counterRef = useRef({ counter: 0 })

  return (
    <div>
      <p>Dashboard</p>
      <p>Contador: {counterRef.current.counter}</p>
      <button onClick={() => counterRef.current.counter++}>Somar</button>
      <div>
        <button onClick={handleClick}>Pagina de Login</button>
      </div>
    </div>

  );
}