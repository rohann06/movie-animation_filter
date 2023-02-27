import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className=" my-[5%] mx-[15%]">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
