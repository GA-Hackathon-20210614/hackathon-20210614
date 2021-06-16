import { useState } from 'react';
import './AuthPage.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { HashLink as Link } from 'react-router-hash-link';
import partner from "../../images/partner.png"
import pledge from "../../images/pledge.png"
import Button from '@material-ui/core/Button';


export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (

    <div className="_container">
      <header className="navContainer">
        <div className="nav">
        <div className="t1"> <Link to="/" className="link"><span id="edu">Edu</span><span id="spark">Spark</span> </Link></div>
          <div className="links">
            <Link to="/#about" className="link"> About </Link>
          </div>
          <div className="links">
          <Link to="/#features" className="link"> Features </Link>
          </div>
          <div className="links">
          <Link to="/login" className="link"> Login </Link>
          </div>
        </div>
      </header>
      <section className="landing">
        <main className="AuthPage">
          {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
          <div id="auth-button">
          <Button type="submit" variant="contained" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</Button>
          </div>
        </main>
      </section>
      <section className="footerContainer">

        <div className="footerImages"> 

        <img src={pledge} alt="pledge"/>
        <img src={partner} alt="partner"/>
        </div>
      </section>
    </div>
    
  );
}