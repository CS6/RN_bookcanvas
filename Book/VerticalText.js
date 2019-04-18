import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Button,
  Picker,
  TouchableOpacity,
} from 'react-native';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


// export default class VerticalText extends Component {

//   // constructor(){
//   //   super()
//   //   this.state = {
//   //     selectedItems: [],
//   //   }
//   // }
//   componentDidMount() {
    

//   }
  
 
//   render() {
//     let lineText = 24;//每行文字數量
//     let longText =this.props.text;
//     // list[longText.length] = {};
//     let list = longText.split('');
//     return (
//       <View style={{
//         height: 500, with: 500,
//          alignItems: 'center', justifyContent: 'flex-start', flexDirection: "column", flexWrap: "wrap-reverse", marginVertical: 20, marginLeft: 20
//       }}>
//         {list.map(function (val, index) {
//           // if (name.length > 5) {
//           //     name = name.substr(0, 5);
//           // }
//           //替換字元
//           // if (longText[index] == " ") {
//           //   return <View style={{ textAlign: "center", borderWidth: 1, }}>

//           //   <Text style={styles.CHfont}></Text>
//           // </View>          }
//           // else if (longText[index] == "，") {
//           //   return <View style={{ textAlign: "center", borderWidth: 1, }}>

//           //   <Text style={styles.CHfont}>[，]</Text>
//           // </View>          }
//           // else{
//           //   return <View style={{ textAlign: "center", borderWidth: 1, }}>

//           //   <Text style={styles.CHfont}>   {longText[index]}  </Text>
//           // </View>
//           // }

//           return <View style={{ textAlign: "center", borderWidth: 1, }}>

//           <Text style={styles.CHfont}>   {longText[index]}  </Text>
//         </View>
          
//         })}
//       </View>
//     );
//       // <verticalText text={"安安專為數位游牧打造的共享辦公室，遠眺大dd   台中城市景色的高樓視野，靜謐的工作環境充滿療癒的綠色植栽，舒適與友善的社群友善空間，提供新創團隊的工作氛圍，咖啡安安專為數位游牧打造的共享辦公室，遠眺大台中城市景色的高樓視野，靜謐的工作環境充滿療癒的綠色植栽，舒適與友善的社群友善空間，提供新創團隊的工作氛圍，咖啡"}/>


//   };
// }


export default class VerticalText extends Component {

  // const siez = this.state.fontSize;

  constructor(props){
    super(props);
    this.indexHistory = [0];
    this.state = {
      // fontSize: 18,
  };
  }
  componentDidMount() {
    
    // this.setState({ fontSize:this.props.fontSize });

  }
  
 
  render() {
    let lineText = 24;//每行文字數量
    let longText =this.props.text;
    // list[longText.length] = {};
    let list = longText.split('');
    // this.setState({ fontSize:this.props.fontSize });
    // console.warn(this.state.fontSize);
let LineFontSize ={ ...this.props.style }
    return (
      // <View style={{
      //   height: 500,
      //    alignItems: 'center', justifyContent: 'flex-start', flexDirection: "column", flexWrap: "wrap-reverse", 
      // }}>
     <View style= {[{ height: 500,
         alignItems: 'center', justifyContent: 'flex-start', flexDirection: "column", flexWrap: "wrap-reverse", 
     }, { ...this.props.style }]}>
        {list.map(function (val, index) {
          // if (name.length > 5) {
          //     name = name.substr(0, 5);
          // }
          //替換字元
          // if (longText[index] == " ") {
          //   return <View style={{ textAlign: "center", borderWidth: 1, }}>

          //   <Text style={styles.CHfont}></Text>
          // </View>          }
          // else if (longText[index] == "，") {
          //   return <View style={{ textAlign: "center", borderWidth: 1, }}>

          //   <Text style={styles.CHfont}>[，]</Text>
          // </View>          }
          // else{
          //   return <View style={{ textAlign: "center", borderWidth: 1, }}>

          //   <Text style={styles.CHfont}>   {longText[index]}  </Text>
          // </View>
          // }paddingHorizontal: 5,marginVertical: 1

          return <View style={[{ textAlign: "center" }]}key = { index } >
   {/* // <View style={[{ textAlign: "center",  }, { ...this.props.style }]}> */}
      
      {/* <Text style={[styles.CHfont, { ...this.props.style }]}>   {longText[index]}  </Text> */}

      {/* <Text style={styles.CHfont}>   {longText[index]}  </Text> */}
     
      {/* <Text  style={props.style || styles.CHfont} >   {longText[index]}  </Text> */}
          <Text style={[styles.CHfont,LineFontSize]}>   {longText[index]}  </Text>
        </View>
          
        })}
      </View>
    );
      // <verticalText text={"安安專為數位游牧打造的共享辦公室，遠眺大dd   台中城市景色的高樓視野，靜謐的工作環境充滿療癒的綠色植栽，舒適與友善的社群友善空間，提供新創團隊的工作氛圍，咖啡安安專為數位游牧打造的共享辦公室，遠眺大台中城市景色的高樓視野，靜謐的工作環境充滿療癒的綠色植栽，舒適與友善的社群友善空間，提供新創團隊的工作氛圍，咖啡"}/>


  };
}



const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: '#FFFFFF',
  }, textView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaeb23',
  }, textLine: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCaa',
  }, CHfont: {
    // textAlign: "center",
    fontSize: 18,
    // paddingHorizontal: -41,
    color: "#FFFFFF",
    // width: 49,
    // flex: 1,
    //justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5ACaB',
  },
  TopContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: '#ffa',
  }, bodyContent: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row-reverse",
    backgroundColor: '#aaaaaa',
  }, TitleContent: {
    flex: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: "column",
    backgroundColor: '#23aaeD',
  }, textContent: {
    flex: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
     flexDirection: "row-reverse",
    backgroundColor: '#23aaaa',
  },







  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    backgroundColor: '#ededed',
    borderRadius: 5,
    height: 50,
    marginVertical: 10,
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  navLeft: {
    alignItems: 'center',
    marginLeft: 10,
  },
  navRight: {
    alignItems: 'center',
    marginRight: 10,
  },
  navIcon: {
    height: 20,
    width: 20,
  },
  navText: {
    fontSize: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    backgroundColor: '#ededed',
    borderRadius: 5,
    height: 30,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  searchContent: {
    color: '#666',
    fontSize: 14,
  },
  tabBarUnderline: {
    backgroundColor: '#b4282d',
    height: 2,
    width: width / 8,
    marginLeft: 6
  }

});