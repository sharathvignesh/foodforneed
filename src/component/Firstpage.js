import React, { Component,PropTypes } from 'react';
import {connect} from 'react-redux';
import HeaderComponent from './Header';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {grey300} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {storeFoodType, storeDetails, fetchDetails} from '../actions/actions.js';
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
  text_field: {
    width: 189,
    paddingLeft: 11,
  }
};


class Firstpage extends Component {
   constructor(props){
     super(props);
     this.handleOpen = this.handleOpen.bind(this);
     this.handleClose = this.handleClose.bind(this);
     this.storeName = this.storeName.bind(this);
     this.storePhoneNumber = this.storePhoneNumber.bind(this);
     this.storeLocation = this.storeLocation.bind(this);
     this.storeDishName = this.storeDishName.bind(this);
     this.storeDescription = this.storeDescription.bind(this);
     this.storeFoodType = this.storeFoodType.bind(this);
     this.fetchDetails = this.fetchDetails.bind(this);
     this.renderFetchedDetails = this.renderFetchedDetails.bind(this);
     this.formSubmit = this.formSubmit.bind(this);
     this.imgURL = this.imgURL.bind(this);

     this.state = {
       open: false,
       name: "",
       phonenumber: "",
       location: "",
       dishname: "",
       description: "",
       imgurl: ""
     }
   }

   componentDidMount(){
     console.log("did mount");
     this.props.dispatch(fetchDetails());
   }
   handleOpen(){
     console.log("handleopen");

     this.setState({open : true});
   }
   handleClose(){
     this.setState({open : false});
   }
   storeName(e){
     this.setState({name: e.target.value});
   }
   storePhoneNumber(e){
     this.setState({phonenumber: e.target.value});
   }
   storeLocation(e){
     this.setState({location: e.target.value});

   }
   storeDishName(e){
     this.setState({dishname: e.target.value});
   }
   storeDescription(e){
     this.setState({description: e.target.value});

   }
   storeFoodType(e){
     this.props.dispatch(storeFoodType(e.target.value));
   }
   imgURL(e){
     this.setState({imgurl: e.target.value});
   }
   fetchDetails(){
     this.props.dispatch(fetchDetails());
   }
   formSubmit(){
     this.props.dispatch(storeDetails(this.state.name, this.state.phonenumber, this.state.location, this.props.foodtype, this.state.dishname, this.state.imgurl, this.state.description));
     this.setState({open: false});
   }
   renderFetchedDetails(details) {
     if(details.length !== 0){
     console.log("not empty");
     let renderedfetcheddetails = [];
     for (let i = 0; i < details.length; i++){
      let detailsSet = [];
      detailsSet.push(<div className='col-md-3 col-sm-4 col-xs-12'><Card className='card-tex' style={{background: 'linear-gradient(#e6e6e6, white)'}}>
        <CardHeader
          title={details[i].name}
          subtitle={details[i].location}
          avatar={require('./../../public/img/1.jpg')}
          className='cardHead'
        />
        <CardMedia
          className='cardMed'
        >
          <img src={details[i].imgurl} className='dishPhoto'/>
        </CardMedia>
        <img id='ricebowl' src={require('./../../public/img/rice.png')} />
        <CardTitle title={details[i].dishname} style={{fontWeight: 200, paddinRight: 0, paddingBottom: 2, paddingTop: 17, position: 'relative', paddingLeft: 58}}/>
        <CardText className='cardTex'>
          {details[i].description}
        </CardText>
          <CardText className='cardTex'>
            <i className="material-icons">settings_phone</i>
            <div className="phoneNumber">{details[i].phonenumber}</div>
          </CardText>
      </Card></div>);
      renderedfetcheddetails.push(detailsSet);
      renderedfetcheddetails.push(<br />);
    }
    return renderedfetcheddetails;
  }
  else if(details.length === 0){
    return(
    <div id='firsttodonate'>
        Be the first to donate :)
    </div>
    )
  }
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
        onTouchTap={this.formSubmit}
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
        <div className='row navbarTop'>
          <div className='col-md-3 col-xs-6'>
            <span className='add-icon'><i className="material-icons">add_circle_outline</i><span id='donate-span' onClick={this.handleOpen}>Donate food</span></span>
          </div>
          <div className='col-md-3 col-xs-6'>
            <span className='location-icon'><i className="material-icons">place</i><span id='location-span'>Location</span></span>
          </div>
        </div>
        <br />
        <div className='row' style={{padding: 20}}>
            {this.renderFetchedDetails(this.props.fetchedObj)}
        </div>


        <Dialog
          title="Please add your info"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          titleStyle={{fontWeight: 100}}
        >
        <div>
          <i className="material-icons" style={{fontSize: 17}}>contacts</i><TextField
             hintText="Name"
             floatingLabelText="Enter your name"
             onChange={this.storeName}
             style={styles.text_field}
          /><br />
        <i className="material-icons" style={{fontSize: 17}}>phone_iphone</i><TextField
             hintText="Contact number"
             floatingLabelText="Enter your contact number"
             onChange={this.storePhoneNumber}
             style={styles.text_field}
          /><br />
        <i className="material-icons" style={{fontSize: 17}}>place</i><TextField
             hintText="Location"
             floatingLabelText="Enter your Location"
             onChange={this.storeLocation}
             style={styles.text_field}
          />
        <br />
        <br />
        <span>Food Type</span>
        <br /><br />
        <div className='row'>
          <div className='col-md-3 col-xs-12'>
           <Checkbox
              label="Veg"
              value="Veg"
              style={styles.checkbox}
              onCheck={this.storeFoodType}/></div>
            <div className='col-md-3 col-xs-12'>
           <Checkbox
              label="Non-Veg"
              value="Non-Veg"
              style={styles.checkbox}
              onCheck={this.storeFoodType}/></div>
        </div>
        <div className='row'>
          <div className='col-md-3 col-xs-12'>
           <Checkbox
              label="Perishable"
              value="Perishable"
              style={styles.checkbox}
              onCheck={this.storeFoodType}/></div>
            <div className='col-md-4 col-xs-12'>
           <Checkbox
              label="Non-Perishable"
              value="Non-Perishable"
              onCheck={this.storeFoodType}
              style={styles.checkbox}/></div>
        </div>
        <img src="https://maxcdn.icons8.com/iOS7/PNG/25/Food/noodles_filled-25.png" title="Noodles Filled" width="17"/><TextField
           hintText="Dish Name"
           floatingLabelText="Name of the Dish"
           onChange={this.storeDishName}
           style={styles.text_field}
        /><br />
      <img src="https://maxcdn.icons8.com/iOS7/PNG/25/Messaging/add_link-25.png" title="Add Link" width="17" /><TextField
           hintText="URL of the photo"
           floatingLabelText="Photo of the Dish"
           onChange={this.imgURL}
           style={styles.text_field}
        /><br />
        <i className="material-icons" style={{fontSize: 17}}>question_answer</i><TextField
           hintText="Description/comments"
           floatingLabelText="comments"
           floatingLabelStyle={{paddingLeft: '5px'}}
           rows={2}
           multiLine={true}
           textareaStyle={{border: '1px solid #d2cfcf', backgroundColor: 'whitesmoke'}}
           onChange={this.storeDescription}
           style={styles.text_field}
        /><br />
        </div>
        </Dialog>
      </div>
    );
  }
}

 Firstpage.propTypes = {
     open: PropTypes.bool,
     name: PropTypes.string.isRequired,
     phonenumber: PropTypes.string.isRequired,
     location: PropTypes.string.isRequired,
     dishname: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     foodtype: PropTypes.array.isRequired,
     imgurl: PropTypes.string.isRequired
   };

export default connect(state => ({
  open: state.open,
  name: state.name,
  phonenumber: state.phonenumber,
  location: state.location,
  dishname: state.dishname,
  description: state.description,
  foodtype: state.foodtype,
  fetchedObj: state.fetchedObj,
  imgurl: state.imgurl
}))(Firstpage);
