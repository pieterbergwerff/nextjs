import React from "react";

function Section({ children = null }) {
  if (!children) return false;
  return <section>{children}</section>;
}

export default Section;
