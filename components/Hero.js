export default function Hero() {
  return (
    <>
      <section className="hero container">
        <div className="video-wrap">
          <video id="videoBg" poster="/static/images/meeting.png" autoPlay loop>
            <source src="/static/videos/meeting.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="header-overlay" />
        <div className="header-content">
          <h1>Corp Incorp</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>

      <style jsx>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-align: center;
        }

        .container {
          max-width: 960px;
          padding-left: 1rem;
          padding-right: 1rem;
          margin: auto;
        }

        .video-wrap {
          position: absolute;
          top: 30;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .video-wrap video {
          min-height: 100%;
          min-width: 100%;
        }

        .header-overlay {
          height: 100%;
          position: absolute;
          top: 30;
          left: 0;
          width: 100%;
          z-index: 1;
          background: rgb(24, 23, 28);
          opacity: 0.85;
        }

        .header-content {
          z-index: 2;
          width: 50%;
          text-align: center;
        }

        .header-content h1 {
          font-size: 50px;
          margin-bottom: 0;
        }

        .header-content p {
          font-size: 1.15rem;
          display: block;
        }

        @media (max-width: 960px) {
          .container {
            padding-right: 3rem;
            padding-left: 3rem;
          }
          .video-wrap {
            background: url("/static/images/meeting.png");
            background-size: cover;
          }

          .video-wrap video {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
