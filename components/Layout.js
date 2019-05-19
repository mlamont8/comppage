import Header from "./Header";
import Footer from "./Footer";
import HeadLayout from "./HeadImport";

const Layout = props => (
  <>
    <HeadLayout />
    <div className="mainContainer">
      <Header />
      {props.children}
      <Footer />

      <style jsx>{`
        .mainContainer {
          box-sizing: border-box;
          font-family: "Lora";
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  </>
);

export default Layout;
