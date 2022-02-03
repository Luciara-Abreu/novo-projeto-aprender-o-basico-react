import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Dashboard } from '../pages';
import { Home } from "../pages/Home";


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path='/pagina-inicial' exact component={Dashboard} />
        <Route path='*' exact component={() => <Redirect to='/pagina-inicial' />} />


      </Switch>
    </BrowserRouter>
  );
}