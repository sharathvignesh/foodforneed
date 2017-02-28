import React, { Component,PropTypes } from 'react';
import {connect} from 'react-redux';
import HeaderComponent from './Header';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {openValue} from '../actions/actions.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';


injectTapEventPlugin();

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};


class Firstpage extends Component {
   constructor(props){
     super(props);
     this.handleOpen = this.handleOpen.bind(this);
     this.handleClose = this.handleClose.bind(this);
   }

   handleOpen(){
     this.props.dispatch(openValue(true));
   }
   handleClose(){
     this.props.dispatch(openValue(false));
   }


  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    // const radios = [];
    //
    //   radios.push(
    //     <TextField
    //     hintText="Hint Text"
    //     floatingLabelText="Floating Label Text"
    //   />
    //   );

    return (
      <div>
        <HeaderComponent />
        <br />
        <div className='row'>
          <div className='col-md-3'>
            <span className='add-icon'><i className="material-icons">add_circle_outline</i><span id='donate-span' onClick={this.handleOpen}>Donate food</span></span>
          </div>
          <div className='col-md-3'>
            <span className='location-icon'><i className="material-icons">place</i><span id='location-span'>Location</span></span>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-md-3'>
            <Card className='card-tex'>
              <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar={require('./../../public/img/1.jpg')}
                className='cardHead'
              />
              <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                className='cardMed'
              >
                <img src={require('./../../public/img/2.jpg')} />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText className='cardTex'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>
          </div>
        </div>


        <Dialog
          title="Please add your info"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
        <div>
          <i className="material-icons">contacts</i><TextField
             hintText="Name"
             floatingLabelText="Enter your name"
          /><br />
        <i className="material-icons">phone_iphone</i><TextField
             hintText="Contact number"
             floatingLabelText="Enter your contact number"
          />
        <br />
        <br />
        <span>Food Type</span>
        <br /><br />
        <div className='row'>
          <div className='col-md-3'>
           <Checkbox
              label="Veg"
              style={styles.checkbox}/></div>
            <div className='col-md-3'>
           <Checkbox
              label="Non-Veg"
              style={styles.checkbox}/></div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
           <Checkbox
              label="Perishable"
              style={styles.checkbox}/></div>
            <div className='col-md-4'>
           <Checkbox
              label="Non-Perishable"
              style={styles.checkbox}/></div>
              <div className='col-md-4'>
           <Checkbox
              label="other (Please specify in comments)"
              style={styles.checkbox}/></div>
        </div>
        </div>
        </Dialog>
      </div>
    );
  }
}

 Firstpage.propTypes = {
     open: PropTypes.bool
 };

export default connect(state => ({
  open: state.open
}))(Firstpage);
