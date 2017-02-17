import React, { Component,PropTypes } from 'react';
import {connect} from 'react-redux';
import HeaderComponent from './Header';

class Firstpage extends Component {
  // constructor(props){
  //   super(props);
  // }


  render() {
    return (
        <HeaderComponent />
    );
  }
}

// Retrieve.propTypes = {
//     name: PropTypes.string.isRequired
// };

export default connect(state => ({}))(Firstpage);
