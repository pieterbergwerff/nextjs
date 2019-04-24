import React from "react";
import "antd/dist/antd.css";
import { Footer, Header, Main, Section } from "../components";

export default ({ children = null }) => {
  return children ? (
    <Main>
      <Header>
        <h3>App</h3>
      </Header>
      <Section>{children()}</Section>
      <Footer>
        <hr />
      </Footer>
    </Main>
  ) : null;
};
