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

import VerticalText from './VerticalText'

let longString = "安安ssss專為數位游牧打造的共享辦公室，遠眺大台中城市景色的高樓視野，靜謐的工作環境充滿療癒的綠色植栽，舒適與友善的社群友善空間，提供新創團隊的工作氛圍，咖啡";
export class TitleLine extends Component {

  render() {
    //ㄥstring result = "Jack and JACK or Jack";
    let lineText = 24;//每行文字數量

    //result =  result.Replace("Jack", "Marry");
    // var list = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
    // var name = "Mark Zuckerberg";
    let longText = "Monospace 共同工作空間";
    longText = longText.replace(new RegExp("。", "g"), "Ｏ");

    // list[longText.length] = {};
    let list = longText.split('');
    return (
      <View style={{
        //height: 500, with: 500,        flex: 1, 
        alignItems: 'center', justifyContent: 'flex-start', flexDirection: "column", flexWrap: "wrap-reverse", marginVertical: 20, marginLeft: 20,marginRight: 20
      }}>
        {list.map(function (val, index) {
          // if (name.length > 5) {
          //     name = name.substr(0, 5);
          // }

          if (longText[index] == " ") {
            return <View style={{ textAlign: "center", borderWidth: 1, }}>

            <Text style={styles.CHfont}>[]</Text>
          </View>          }
          else{
            return <View style={{ textAlign: "center", borderWidth: 1, }}>

            <Text style={styles.CHfont}>   {longText[index]}  </Text>
          </View>
          }

          
        })}
      </View>
    );
  }
}
export class Line extends Component {

  render() {
    //ㄥstring result = "Jack and JACK or Jack";
    let lineText = 24;//每行文字數量

    //result =  result.Replace("Jack", "Marry");
    // var list = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
    // var name = "Mark Zuckerberg";
    let longText = "  專為數位游牧wwwww打造的共享辦公室，遠眺大台中城市景色的高樓視野，靜謐的工作環境充滿療癒的綠色植栽，舒適與友善的社群友善空間，提供新創團隊的工作氛圍，咖啡飲品皆免費供應。";
    longText = longText.replace(new RegExp("。", "g"), "Ｏ");

    // list[longText.length] = {};
    let list = longText.split('');
    return (
      <View style={{
        height: 500, with: 500,
        flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: "column", flexWrap: "wrap-reverse", marginVertical: 20, marginLeft: 20
      }}>
        {list.map(function (val, index) {
          // if (name.length > 5) {
          //     name = name.substr(0, 5);
          // }

          if (longText[index] == " ") {
            return <View style={{ textAlign: "center", borderWidth: 1, }}>

            <Text style={styles.CHfont}>[]</Text>
          </View>          }
          else{
            return <View style={{ textAlign: "center", borderWidth: 1, }}>

            <Text style={styles.CHfont}>   {longText[index]}  </Text>
          </View>
          }

          
        })}
      </View>
    );
  }
}
export class Line2 extends Component {

  render() {
    let lineText = 24;//每行文字數量
    let longText =this.props.text;
    // list[longText.length] = {};
    let list = longText.split('');
    return (
      <View style={{
        height: 500, with: 500,
         alignItems: 'center', justifyContent: 'flex-start', flexDirection: "column", flexWrap: "wrap-reverse", marginVertical: 20, marginLeft: 20
      }}>
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
          // }

          return <View style={{ textAlign: "center", borderWidth: 1, }}>

          <Text style={styles.CHfont}>   {longText[index]}  </Text>
        </View>
          
        })}
      </View>
    );
  }
}

class Counter extends React.Component {
  state = { count: 0 };

  setCount = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
  )

  render() {
    const { count } = this.state;

    return (
      <View style={[styles.bg, { ...this.props.style }]}>
        <View style={{ height: 100 }}>
          <Text style={count < 5 ? { fontSize: 100 } : { fontSize: 10 }}>You clicked {count} times</Text>
          <Text style={[{ fontSize: 15 } , { ...this.props.style }]}>You clicked {count} times</Text>

        </View>
        <View style={{ height: 100 }}>
          <TouchableOpacity style={styles.button} onPress={this.setCount}>
            <Text style={styles.buttonText}>Click</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class TTXXTT extends React.Component {
  state = { count: 0 };

  setCount = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
  )

  render() {
    const { count } = this.state;

    return (
      <View style={[styles.bg, { ...this.props.style }]}>
        <View style={{ height: 100 }}>
          <Text style={count < 5 ? { height: 100 } : { height: 100 }}>You clicked {count} times</Text>
        </View>
        <View style={{ height: 100 }}>
          <TouchableOpacity style={styles.button} onPress={this.setCount}>
            <Text style={styles.buttonText}>Click</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class verticalText extends Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     selectedItems: [],
  //   }
  // }
  componentDidMount() {
    //检测网络是否连接
    // this.scrollView.scrollTo({ x: 0 })

    // this.scrollView.scrollTo({ x: 0, y: 0, animated:true});

  }
  
 
  render() {
    return (
      // <SafeAreaView style={styles.container}>
        <View style={styles.container}>


     
          <View style={styles.bodyContent}>
            {/* ///TITLE */}


            <View style={styles.textContent}>


              {/* 內文 */}
              {/* <Line wordCount={24} /> */}
              <VerticalText text={"安安專為數asfsf位游牧打造的"}/>
              <VerticalText   style={{backgroundColor: '#aFFF',color:'black',fontSize: 30}} text={"安安專為數asfsf位游牧打造的"}/>

     
{/* <Counter style={{ backgroundColor: '#aFF',fontSize: 78}}/> */}

            </View>


          </View>




        </View>
      // </SafeAreaView>


    );
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
    color: "#FFFFFF",
    // width: 49,
    // flex: 1,
    //justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5ACaB',
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
  },

  bg: { flex:1, paddingTop: 150, alignItems: 'center', backgroundColor: '#cbf35c' },
  less: { fontSize: 25, color: '#4d3398', fontWeight: 'bold' },
  greater: { fontSize: 25, color: '#f3845c', fontWeight: 'bold' },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: '#3498db'
  },
  buttonText: {
    fontSize: 25,
    color: '#fff'
  }

});