import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React from 'react';
class CodeComponent extends React.Component{
  render() {
    return (
      <div style={{width:"80%", margin:"0 auto"}}>
      <SyntaxHighlighter language="java" showLineNumbers="true" style={monokaiSublime}> 
        {this.props.code}
      </SyntaxHighlighter>
      </div>
    );
  }
};
export default CodeComponent