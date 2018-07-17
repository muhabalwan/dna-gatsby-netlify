import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./index.scss";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const mdData = posts[0].node.frontmatter;

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">DNA</h1>
            <div className="content-primary">
              <h4>{mdData.mainTitle}</h4>
              <p>{mdData.description}</p>
            </div>
            <br />
            <div className="content-secondary">
              <div className="vision">
                <h4>{mdData.visionTitle}</h4>
                <p>{mdData.visionDescription}</p>
              </div>
              <div className="mission">
                <h4>{mdData.missionTitle}</h4>
                <p>{mdData.missionDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "index-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            mainTitle
            description
            visionTitle
            visionDescription
            missionTitle
            missionDescription
          }
        }
      }
    }
  }
`;
