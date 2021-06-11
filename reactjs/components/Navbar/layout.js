import { Fragment } from "react";
import Navbar from "./Navbar";
import Background from "../background-animace/background";
import Footer from "./Footer";


import "bootstrap/dist/css/bootstrap.min.css";
function Layout(props) {
  return (
    <Fragment>

      <Navbar></Navbar>

      <main>{props.children}</main>
      <Background></Background>
      <Footer></Footer>
    </Fragment>
  );
}

export default Layout;
