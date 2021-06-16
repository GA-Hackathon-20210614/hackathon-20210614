import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from './utilities/users-service';
import './App.scss';
import AuthPage from './pages/AuthPage/AuthPage';
import IndexPage from './pages/IndexPage/IndexPage';
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard';
import LandingPage from './pages/LandingPage/LandingPage'

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
<<<<<<< HEAD
            <Route exact path="/index">
              <IndexPage user={user} setUser={setUser}/>
            </Route>
            <Route exact path="/dashboard">
              <TeacherDashboard user={user} serUser={setUser} />
=======
            { user ?
            <>
              <Route exact path="/dashboard">
                <DashboardPage user={user} />
              </Route>
              <Redirect to='/dashboard'/>
              </>
              :
              <AuthPage setUser={setUser} />
            }
            <Route exact path="/login">
              <AuthPage setUser={setUser} />
>>>>>>> 2509ae2d19149e95ea991682d928185614267bda
            </Route>
            <Redirect to='/'/>
          </Switch> 
        </>
    </main>
  );
}
