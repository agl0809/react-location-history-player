import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {white} from 'material-ui/styles/colors';

class Header extends React.Component {

  render() {
    const {styles} = this.props;

    const style = {
      appBar: {
        position: 'absolute',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57
      },
      menuButton: {
        marginLeft: 10
      },
      iconsRightContainer: {
        marginLeft: 20
      }
    };

    return (
        <div>
            <AppBar
              style={{...styles, ...style.appBar}}
              iconElementLeft={
                  <IconButton style={style.menuButton}>
                    <Menu color={white} />
                  </IconButton>
              }
              title='Location History Player'
            />
          </div>
      );
  }
}

export default Header;
