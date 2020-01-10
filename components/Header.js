import React from "react";
import { connect } from "react-redux";
import { Animated, StyleSheet } from "react-native";
import Svg, { Text as TT } from "react-native-svg";

const Header = ({ header }) => {
  const [fadeAnim] = React.useState(new Animated.Value(0)); // Initial value for opacity: 0
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: header,
      duration: 1000
    }).start();
  }, [header]);

  return (
    <Animated.View
      style={[
        {
          opacity: fadeAnim,
          marginBottom: 30,
          marginTop: 20
        }
      ]}
    >
      <Svg height="150" width="400">
        <TT
          fontFamily="ARI"
          fill="none"
          stroke="black"
          strokeWidth="2"
          fontSize="100"
          x="30"
          y="110"
        >
          ARIEL
        </TT>
      </Svg>
    </Animated.View>
  );
};

const mapStateToProps = state => {
  const { ui: header } = state;
  return header;
};

export default connect(mapStateToProps)(Header);
