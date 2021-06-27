import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import AdminRoute from './components/Shared/AdminRoute/AdminRoute';
import AdminPanel from './components/AdminPanel/AdminPanel/AdminPanel';
import LogIn from './components/LogIn/LogIn/LogIn';
import PageNotFound from './components/PageNotFound/PageNotFound';

export const AdminContext = createContext();

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="bg-gray-100 text-gray-600">
      <AdminContext.Provider value={[isAdmin, setIsAdmin]}>
        <Router>

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/login'>
              <LogIn />
            </Route>

            <AdminRoute path='/admin-panel'>
              <AdminPanel />
            </AdminRoute>

            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </AdminContext.Provider>
    </div>
  );
}

export default App;
