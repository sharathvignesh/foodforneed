import React, { Component,PropTypes } from 'react';
import {connect} from 'react-redux';
import HeaderComponent from './Header';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Firstpage extends Component {
  // constructor(props){
  //   super(props);
  // }


  render() {
    return (
      <div>
        <HeaderComponent />
        <br />
        <div className='row'>
          <div className='col-md-3'>
            <span className='add-icon'><i className="material-icons">add_circle_outline</i><span id='donate-span'>Donate food</span></span>
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
      </div>
    );
  }
}

// Retrieve.propTypes = {
//     name: PropTypes.string.isRequired
// };

export default connect(state => ({}))(Firstpage);
