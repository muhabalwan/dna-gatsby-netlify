import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";
import "./about-page.scss";

export const AboutPageTemplate = data => {
  const { members } = data;
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Our Team
              </h2>
              <div className={"card-list"}>
                {members.map(member => {
                  return (
                    <div className={"card"} key={member.name}>
                      <h4> {member.name} </h4>
                      <img className="img" src={member.image} />
                      <p> {member.description} </p>
                    </div>
                  );
                })}
              </div>
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
      members={post.frontmatter.members}
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
        members {
          description
          image
          name
        }
      }
    }
  }
`;

// members {
//   member {
//     name
//     description
//     image
//   }
// }

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
