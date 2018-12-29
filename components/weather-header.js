import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

class WeatherHeader extends Component {
  constructor(props) {
    super();
    const { cityKey, apiKey } = props;
    let api = 'http://dataservice.accuweather.com/currentconditions/v1/';
    api += `${cityKey}?apikey=${apiKey}&language=en-us`;
    this.endPoint = api;
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(this.endPoint)
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

WeatherHeader.propTypes = {
  cityKey: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
};

export default WeatherHeader;
