import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "@paraboly/react-native-card";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          iconDisable
          defaultTitle=""
          numberOfLines={3}
          title="Title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          defaultContent=""
          rightBottomText="30 km"
          onPress={() => {}}
        />
        <Card
          iconDisable={false}
          iconName="home"
          iconType="Entypo"
          defaultTitle=""
          numberOfLines={3}
          title="Title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          defaultContent=""
          rightBottomText="30 km"
          onPress={() => {}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
