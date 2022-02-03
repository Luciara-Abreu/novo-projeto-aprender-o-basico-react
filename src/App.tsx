import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from "./Hooks/pages/Home";

export const App = () => {
  return (
    <div>
      <Route path='/' element={Home} />
    </div>
  );
}

