import React from 'react';
import './styles/index.css'
class HiddenText extends React.Component {
    render(){
        return(
            <div className="hidden">
                <p className="hide">{this.props.text}</p>
            </div>
        )
    }
}
export default HiddenText;