import React from "react";
import { WebView } from 'react-native-webview';
import { StyleSheet } from "react-native";
import Constants from "expo-constants";


export default function DetailScreen(props) {

    const {route} = props;
    const {article} = route.params;

  return (
    <WebView
      style={style.container}
      source={{ uri: article.url }}
    />
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: Constants.statusBarHeight,
    },
});
