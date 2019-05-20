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
        <section className="benefits">
          <h2>benefits</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            impedit amet minima iste autem cumque et maiores blanditiis
            doloribus aut dolorum quaerat non est voluptatum, tempore ut dolorem
            voluptas quod quae accusantium, ex inventore ducimus. Beatae
            mollitia exercitationem, quam similique, consectetur ratione
            reprehenderit delectus neque eligendi facere soluta dolor ducimus!
          </p>
        </section>
        <style jsx>{`
          .brands,
          .aboutUs {
            padding: 20px 0;
            text-align: center;
          }
          .about-image-container {
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
