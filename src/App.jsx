import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from './utilities/users-service';
import './App.scss';
import AuthPage from './pages/AuthPage/AuthPage';
import IndexPage from './pages/IndexPage/IndexPage';
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard';


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
            <Route exact path="/index">
              <IndexPage user={user} setUser={setUser}/>
            </Route>
            <Route exact path="/dashboard">
              <TeacherDashboard user={user} serUser={setUser} />
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
