import React, { Component } from 'react';
import '../styles/App.css';

export default class DisplayComponent extends Component {
  render() {
    return (
      <div className="sayWhat">{this.props.sayWhat}</div>
    );
  }
}
