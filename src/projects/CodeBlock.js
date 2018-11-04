import React from "react";
import PropTypes from "prop-types";
import { registerLanguage, highlightBlock } from "highlight.js/lib/highlight";

import python from "highlight.js/lib/languages/python";
registerLanguage("python", python);

class CodeBlock extends React.Component {
  componentDidMount() {
    highlightBlock(this.node);
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
