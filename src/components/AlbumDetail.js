import React from "react";
import { Text, View, StyleSheet, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    titleWrap,
    thumb,
    thumbnailContainerStyle,
    albumTitle,
    albumArtwork
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumb} source={{ uri: thumbnail_image }} />
        </View>
        <View style={titleWrap}>
          <Text style={albumTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={albumArtwork} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button
          onPress={() => {
            Linking.openURL(url);
          }}
        >
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};
const styles = StyleSheet.create({
  titleWrap: {
    display: "flex",
    justifyContent: "space-around"
  },
  thumb: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  albumTitle: {
    fontSize: 18
  },
  albumArtwork: {
    height: 300,
    width: null,
    flex: 1
  }
});

export default AlbumDetail;
