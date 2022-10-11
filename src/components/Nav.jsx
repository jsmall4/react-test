import React from "react";
import Item from "./Item";

const Nav = () => {
  return (
    <nav>
      <ol>
        <Item name="Jack" />
        <Item name="home" />
        <Item name="contact" />
      </ol>
    </nav>
  );
};

export default Nav;
