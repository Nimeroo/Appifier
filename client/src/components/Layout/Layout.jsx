import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div>
      <Nav user={props.user} logout={props.logout} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
