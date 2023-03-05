import React from "react";

import { graphql } from "gatsby";

import PortableText from "../components/portableText";
import Layout from "../containers/layout";

import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import "../styles/index.css";
import "../styles/all.min.css";

export const query = graphql`
  query PortfolioQuery {
    portfolioItems: allSanityPortfolioItem(limit: 30) {
      edges {
        node {
          title
          link
          mainImage {
            ...SanityImage
            alt
          }
          _rawBody
        }
      }
    }
    author: allSanityAuthor(filter: { slug: { current: { ne: null } } }) {
      edges {
        node {
          image {
            ...SanityImage
            alt
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data } = props;
  const portfolioItems = data && data.portfolioItems && data.portfolioItems.edges;
  const authorPortrait = data && data.author && data.author.edges;

  return (
    <div className="portfolio">
      <div className="portfolio-header-container">
        <div className="portfolio-header-top">
          <div className="header-picture">
            <img
              src={imageUrlFor(buildImageObj(authorPortrait[0].node.image))
                .width(140)
                .height(224)
                .bg("000000")
                .auto("format")
                .url()}
              alt={authorPortrait[0].node.image.alt}
            />
          </div>
          <div className="header-text">
            <div>
              Hi y’all! I’m Andrew, a Javascript Engineer and Game Designer at{" "}
              <a href="https://multiverse.com">One More Multiverse</a>, and at my indie studio{" "}
              <a href="https://neverdone.games">Never Done Games.</a> My games feature unique online
              multiplayer experiences where narratives are integral to the experience. If you're
              interested in working with me, contact me{" "}
              <a href="mailto: tran.andrew.a@gmail.com">here!</a>
            </div>
            <div className="social-media-links">
              <a href="https://twitter.com/atranimal">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/atranimal/l">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/andrew-tran-71468b111/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-items">
          {portfolioItems.map((item, idx) => {
            return (
              <div key={idx} className="portfolio-item">
                {item.node.mainImage && item.node.mainImage.asset && (
                  <div className="portfolio-item-image">
                    <img
                      src={imageUrlFor(buildImageObj(item.node.mainImage))
                        .width(240)
                        .height(Math.floor((9 / 16) * 240))
                        .bg("000000")
                        // .fit("fillmax")
                        .auto("format")
                        .url()}
                      alt={item.node.mainImage.alt}
                    />
                  </div>
                )}
                <div className="portfolio-item-text">
                  <h2>
                    {item.node.title}{" "}
                    <a href={item.node.link}>
                      <i className="fa fa-link" aria-hidden="true"></i>
                    </a>
                  </h2>

                  <PortableText blocks={item.node._rawBody} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
