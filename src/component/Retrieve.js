import React, { Component,PropTypes } from 'react';
import {connect} from 'react-redux';


class Retrieve extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>helo</h1>
      </div>
    );
  }
}

Retrieve.propTypes = {
    name: PropTypes.string.isRequired
};

export default connect(state => ({
    name: state.name
}))(Retrieve);
