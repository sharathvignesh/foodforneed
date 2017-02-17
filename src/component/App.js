import React, { Component,PropTypes } from 'react';
import {storeName} from '../actions/actions.js';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  stepper: {
    iconColor: "black"
  },
  raisedButton: {
    primaryColor: "black",
  }
});


class App extends Component {

  render() {

    return (
      // <MuiThemeProvider muiTheme={muiTheme}>
      //     {this.props.children}
      // </MuiThemeProvider>
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default connect(state => ({}))(App);
