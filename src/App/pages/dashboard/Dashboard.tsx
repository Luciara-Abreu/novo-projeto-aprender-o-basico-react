import { useHistory } from 'react-router-dom';

export const Dashboard = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/entrar')
  }

  return (
    <div>
      <p>Dashboard</p>
      <div>
        <button onClick={handleClick}>Pagina de Login</button>
      </div>
    </div>

  );
}