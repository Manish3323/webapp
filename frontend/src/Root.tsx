import * as React from 'react'
import {get} from './http-client'

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
            <button onClick={this.showMessage}>
                Click me!
            </button>
            <h1>{this.state.message}</h1>
        </div>
    }
}
