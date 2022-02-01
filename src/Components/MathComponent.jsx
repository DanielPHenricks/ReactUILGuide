import React from 'react'
import {MathJax, MathJaxContext} from 'better-react-mathjax'
class MathComponent extends React.Component {
  render() {
    return (
      <MathJaxContext>
            <MathJax>{this.props.math}</MathJax>
      </MathJaxContext>
  );
  }
}
export default MathComponent