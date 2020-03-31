import * as React from 'react'
import {get} from '../utils/http-client'
import {Button} from "./common/Button";


export default class Root extends React.Component {
    state = {
        message: ""
    };
    showMessage = () => {
        get('localhost', 8080, 'hello').then((result: { message: string }) => {
            this.setState({message: result.message})
        })
    };

    render() {
        return <div>
            <Button onClick={this.showMessage} style={{color: "red"}} value="Click me!"/>
            <h1>{this.state.message}</h1>
        </div>
    }
}
