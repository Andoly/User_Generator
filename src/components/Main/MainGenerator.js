import React, { Fragment } from "react";
import NavBar from "../Header/Navbar";
import ContainerUser from "../ContainerUser/ContainerUser";
import Footer from "../Footer/Footer";

const MainGenerator = () => {
  return (
    <Fragment>
      <NavBar />
      <ContainerUser />
      <Footer />
    </Fragment>
  );
};

export default MainGenerator;
