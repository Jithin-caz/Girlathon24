import { Container } from "react-bootstrap";
import ReactPlayer from 'react-player';
function Hero() {
  return (
    <section className="section hero-bg">
      <div className="hero row">
        <div className="left col-lg-6">
          <div className="timer">
            <h4>Time Left</h4>
            <h6 className="clock">
              <span className="digit"> 12</span>
              {"    "}days: <span className="digit"> 19</span>
              {"    "}hrs: <span className="digit"> 56</span>
              {"    "}mins: <span className="digit"> 49</span>
              {"    "}secs
            </h6>
          </div>
          <div className="title">
            <h1>GIRLATHON</h1>
            <h2>2023</h2>
          </div>
        </div>
        {//<iframe title='J' src='https://my.spline.design/readyplayermelookingaround-0c0f2a2232256d31c16ec20f9e01ab2c/' frameborder='0' width='100%' height='100%'></iframe>
        }
        <div className="right col-lg-6"></div>
      </div>
    </section>
  );
}
export default Hero;
