import Header from "./Header";
import Footer from "./Footer";

const layoutStyle = {
  margin: 0,
  padding: 0,
  fontFamily: "Lora"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
