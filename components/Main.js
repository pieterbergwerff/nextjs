import React from "react";
import styled from "styled-components";

function Main({ children = null }) {
  if (!children) return false;
  return <MainStyle>{children}</MainStyle>;
}

export default Main;

const MainStyle = styled.main`
  color: red;
`;
