import React from "react";
import '../footer/Footer.scss';

const Footer = ({ data }) => {
  if (data) {
    var networks = data.socials.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="fa fa-angle-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
