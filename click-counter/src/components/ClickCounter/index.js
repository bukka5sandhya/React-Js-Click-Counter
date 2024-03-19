import {Component} from 'react'
import './index.css'


class ClickCounter extends Component{
    state ={count:0}

    onIncrement = () =>{
        this.setState(prevState => ({count: prevState.count+1}))
    }
    render(){
        const {count} = this.state
        return(
            <div className="bg-container">
                <h1 className="heading">The Button has beeen clicked{' '} <br /><span className="click-element">{count} </span>times</h1>
                <p className="description">Click the button to increase the count!</p>
                <button onClick={this.onIncrement} className="button">Click Me!</button>
            </div>

        )
    }
}
export default ClickCounter;
