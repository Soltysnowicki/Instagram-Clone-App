import { View, StyleSheet, Text, Image } from "react-native";
import React from "react";

const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fontStyle}>ActivityScreen</Text>
      <Image
        style={styles.construction}
        source={{
          uri: "https://siecobywatelska.pl/wp-content/uploads/2021/02/under-construction-2408061.png",
        }}
      />
    </View>
  );
};

export default ActivityScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  fontStyle: {
    fontSize: 24,
    marginBottom: 20,
  },
  construction: {
    width: 400,
    height: 400,
  },
});
