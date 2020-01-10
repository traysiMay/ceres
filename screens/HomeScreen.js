import React from "react";
import { ScrollView, StyleSheet, Text, View, Platform } from "react-native";
import { SHOW, FADE_OUT, FADE_IN } from "../actions";
import { connect } from "react-redux";
import Header from "../components/Header";
import ImageCard from "../components/ImageCard";

function HomeScreen({ fadeIn, fadeOut, navigation, photos, showViewer }) {
  if (!photos) return <Text>Frogs</Text>;
  const handleScroll = event => {
    const y = event.nativeEvent.contentOffset.y;
    if (y >= 100) {
      fadeOut();
    } else {
      fadeIn();
    }
  };
  return (
    <View style={{ alignItems: "center" }}>
      <ScrollView
        stickyHeaderIndices={[0]}
        onScroll={handleScroll}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
          maxWidth: 1200
        }}
      >
        <Header />
        <View style={styles.container}>
          {photos.map((img, i) => {
            return (
              <ImageCard
                key={`${img.folder}-${img.title}`}
                img={img}
                i={i}
                navigation={navigation}
                pvImg={showViewer}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-around"
  }
});

const mapStateToProps = state => {
  const {
    view: { photos }
  } = state;
  return { photos };
};

const mapDispatchToProps = dispatch => ({
  showViewer: () => dispatch({ type: SHOW }),
  fadeIn: () => dispatch({ type: FADE_IN }),
  fadeOut: () => dispatch({ type: FADE_OUT })
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
