import Layout from "../components/Layout.js";

export default function About() {
  return (
    <Layout>
      <section className="aboutTitle">
        <h1>Our Philosophy</h1>
      </section>

      <section className="aboutMain">
        <div className="description">
          <h2>Passion</h2>
          <p className="detail">
            Our team is motivated to learn and understand the best and latest
            technologies. We are psyched about UX and the quality of work we
            provide. We are always working to be better.
          </p>
        </div>
        <div className="image">
          <img src="/static/images/passion.jpg" />
        </div>

        <div className="image">
          <img src="/static/images/passion.jpg" />
        </div>
        <div className="description">
          <h2>Creativity</h2>
          <p className="detail">
            We constantly train and welcome feedback on the most innovative
            ideals. We promote and "Anything is Possible" attitude and create
            ways to "make it happen" as opposed as saying what can not be done.
          </p>
        </div>

        <div className="description">
          <h2>Trust</h2>
          <p className="detail">
            Countless clients have counted on us for our creativity, our
            devotion and professionalism. We are transparent in our processes
            and hold confidentiality as one of our most important standards.
          </p>
        </div>
        <div className="image">
          <img src="/static/images/passion.jpg" />
        </div>

        <div className="image">
          <img src="/static/images/passion.jpg" />
        </div>
        <div className="description">
          <h2>Humility</h2>
          <p className="detail">
            We welcome constant feedback. We pride ourselves on improving
            processes and techniques to bring forth the best ways and methods
            and implementing projects and promoting ideas.
          </p>
        </div>
      </section>
      <style jsx>
        {`
          .aboutTitle {
            text-align: center;
          }

          .aboutMain {
            display: flex;
            flex-wrap: wrap;
          }
          .aboutMain div {
            width: 600px;
            padding: 50px 0;
          }

          img {
            width: 100%;
            height: auto;
          }
        `}
      </style>
    </Layout>
  );
}
