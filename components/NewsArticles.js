import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const NewsKizi = ({ imageuri, title, subtext , onPress}) => {

  var date = new Date(subtext);
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  var hour = date.getHours()
  var minite = date.getMinutes();
  var koukaiHiduke = year + "年" + month + "月" + day + "日" + hour + ":" + minite ;

  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.moziBox}>
        <Text numberOfLines={2} style={styles.text}>{title}</Text>
        <Text style={styles.subText}>{koukaiHiduke}</Text>
      </View>

      <View style={styles.gazoBox}>
        <Image style={{ width: 100, height: 100 }} source={{ url: imageuri }} />
      </View>
    </TouchableOpacity>
  );
};

export default NewsKizi;

const styles = StyleSheet.create({
  box: {
    height: 110,
    width: "100%",
    borderColor: "black",
    borderWidth: 5,
    flexDirection: "row",
    margin:1,
  },

  moziBox: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },

  gazoBox: {
    width: 100,
    
  },

  text: {
    fontSize: 16,
  },

  subText: {
    fontSize: 12,
    color: "silver",
  },
});