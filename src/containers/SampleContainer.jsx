import React, { Component } from 'react';
import SamplePresentational from '../components/SamplePresentational.jsx';

class SampleContainer extends Component {
  state = { count: 0 };

  incrementCount = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <SamplePresentational
        count={this.state.count}
        onClick={this.incrementCount}
      />
    );
  }
}

export default SampleContainer;
