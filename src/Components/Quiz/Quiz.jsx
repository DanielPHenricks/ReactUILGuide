import React from 'react'
import {Button, ButtonGroup} from 'react-bootstrap'
import CodeComponent from '../CodeComponent';
class Quiz extends React.Component {
    render(){
        return(
            <div>
            <ButtonGroup aria-label="Options">
            <Button variant="secondary">1</Button>{' '}
            <Button variant="secondary">2</Button>{' '}
            <Button variant="secondary">3</Button>{' '}
            <Button variant="secondary">4</Button>
            </ButtonGroup>
            <CodeComponent code="static int x = 2"/>
            </div>
            
        )
    }
}
export default Quiz;