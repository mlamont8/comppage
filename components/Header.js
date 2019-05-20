import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <nav className="navbar">
        <span className="navbar-toggle" onClick={this.handleClick}>
          <i className="fas fa-bars" />
        </span>
        <Link href="/">
          <a style={linkStyle}>Logo</a>
        </Link>
        <div className={this.state.active ? "main-nav active" : "main-nav"}>
          <Link href="/about">
            <a style={linkStyle}>About</a>
          </Link>
          <Link href="/testimonials">
            <a style={linkStyle}>Testimonials</a>
          </Link>
          <Link href="/contactUs">
            <a style={linkStyle}>Contact Us</a>
          </Link>
        </div>

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

          .main-nav {
            list-style-type: none;
            display: none;
          }
          .navbar-toggle {
            position: absolute;
            top: 25px;
            right: 20px;
            cursor: pointer;
          }

          .active {
            display: block;
          }

          .navbar {
            height: 70px;
            display: flex;
            align-items: center;
          }

          @media screen and (min-width: 768px) {
            .navbar {
              display: flex;
              justify-content: space-between;
              height: 70px;
              padding-bottom: 0;
              align-items: center;
            }
            .main-nav {
              display: flex;
              margin-right: 30px;
              flex-direction: row;
              justify-content: flex-end;
            }
            .navbar-toggle {
              display: none;
            }
          }
        `}</style>
      </nav>
    );
  }
}
export default Header;
