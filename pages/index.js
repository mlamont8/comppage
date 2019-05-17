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
        <section className="brands">
          <h2>Brands</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            impedit amet minima iste autem cumque et maiores blanditiis
            doloribus aut dolorum quaerat non est voluptatum, tempore ut dolorem
            voluptas quod quae accusantium, ex inventore ducimus. Beatae
            mollitia exercitationem, quam similique, consectetur ratione
            reprehenderit delectus neque eligendi facere soluta dolor ducimus!
          </p>
        </section>
        <section className="aboutUs">
          <h2>About Us</h2>
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

          .aboutUs {
            background: #333;
            color: #fff;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
