export default function Hero() {
  return (
    <>
      <video
        id="videoBg"
        poster="/static/images/meeting.png"
        autoPlay
        muted
        loop
      >
        <source src="/static/videos/meeting.mp4" type="video/mp4" />
      </video>

      <style jsx>{`
        #videoBg {
          position: fixed;
          z-index: -1;
        }

        @media (min-aspect-ratio: 10/9) {
          #videoBg {
            width: 100%;
            height: auto;
          }
        }

        @media (max-aspect-ratio: 10/9) {
          #videoBg {
            width: auto;
            height: 100%;
          }
        }

        @media (max-width: 767px) {
          #videoBg {
            dipslay: none;
          }
          body {
            background: url("/static/images/meeting.png");
            background-size: cover;
          }
        }
      `}</style>
    </>
  );
}
