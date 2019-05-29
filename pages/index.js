import Layout from "../components/Layout.js";
import Fonts from "../Utils/fonts.js";
import Hero from "../components/Hero";
import ScrollAnimation from "react-animate-on-scroll";

class Index extends React.Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <Layout>
        <Hero />
        <section className="aboutUs">
          <h2 className="subTitles">Best In The Business</h2>
          <hr className="divider" />
          <p className="mainText">100% client satisfaction rate</p>
          <div className="about-image-container">
            <div className="about-image-left about-image">
              <div>
                <img src="/static/images/passionate.jpg" />
              </div>
              <span className="imageTitle">Planning & Design</span>
            </div>
            <div className="about-image-right about-image">
              <div>
                <img src="/static/images/professional.jpg" />
              </div>
              <span className="imageTitle">On Time Delivery</span>
            </div>
          </div>
        </section>
        <section className="weAre">
          <ScrollAnimation duration={2} animateIn="fadeIn">
            <h2 className="subTitles">We are</h2>
            <hr />
          </ScrollAnimation>

          <div className="we-are-text">
            <p className="mainText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              autem magnam alias at quasi quisquam, amet laudantium commodi
              architecto soluta. Molestias, voluptates vitae! Debitis,
              doloremque autem cupiditate hic quo quidem!
            </p>
          </div>
        </section>
        <section className="brands">
          <div>
            <i className="fab fa-vuejs fa-3x" />
          </div>
          <div>
            <i className="fab fa-react fa-3x" />
          </div>
          <div>
            <i className="fab fa-node-js fa-3x" />
          </div>
          <div>
            <i className="fab fa-angular fa-3x" />
          </div>
          <div>
            <i className="fab fa-python fa-3x" />
          </div>
          <div>
            <i className="fab fa-js fa-3x" />
          </div>
        </section>
        <section className="benefits">
          <h2 className="subTitles">benefits</h2>
          <hr className="divider" />
          <div className="benefits-container">
            <div>
              <div>Professional</div>
              <span className="mainText">
                Some of the most qualified in the industry
              </span>
            </div>
            <div>
              <div>Affordable</div>
              <span className="mainText">
                The Best Rates for the Highest Quality
              </span>
            </div>
            <div>
              <div>Satisfaction</div>
              <span className="mainText">Your Happiness is our #1 goal</span>
            </div>
          </div>
        </section>
        <style jsx>{`
          .benefits,
          .aboutUs,
          .weAre
           {
             margin-top: 100px;
            padding: 20px 0;
            text-align: center;
          }

          .about-image-container,
          .benefits-container,
          .brands {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          }

          @keyframes spreadOut {
            0% {
              opacity: 0;
              transform: scaleX(0);
              }
            100% {
                opacity: 1;
                transform: scaleX(1.5);
              }
          }

          hr {
            animation: spreadOut 1s .5s both;
            width: 40px;
              height: 2px;
              background-color: rgb(52, 152, 219);
          }

          .subTitles{
            font-size: 25px;
            text-transform: uppercase;
          }

          .mainText{
            font-size: 20px;
            color: #5a5677;
            padding-bottom: 50px;
          }

          .about-image-container div {
            max-width: 500px;
          }

          .imageTitle {
            font-size: 1.2em;
            font-weight: 700;
            
          }

          .about-image span {
            text-align: center:
          }

          .benefits {
            color: #000;
          }

          .we-are-text {
            padding: 0 20%;
          }

          img {
            width: 100%;
            height: auto;
            padding-bottom: 30px;
          }

          .brands {
            color: #C0C0C0;
            padding: 80px 0;
          }

          .brands .div {
            width: 30px;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
