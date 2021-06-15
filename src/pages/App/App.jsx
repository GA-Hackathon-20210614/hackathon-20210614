import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import IndexPage from '../IndexPage/IndexPage';
import DashboardPage from '../DashboardPage/DashboardPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  console.log(user)
  return (
    <main className="App">
      { user ?
        <>
          {/* <NavBar user={user} setUser={setUser} /> */}
          <Switch>
            <Route exact path="/">
              <IndexPage user={user} setUser={setUser}/>
            </Route>
            <Route exact path="/dashboard">
              <DashboardPage user={user} />
            </Route>
            <Redirect to='/'/>
          </Switch> 
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
