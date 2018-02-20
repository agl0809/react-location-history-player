import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import '../styles/LocationHistoryMap.css';

export default class LocationHistoryMap extends Component {
  getHeatMapLayerOptions(points, maps) {
    return {
      data: this.getHeatMapLayerDataOption(points, maps),
      dissipating: true,
      radius: 50,
      opacity: 1
    };
  }

  getHeatMapLayerDataOption(points, maps) {
    return points.map(point => ({
      location: new maps.LatLng(point[0], point[1])
    }));
  }

  initHeatMapLayer(maps, points) {
    return new maps.visualization.HeatmapLayer(
      this.getHeatMapLayerOptions(points, maps)
    );
  }

  renderHeatMap(map, maps, points) {
    const heatmap = this.initHeatMapLayer(maps, points);
    heatmap.setMap(map);
  }

  renderMarkers(map, maps, points) {
    points.map(
      point =>
        new maps.Marker({
          position: { lat: point[0], lng: point[1] },
          map
        })
    );
  }

  getDefaultCenter() {
    return { lat: this.props.centerLat, lng: this.props.centerLng };
  }

  getBootstrapURLKeys() {
    return {
      key: this.props.gmKey,
      language: this.props.language,
      libraries: this.props.libraries,
      region: this.props.region
    };
  }

  render() {
    return (
      <div className="map">
        <GoogleMap
          defaultCenter={this.getDefaultCenter()}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={this.getBootstrapURLKeys()}
          onGoogleApiLoaded={({ map, maps }) =>
            this.renderHeatMap(map, maps, this.props.coordinates)
          }
          yesIWantToUseGoogleMapApiInternals
        />
      </div>
    );
  }
}
