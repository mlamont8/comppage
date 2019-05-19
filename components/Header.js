import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <nav className="navbar">
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/testimonials">
      <a style={linkStyle}>Testimonials</a>
    </Link>
    <Link href="/contactUs">
      <a style={linkStyle}>Contact Us</a>
    </Link>
    <style jsx>{`
      a {
        color: #34323b;
        font-size: 13px;
        text-transform: uppercase;
        text-decoration-line: none;
        text-decoration-color: rgb(52, 50, 59);
        opacity: 0.7;
      }
      a:hover {
        text-decoration-line: solid;
      }
    `}</style>
  </nav>
);

export default Header;
