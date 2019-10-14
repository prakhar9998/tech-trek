import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className=" text-white d-md-block text-center page-footer">
        <div>
          <span className="text-light font-weight-bolder">
            DEVELOPED BY :
            <a href="http://hackncs.com/" target="_blank">
              <span className="font-weight-normal">
                NIBBLE COMPUTER SOCIETY
              </span>
            </a>
          </span>
          <span className="text-light font-weight-bolder forum-link">
            ALUMINI'S & FACULTY, VISIT :
            <a
              href="https://www.facebook.com/nibblecomputersociety"
              target="_blank"
            >
              <span className="font-weight-normal">FORUM FOR TREKKING</span>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
