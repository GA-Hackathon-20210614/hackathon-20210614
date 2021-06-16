import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from './utilities/users-service';
import './App.scss';
import AuthPage from './pages/AuthPage/AuthPage';
import IndexPage from './pages/IndexPage/IndexPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LandingPage from './pages/LandingPage/LandingPage'

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
            <LandingPage />
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
