import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -22.9035,
      lng: -43.2096
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{ key:'AIzaSyBJq4K4kemj032WVzZrwLDKZTje0fql-zM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-22.9035}
            lng={-43.2096}
            text="Barbearia do Mário"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;