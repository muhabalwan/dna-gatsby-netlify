import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = data => {
  const { traTo } = data;
  console.log("traTo", traTo);
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Our Team
              </h2>
              {
                //   Object.keys(members).map(key => {
                //   return (
                //     <div>
                //       <h4>{members[key].name}</h4>
                //       <img src={members[key].image} alt="photo" />
                //       <p>{members[key].description}</p>
                //     </div>
                //   );
                // })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  test: PropTypes.string
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log("post", post);
  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      traTo={post.frontmatter.traTo}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        test
        traTo
      }
    }
  }
`;
// members {
//   member1 {
//     image
//     name
//     description
//   }
//   member2 {
//     image
//     name
//     description
//   }
//   member3 {
//     image
//     name
//     description
//   }
//   member4 {
//     image
//     name
//     description
//   }
//   member5 {
//     image
//     name
//     description
//   }
//   member6 {
//     image
//     name
//     description
//   }
//   member7 {
//     image
//     name
//     description
//   }
//   member8 {
//     image
//     name
//     description
//   }
// }
