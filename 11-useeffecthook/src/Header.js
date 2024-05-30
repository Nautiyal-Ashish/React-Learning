import React from "react";

const Header = ({ title = "Default Title" }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

// This is not recommended insted give the default value above in props
// Header.defaultProps = {
//   title: "Default Title",
// };

export default Header;
