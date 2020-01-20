import React from "react";
import { View, Text } from "react-native";
import ImageView from "react-native-image-view";
import { connect } from "react-redux";
import { HIDE } from "../actions";

const ImageViewer = ({ dispatch, photos, view }) => {
  const photoArray = photos.map(p => {
    return {
      source: {
        uri: p.url
      }
    };
  });
  return (
    <View>
      <ImageView
        images={photoArray}
        imageIndex={1}
        isVisible={view}
        onClose={() => {
          dispatch({ type: HIDE });
        }}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const {
    view: { view, photos }
  } = state;
  return { view, photos };
};

export default connect(mapStateToProps)(ImageViewer);
