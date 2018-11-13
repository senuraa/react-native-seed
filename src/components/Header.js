import React, { Component } from "react";

import { Text, StyleSheet, View } from "react-native";

const Header = props => {
  return (
    <View style={styles.HeaderWrap}>
      <Text style={styles.headerTxt}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderWrap: {
    backgroundColor: "#f8f8f8"
  },
  headerTxt: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 40,
    paddingBottom: 10
  }
});

export default Header;
