import "./LandingPage.scss";
import { HashLink as Link } from 'react-router-hash-link';
import cuate from "../../images/cuate.png"
// import img1 from "../../images/1.png"
// import img2 from "../../images/2.png"
// import img3 from "../../images/3.png"
// import img4 from "../../images/4.png"
// import img5 from "../../images/5.png"
import combo1 from "../../images/combo1.png"
import combo2 from "../../images/combo2.png"
import partner from "../../images/partner.png"
import pledge from "../../images/pledge.png"

export default function LandingPage() {
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
          <div className="contentL">
            <img src={cuate} alt="pic" />
          </div>
          <div className="contentR">
            <span className="heading">Bridging the gap between 
    parents and teachers.</span>
          </div>
      </section>
      <section id="about">
            <div className="t2">About</div><br/><br/>
            <p>EduSpark aims to help teachers and parents collaborate on their childrens education. Having a space where teachers...</p>
      </section>
      <section id="features">
            <span className="t2">Features</span>

            <div className="landing"> 
                <div className="contentL">
                    <img src={combo1} alt="pic1" className="combo1"/>
                    </div>
                <div className="contentR">
                <span className="t2">For Teachers</span><br/><br/>
                    <p>Easily take attendance, manage a single class or mutliple classes, send announcements per class and so much more. EduSpark is here to lighten the load and increase communication with the parents of your students.</p>

                </div>
            </div>
      </section>

      <section className="parents">

            <div className="landing"> 
                <div className="contentL">
            <span className="t2">For Parents</span><br/><br/>
            <p>Whether you have 1 child or 12, you can easily track and manage their education in one place. With access to attendance and grades you are able to step in to help you child before it’s to late.</p>
                    </div>
                <div className="contentR">
                    <img src={combo2} alt="pic2" className="combo2"/>
                </div>
            </div>
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
