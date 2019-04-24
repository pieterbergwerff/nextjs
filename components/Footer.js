import React from "react";

function Footer({ children = null }) {
  if (!children) return false;
  return <footer>{children}</footer>;
}

export default Footer;
