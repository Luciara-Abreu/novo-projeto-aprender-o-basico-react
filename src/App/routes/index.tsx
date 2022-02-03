import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Dashboard, Login } from '../pages';
import { Home } from "../pages/Home";


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path='/pagina-inicial' exact component={Dashboard} />
        <Route path='/Home' exact component={Home} />
        <Route path='/entrar' exact component={Login} />


      </Switch>
    </BrowserRouter>
  );
}