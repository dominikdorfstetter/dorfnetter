import * as React from 'react'
import GatsbyLink from "gatsby-link";
import './footer.scss';

const Footer = () => (
  <>
      <footer className="footer">
          <div className="footer__text">
              Dorfstetter Dominik 2020 | <GatsbyLink activeClassName="active" to="/">Home</GatsbyLink> |&nbsp;
              <GatsbyLink activeClassName="active" to="/impressum/">Impressum</GatsbyLink>
          </div>
      </footer>
  </>
);

export default Footer;
