import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight
} from "react-native";
import Svg, { Polyline } from "react-native-svg";
import LottieComponent from "./LottieComponent";
import { webMobile, webDesk } from "../utils";
import { LOADING_COMPLETE } from "../actions";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ImageCard = ({ dispatch, loading, navigation, img, i, pvImg }) => {
  const [aspect, setAspect] = useState(0);
  Image.getSize(img.url, (w, h) => setAspect(w / h));
  const wWidth = Dimensions.get("window").width;
  const width = wWidth > 500 ? 500 : wWidth;
  const height = width / aspect;

  const points = [];
  const divisor = 25;
  const multiplier = 400;
  const pusher = 15;
  for (let i = 0; i < divisor; i++) {
    const x =
      i === 0
        ? pusher
        : getRandomInt(
          (i * multiplier) / divisor,
          (i * multiplier) / divisor + pusher
        );
    const y = getRandomInt(0, 100);
    points.push(`${x},${y}`);
  }
  const pointString = points.join(" ");
  useEffect(() => {
    setTimeout(() => dispatch({ type: LOADING_COMPLETE }), 2000);
  });
  return (
    <View
      style={[
        {
          width: wWidth < 500 ? wWidth : 500,
          marginTop: i % 2 && webDesk ? 100 : 0,
          marginLeft: i % 2 && webDesk ? 100 * ((Dimensions.get('window').width - 1000) / 150) : 0
        },
        styles.cardContainer
      ]}
    >
      <View>
        {loading ? (
          <LottieComponent />
        ) : (
            <TouchableHighlight
              onPress={() => {
                if (Platform.OS === "web") {
                  navigation.navigate("Preview", { uri: img.url });
                } else {
                  pvImg();
                }
              }}
            >
              <Image
                style={[{ width, height }]}
                source={{
                  uri: img.url
                }}
              />
            </TouchableHighlight>
          )}

        <View style={{ marginTop: 4 }}>
          <View style={styles.bottomWrapper}>
            <Text style={styles.title}>{img.title}</Text>
            <Text style={styles.description}>{lorem}</Text>
          </View>
        </View>
      </View>
      {(Platform.OS !== "web" || webMobile) && (
        <Svg width={wWidth} height="100px" style={{ marginVertical: 20 }}>
          <Polyline
            points={pointString}
            fill="none"
            stroke="black"
            strokeWidth="3"
          />
        </Svg>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20
  },
  cardWrapper: {
    width: 500
  },
  bottomWrapper: {
    width: "86%",
    marginLeft: 20
  },
  title: {
    marginTop: 15,
    fontFamily: "ARI",
    fontWeight: "bold",
    fontSize: 31,
    textTransform: "capitalize",
    letterSpacing: 4
  },
  description: {
    marginTop: 10,
    // marginLeft: 20,
    fontSize: 15,
    width: 350,
    fontFamily: "euclid"
  }
});

const mapStateToProps = state => {
  const {
    view: { loading }
  } = state;
  return { loading };
};

export default connect(mapStateToProps)(ImageCard);
