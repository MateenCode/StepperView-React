import React, { Component } from 'react'
import '../styles/App.css';

class StepperView extends Component {

  constructor(props) {
    super(props)

    console.log(this.props.name)

    console.log(this)

    this.decrement = this.decrementNumber.bind(this)
    this.increment = this.incrementNumber.bind(this)

    this.state = {
      counter :0
    }

  }

  incrementNumber() {

    this.setState({
        counter : this.state.counter + 1
    })

    console.log(this.state.counter)

  }

  decrementNumber() {

    this.setState({
        counter : this.state.counter - 1
    })

  }

   render() {
     return (
       <div className="App">
       <h1>Stepper View</h1>
       <button onClick={this.decrement}>Add</button>
       <label>{this.state.counter}</label>
        <button onClick={this.increment}>Minus</button>
       </div>
     )
   }
}
export default StepperView ;
