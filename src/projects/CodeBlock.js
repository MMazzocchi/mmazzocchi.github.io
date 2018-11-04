import React from "react";
import PropTypes from "prop-types";
import hljs from "highlight.js/lib/highlight";

import python from "highlight.js/lib/languages/python";
hljs.registerLanguage("python", python);

class CodeBlock extends React.Component {
  componentDidMount() {
    hljs.highlightBlock(this.node);
  }

  render() {
    const { language, children } = this.props;

    return (
      <pre ref={(node) => this.node = node}>
        <code className={ language }>
          { children.trim() }
        </code>
      </pre>
    );
  }
}

CodeBlock.propTypes = {
  language: PropTypes.string.isRequired,
  children: PropTypes.string
};

export { CodeBlock };
