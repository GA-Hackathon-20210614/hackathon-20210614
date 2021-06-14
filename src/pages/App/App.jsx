import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import IndexPage from '../IndexPage/IndexPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          {/* <NavBar user={user} setUser={setUser} /> */}
          <Switch>
            <Route path="/">
              <IndexPage user={user} setUser={setUser}/>
            </Route>
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
