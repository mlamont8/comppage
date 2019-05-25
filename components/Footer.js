import Link from "next/link";

const Footer = () => (
  <div className="footerContainer">
    <div className="footerColumns">
      <div className="footerBlock">
        <span className="headerTitle">Our Company</span>
        <Link href="/">
          <a>About Us</a>
        </Link>
        <Link href="/">
          <a>Capabilities</a>
        </Link>
        <Link href="/">
          <a>News</a>
        </Link>
        <Link href="/">
          <a>Request Pricing</a>
        </Link>
      </div>

      <div className="footerBlock">
        <span className="headerTitle">Our Services</span>
        <Link href="/">
          <a>Design</a>
        </Link>
        <Link href="/">
          <a>Branding & Strategy</a>
        </Link>
        <Link href="/">
          <a>Logo Services</a>
        </Link>
        <Link href="/">
          <a>API Intergrations</a>
        </Link>
      </div>

      <div className="footerBlock">
        <span className="headerTitle">Resources</span>
        <Link href="/">
          <a>Blog</a>
        </Link>
        <Link href="/">
          <a>FAQ</a>
        </Link>
        <Link href="/">
          <a>Partners</a>
        </Link>
        <Link href="/">
          <a>Careers</a>
        </Link>
      </div>

      <div className="footerBlock">
        <span className="headerTitle">Connect</span>
        <Link href="https://instagram.com">
          <a>Instagram</a>
        </Link>
        <Link href="https://facebook.com">
          <a>Facebook</a>
        </Link>
        <Link href="https://twitter.com">
          <a>Twitter</a>
        </Link>
        <Link href="https://linkedin.com">
          <a>Linkedin</a>
        </Link>
      </div>
    </div>
    <div className="copyright">
      <div>Logo</div>
      <div>© 2019 M Lamont Taylor</div>
    </div>

    <style jsx>{`
      .footerContainer {
        padding-top: 100px;
      }

      .footerColumns {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }

      .footerColumns div {
        display: flex;
        flex-direction: column;
      }

      .headerTitle {
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        padding-bottom: 30px;
        color: #000;
      }

      .footerBlock a {
        padding-bottom: 10px;
        color: #5a5677;
        text-decoration: none;
      }

      .footerBlock a:hover {
        text-decoration: underline;
      }

      span {
        padding-bottom: 20px;
      }

      .copyright {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 50px 0;
        font-size: 12px;
        color: #5a5677;
      }

      @media (max-width: 1030px) {
        .footerColumns div {
          flex: 1 1 50%;
          text-align: center;
        }

        .footerBlock {
          padding: 0 0 50px 0;
        }
      }

      @media (max-width: 600px) {
        .footerColumns div {
          flex: 1 1 100%;
        }
      }
    `}</style>
  </div>
);

export default Footer;
