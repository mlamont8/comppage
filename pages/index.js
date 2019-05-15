import Layout from "../components/Layout.js";
import Fonts from "../Utils/fonts.js";

class Index extends React.Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <Layout>
        <section className="hero">Hero</section>
        <section className="brands">Brands</section>
        <section className="aboutUs">About Us</section>
      </Layout>
    );
  }
}

export default Index;
