import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { SHOW, FADE_OUT, FADE_IN } from "../actions";
import { connect } from "react-redux";
import Header from "../components/Header";
import ImageCard from "../components/ImageCard";

function HomeScreen({
  fadeIn,
  fadeOut,
  loadingImages,
  navigation,
  previews,
  showViewer
}) {
  const handleScroll = event => {
    const y = event.nativeEvent.contentOffset.y;
    if (y >= 100) {
      fadeOut();
    } else {
      fadeIn();
    }
  };

  useEffect(() => {
    loadingImages();
  }, []);

  return (
    <View style={{ alignItems: "center", display: "flex" }}>
      <FlatList
        data={previews}
        ListHeaderComponent={<Header />}
        stickyHeaderIndices={[0]}
        numColumns={Dimensions.get("window").width > 768 ? 2 : 1}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item, index }) => {
          return (
            <ImageCard
              key={`${item.folder}-${item.title}`}
              img={item}
              i={index}
              navigation={navigation}
              pvImg={showViewer}
            />
          );
        }}
        onScroll={handleScroll}
      />
    </View>
  );
}

const mapStateToProps = state => {
  const {
    view: { previews }
  } = state;
  return { previews };
};

const mapDispatchToProps = dispatch => ({
  showViewer: () => dispatch({ type: SHOW }),
  fadeIn: () => dispatch({ type: FADE_IN }),
  fadeOut: () => dispatch({ type: FADE_OUT }),
  loadingImages: () => dispatch({ type: "LOADING_IMAGES" })
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
