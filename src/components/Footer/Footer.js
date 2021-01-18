import React, { Fragment } from "react";
import { Wrapper, Wave, WaveTwo, WaveThree } from "./styles";

const Footer = () => {
  return (
    <Fragment>
      <Wrapper>
        <Wave />
        <WaveTwo />
        <WaveThree />
        Copyright © 2021 - Andoly
      </Wrapper>
    </Fragment>
  );
};

export default Footer;
