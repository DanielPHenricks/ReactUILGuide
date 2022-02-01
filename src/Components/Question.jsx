import React from 'react';
import Table from 'react-bootstrap/Table'
import Link from './Easy/Link.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
class Question extends React.Component {
    render() {
        return (
          <div style={{width:"80%", margin:"0 auto"}}>
               <Table striped bordered hover variant="dark">
                 
                <thead>
                  
                  <tr>
                    <th>Question Name</th>
                    <th>Link to Question</th>
                  </tr>
                </thead>
                <tbody>
                  <Link name="a" url="aaaaa"/>
                </tbody>
              </Table>
          </div>
          );
    }
}
export default Question;
