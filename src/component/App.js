import React, { Component,PropTypes } from 'react';
import {storeName} from '../actions/actions.js';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

class App extends Component {
  constructor(props) {
      super(props);
      this.storeName = this.storeName.bind(this);
  }
  storeName(e){
    console.log(e.target.value);
    this.props.dispatch(storeName(e.target.value));
  }
  submit(){
    console.log("submit");
    return browserHistory.push('/ret');
  }
  render() {
    return (
      <div>
        <input type="text" value={this.props.name} onChange={this.storeName} />
        <button type="submit" onClick={this.submit}>submit</button>
      </div>
    );
  }
}

App.propTypes = {
    name: PropTypes.string.isRequired
};

export default connect(state => ({
    name: state.name
}))(App);
