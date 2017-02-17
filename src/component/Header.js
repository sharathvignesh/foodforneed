import React from 'react';
import AppBar from 'material-ui/AppBar';

// let styles = {
//   background: url('./../img/headerbg1.jpg')
// }

export default function HeaderComponent (props) {
  return (
    <AppBar
    title={<center>Food for need</center>}
    showMenuIconButton={false}
    className='header-bg'
    />
  );
};
