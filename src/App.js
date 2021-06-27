import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useEffect, useState } from 'react';
import AdminRoute from './components/Shared/AdminRoute/AdminRoute';
import AdminPanel from './components/AdminPanel/AdminPanel/AdminPanel';
import LogIn from './components/LogIn/LogIn/LogIn';
import PageNotFound from './components/PageNotFound/PageNotFound';

export const AdminContext = createContext();
export const BlogContext = createContext();

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [blogs, setBlogs] = useState([]);

  return (
    <div className="bg-gray-100 text-gray-600">
      <AdminContext.Provider value={[isAdmin, setIsAdmin]}>
        <BlogContext.Provider value={[blogs, setBlogs]}>
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
        </BlogContext.Provider>
      </AdminContext.Provider>
    </div>
  );
}

export default App;
