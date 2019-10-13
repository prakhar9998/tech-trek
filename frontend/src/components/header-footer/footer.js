import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
       <footer className=" text-white d-md-block text-center page-footer">
        <div>
        <span className="text-light font-weight-bolder">
        DEVELOPED BY : <Link to="http://hackncs.com/"><span className="font-weight-normal">NIBBLE COMPUTER SOCIETY</span></Link>
        </span>
        <span className="text-light font-weight-bolder forum-link">
          ALUMINI'S & FACULTY, VISIT : <Link to="https://www.facebook.com/nibblecomputersociety"><span className="font-weight-normal">FORUM FOR TREKKING</span></Link>
        </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
