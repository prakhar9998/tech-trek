import React from "react";
const Footer = () => {
  return (
    <div>
      <footer className=" text-white d-none d-md-block text-center page-footer bottom-fixed">
        <span className="text-light font-weight-bolder">
          &copy; Nibble Computer Society
        </span>
      </footer>
      <footer className=" text-white d-md-none text-center page-footer">
        <span className="text-light font-weight-bolder">
          &copy; Nibble Computer Society
        </span>
      </footer>
    </div>
  );
};

export default Footer;
