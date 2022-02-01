import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
class Link extends React.Component {
    render() {
        return (
        <tr>
            <td>{this.props.name}</td>
            <td><Button size="sm" href={this.props.url}>{this.props.name}</Button></td>
        </tr>
        )
    }
}
export default Link;
