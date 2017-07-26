import React, { Component } from 'react';

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <input className="submit" type="submit" onClick={this.props.onClick}/>
        </div>
      </div>
    );
  }
}
