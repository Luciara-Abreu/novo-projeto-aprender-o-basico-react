import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Login = () => {
  const history = useHistory();

  //pegar a senha e e-mails digitados no input. 
  //Essa linha 29 vai salvar o que digitarmos no campo input e-mail -> onChange={e => setEmail(e.target.value)}
  //Essa linha 34 vai salvar o que digitarmos no campo input password -> onChange={e => setPassword(e.target.value)}
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEntrar = () => {
    console.log(email)
    console.log(password)
  }


  const handleClick = () => {
    history.push('/')
  }

  return (
    <div>
      <div>
        <form action="">

          <label htmlFor="">
            <span>Email </span>
            <input value={email} onChange={e => setEmail(e.target.value)} />
          </label>

          <label htmlFor="">
            <span>Senha </span>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>

          <button type="button" onClick={handleEntrar}>
            Entrar
          </button>
        </form>
      </div>







      <p>Login</p>
      <div>
        <button onClick={handleClick}>Pagina inicial</button>
      </div>
    </div>
  )
}