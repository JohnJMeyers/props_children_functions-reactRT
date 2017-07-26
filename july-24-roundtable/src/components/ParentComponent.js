import React, { Component } from 'react';
import ChildComponent from './ChildComponent'
import DisplayComponent from './DisplayComponent'
import "../styles/App.css"

export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput(event) {
    event.preventDefault();
    this.setState({whatToSay: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("fired");
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    this.setState({whatToSay: ""});

  }
  render() {
    return (
      <form>
        <div className="saidDiv">
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
        </div>
        <div className="textDiv">
          <input onChange={this.handleInput} value={this.state.whatToSay} type="text" placeholder="Got something to say?" />
        </div>
        <div className="submitDiv">
          <ChildComponent onClick={this.handleSubmit} />
        </div>
      </form>
    );
  }
}
