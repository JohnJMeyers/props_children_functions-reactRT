import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'


export default class BaseLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        <div>
          <Header />          
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
