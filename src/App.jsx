import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from './utilities/users-service';
import './App.scss';
import AuthPage from './pages/AuthPage/AuthPage';
import IndexPage from './pages/IndexPage/IndexPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LandingPage from './pages/LandingPage/LandingPage'
import ClassPage from './pages/ClassPage/ClassPage'

export default function App() {
  const [user, setUser] = useState(getUser());
  console.log(user)
  return (
    <main className="App">
        <>
          {/* <NavBar user={user} setUser={setUser} /> */}
          <Switch>
            <Route exact path="/">
            <LandingPage />
            </Route>
            { user ?
              <Switch>
              <Route exact path="/dashboard">
                <DashboardPage user={user} />
              </Route>
              <Route exact path="/class/:id">
                <ClassPage user={user} />
              </Route>
              <Redirect to='/dashboard'/>
              </Switch>
              :
              <AuthPage setUser={setUser} />
            }
            <Route exact path="/login">
              <AuthPage setUser={setUser} />
            </Route>
            <Redirect to='/'/>
          </Switch> 
        </>
    </main>
  );
}
