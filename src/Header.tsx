import React from "react";

const Header: React.FC = () => {
  return (
    <div>
      <h1 className="name">Riley Richard</h1>
      <h2 className="biz">
        <a href="https://embeddedlabs.org" className="bbtech" target="_blank">
          Fall River, MA
        </a>
      </h2>
      <h2 className="headerContainers">
        <a
          href="mailto:me@rileyrichard.com"
          className="headerContainer"
          target="_blank">
          me@rileyrichard.com
        </a> | <a  href="tel:508-774-3994"
            className="headerContainer">
            508-774-3994</a>
        </h2>
      <p>
        I'm a Computer Science undergraduate student at the University of
        Massachusetts Dartmouth. I enjoy making fun and obscure things as well
        as dealing with the challenges that come along with it.
      </p>
      <hr />
    </div>
  );
};

export default Header;
