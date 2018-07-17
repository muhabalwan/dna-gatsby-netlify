import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor }) => {
  return (
    <AboutPageTemplate
      title={entry.getIn(["data", "title"])}
      content={widgetFor("body")}
      members={entry.getIn(["data", "members"])}
    />
  );
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutPagePreview;
