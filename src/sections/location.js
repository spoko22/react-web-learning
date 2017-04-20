import React, { Component }  from 'react';

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 52.237049, lng: 21.017532},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={52.2289622}
          lng={21.0073023}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;
