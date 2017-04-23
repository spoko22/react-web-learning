import React, { Component }  from 'react';

import MarkerIcon from 'grommet/components/icons/base/FormLocation';

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <MarkerIcon size="large" colorIndex="critical" pad="none"/>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
        lat: 52.229201,
        lng: 21.009421
      },
    zoom: 17
};

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={52.229201}
          lng={21.009421}
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;
