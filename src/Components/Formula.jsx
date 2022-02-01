import { Node, Context } from 'better-react-mathjax';
import React from 'react';
class Formula extends React.Component {
    render(){
        return(
            <Context input="tex">
        <Node inline>{this.props.tex}</Node>
      </Context>)
       }
}
export default Formula;