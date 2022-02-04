import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Dashboard, Login } from '../pages';



export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path='/' exact component={Dashboard} />
        <Route path='/entrar' exact component={Login} />


      </Switch>
    </BrowserRouter>
  );
}