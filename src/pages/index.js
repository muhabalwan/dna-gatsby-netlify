import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import css from "./index.module.scss";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const mdData = posts[0].node.frontmatter;

    return (
      <section className={css.section}>
        <div className={css.container}>
          <div className={css.content}>
            <div className={css.contentPrimary}>
              <h1>{mdData.mainTitle}</h1>
              <p>{mdData.description}</p>
            </div>
            <br />
            <div className={css.contentSecondary}>
              <div className={css.vision}>
                <h4>{mdData.visionTitle}</h4>
                <p>{mdData.visionDescription}</p>
              </div>
              <div className={css.mission}>
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
