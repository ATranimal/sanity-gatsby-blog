import React from "react";

import Container from "../components/container";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import "../styles/index.css";

const IndexPage = () => {
  return (
    <Layout>
      <div className="portfolio">
        <div className="portfolio-header-container">
          <div className="header-picture"></div>
          <div className="header-text">
            Hi. I'm a freelance web developer focused on making fun, interactive websites and data
            visualizations, with experience in music and food. If you're interested in working with
            me, contact me <a href="mailto: tran.andrew.a@gmali.com">here!</a>
          </div>
          <div className="social-media-links">
            <a href="https://twitter.com/atranimal">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/atranimal/l">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/andrew.tran.1829">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/andrew-tran-71468b111/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
