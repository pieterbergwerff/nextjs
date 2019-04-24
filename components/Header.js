import React from "react";

function Header({ children = null }) {
  if (!children) return false;
  return <header>{children}</header>;
}

export default Header;
