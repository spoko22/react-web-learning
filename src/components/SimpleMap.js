import React, { Component }  from 'react';

import Image from 'grommet/components/Image';

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => {
  return <Image src={require('../img/marker32.png')} size={{width: 1, height: 1}} style={{position: 'absolute', bottom: -16, left: -16}}/>
};

class SimpleMap extends Component {
  static defaultProps = {
    center: {
        lat: 52.229019,
        lng: 21.009688
      },
    zoom: 18
};

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={52.229019}
          lng={21.009688}
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;
