import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const { longitude, latitude } = route.params.location.coords;
//   console.log("🚀 ~ MapScreen ~ longitude:", longitude)
//   console.log("🚀 ~ MapScreen ~ route.params.location:", route.params.location)

  return (
    <MapView
      style={styles.mapView}
      initialRegion={{
        longitude,
        latitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.006,
      }}
    >
      <Marker coordinate={{ longitude, latitude }} />
    </MapView>
  );
};
export default MapScreen;

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});
