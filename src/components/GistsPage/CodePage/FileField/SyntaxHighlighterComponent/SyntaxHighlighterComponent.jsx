import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import PropTypes from "prop-types";

const SyntaxHighlighterComponent = ({ fileContent }) => {
  const { text, file } = fileContent;
  const { filename, language } = file;
  return (
    <>
      <h2>{filename}</h2>
      <SyntaxHighlighter language={null && language.toLowerCase()}>
        {text}
      </SyntaxHighlighter>
    </>
  );
};

SyntaxHighlighterComponent.propTypes = {
  fileContent: PropTypes.object.isRequired,
};

export default SyntaxHighlighterComponent;
