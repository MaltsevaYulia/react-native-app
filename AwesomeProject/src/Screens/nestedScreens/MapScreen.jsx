import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const { location } = route.params;
  console.log("🚀 ~ MapScreen ~ route.params:", route.params);
  return (
    <MapView style={styles.mapView}>
      <Marker />
    </MapView>
  );
};
export default MapScreen;

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});
