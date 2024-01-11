import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.box}>
       <View style={styles.moziBox}>
         <Text numberOfLines={2} style={styles.text}>【兄】康平、羞恥のランニング　「小さな集落はみんなから観察される、怖い」</Text>
         <Text style={styles.subText}>ゴリラ日報　2024年01月06日</Text>
       </View>

      <View style={styles.gazoBox}>
       <Image
        style={{width:70, height:70}}
        source={{uri:"https://runningdaigaku.com/university/wp-content/uploads/2018/06/f237c21624fe2529b770939555017e55.jpg"}}
        // source={{uri:"https://picsum.photos/id/237/200/300"}}
       />
      </View>
      </View>

      {/* 2つめ */}

      <View style={styles.box}>
       <View style={styles.moziBox}>
         <Text numberOfLines={2} style={styles.text}>【叔母】順子、性格診断で巨匠 (ISTP型の性格)「まさに当たっている」</Text>
         <Text style={styles.subText}>ゴリラ日報　2024年01月05日</Text>
       </View>

      <View style={styles.gazoBox}>
       <Image
        style={{width:70, height:70}}
        source={{uri:"https://th.bing.com/th/id/OIP.ysCVhsjX2aigV40TGqFftwHaE8?rs=1&pid=ImgDetMain"}}
       />
      </View>
      </View>
      {/* 2つめ */}
      <View style={styles.box}>
       <View style={styles.moziBox}>
         <Text numberOfLines={2} style={styles.text}>【祖母】フミエ、椅子を使ってもカズマに身長で勝てず...縮んでしま　</Text>
         <Text style={styles.subText}>ゴリラ日報　2024年01月02日</Text>
       </View>

      <View style={styles.gazoBox}>
       <Image
        style={{width:70, height:70}}
        source={{uri:"https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/325/002/lqip.jpg?1559629845"}}
       />
      </View>
      </View>
      {/* 2つめ */}
      <View style={styles.box}>
       <View style={styles.moziBox}>
         <Text numberOfLines={2} style={styles.text}>【祖父】義信「正月に酔っぱらう奴が多すぎる」主犯は鵜木英樹氏</Text>
         <Text style={styles.subText}>ゴリラ日報　2024年01月02日</Text>
       </View>

      <View style={styles.gazoBox}>
       <Image
        style={{width:70, height:70}}
        source={{uri:"https://photohito.k-img.com/uploads/photo36/user38835/aaf7ea0995645e417a45bcbf16eec542/aaf7ea0995645e417a45bcbf16eec542_l.jpg"}}
       />
      
      </View>
      </View>
      {/* 2つめ */}
      <View style={styles.box}>
       <View style={styles.moziBox}>
         <Text numberOfLines={2} style={styles.text}>【家族】正月来る！フミエ「康平が手伝わない」 康平「来年頑張る」</Text>
         <Text style={styles.subText}>ゴリラ日報　2023年12月28日</Text>
       </View>

      <View style={styles.gazoBox}>
       <Image
        style={{width:70, height:70}}
        source={{uri:"https://chicodeza.com/wordpress/wp-content/uploads/kagamimochi-illust-01.jpg"}}
       />
      </View>
      </View>
      {/* 2つめ */}
      <View style={styles.box}>
       <View style={styles.moziBox}>
         <Text numberOfLines={2} style={styles.text}>【祖父】義信、かなり耳が遠くなる 「聞こえない幸せもある」</Text>
         <Text style={styles.subText}>ゴリラ日報　2023年10月20日</Text>
       </View>

      <View style={styles.gazoBox}>
       <Image
        style={{width:70, height:70}}
        source={{uri:"https://as1.ftcdn.net/v2/jpg/01/14/03/14/1000_F_114031463_dPtkZZr9nNQs7m4C1Fctuwa842WvUtWx.jpg"}}
       />
      </View>
      </View>
      {/* 2つめ */}
      <View style={styles.box}>
       <View style={styles.moziBox}>
         <Text numberOfLines={2} style={styles.text}>【妹】百恵、入籍！お相手は身長約2m50cmのハンドボール選手</Text>
         <Text style={styles.subText}>ゴリラ日報　2023年06月01日</Text>
       </View>

      <View style={styles.gazoBox}>
       <Image
        style={{width:70, height:70}}
        source={{uri:"https://th.bing.com/th?id=OIF.fhKl3kG8nBtXzc%2fKuLSmkA&rs=1&pid=ImgDetMain"}}
       />
      </View>
      </View>
      </View>

  );
}

const styles = StyleSheet.create({
 
    container: {
    flex: 1,
    backgroundColor: "yellow",
    // alignItems:"center",
    // justifyContent:"center",
    // margin:1
  },

  box:{
    height:100,
    width: "100%",
    borderColor: "black",
    borderWidth:5,
    flexDirection:"row",
    margin:1
  },

  moziBox:{
    flex:1,
    // width:250,
    // alignItems:"center",
    justifyContent: "space-between",
    // flexDirection:"row",
    padding:16
  },

  gazoBox:{
    // flex:1,
    padding:13,
    // justifyContent:"center",
    width: 100,
  },

  text: {
    fontSize:17
  },

  subText:{
    fontSize: 12,
    color: "silver"
  }
});
