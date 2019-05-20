import Layout from "../components/Layout.js";
import Fonts from "../Utils/fonts.js";
import Hero from "../components/Hero";

class Index extends React.Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <Layout>
        <Hero />
        <section className="aboutUs">
          <h2>Best In The Business</h2>
          <hr className="divider" />
          <p className="section-intro">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            impedit amet
          </p>
          <div className="about-image-container">
            <div className="about-image-left about-image">
              <div>
                <img src="/static/images/passionate.jpg" />
              </div>
              <span>Image Title</span>
            </div>
            <div className="about-image-right about-image">
              <div>
                <img src="/static/images/professional.jpg" />
              </div>
              <span>Image Title</span>
            </div>
          </div>
        </section>
        <section className="weAre">
          <h2>We ARE</h2>
          <hr />
          <div className="we-are-text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              autem magnam alias at quasi quisquam, amet laudantium commodi
              architecto soluta. Molestias, voluptates vitae! Debitis,
              doloremque autem cupiditate hic quo quidem!
            </p>
          </div>
        </section>
        <section className="brands">
          <div>brands</div>
          <div>brands</div>
          <div>brands</div>
          <div>brands</div>
          <div>brands</div>
          <div>brands</div>
          <div>brands</div>
        </section>
        <section className="benefits">
          <h2>benefits</h2>
          <hr className="divider" />
          <div className="benefits-container">
            <div>benefits info</div>
            <div>benefits info</div>
            <div>benefits info</div>
            <div>benefits info</div>
          </div>
        </section>
        <style jsx>{`
          .benefits,
          .aboutUs,
          .weAre
           {
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
          .about-image-container div {
            width: 500px;
          }

          .about-image span {
            text-align: center:
          }

          .benefits {
            background: #333;
            color: #fff;
          }

          .we-are-text {
            padding: 0 20%;
          }

          img {
            width: 100%;
            height: auto;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
