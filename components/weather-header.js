import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

class WeatherHeader extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    // TODO: Replace this with some kind of working API
    fetch('https://www.google.com')
      .then(res => res.json())
      .then(json => (this.setState({ data: json })));
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <h3>PLACEHOLDER</h3>
    );
  }
}

export default WeatherHeader;
