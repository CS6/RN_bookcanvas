/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,
   StyleSheet,
    Text,
     View,
     WebView,
     ScrollView,
     TextInput,
     TouchableOpacity,
     Alert,
     Dimensions,
    } from 'react-native';
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
import { Simplized,Traditionalized} from './TS'
import BOOK from './Book/BOOK'
import BookBody from './data//novel01'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
let example  = `# 第一章 欺诈师假冒大人物

    眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。

    不过，还是能记得她就是给自己带来幸福的天使呢。

    这个一身乡下打扮的少女，眼睛紧紧的盯着这边，再一次问到。

    【您真的就是白银的艾希尔大人吧？】

    虽然她已经问了五次了，不过毕竟是请自己吃了一顿大餐的人，不可以露出糟糕的态度。于是再一次回答到。

    【正是。我就是民间传闻里的天秤评议会中的一位军师，白银的艾希尔。】

    【我听说白银的艾希尔大人，有着一头漂亮的银发呢】

    【喂喂，如果白银的艾希尔大人跟他的绰号一样有着银发，那也未免太过直白了吧。一点不同都没有吗】

    【诶，是这样的吗……】

    【是的哦，就是这样。比如说，苍狼也并不是蓝色的吧，仔细看看的话不就是灰色的吗。还有红莲熊在初春的时候是红茶色的吧，根本就不是红莲嘛。】

    【哈，确实也是】

    【所以说，白银的艾希尔的头发是黑色的这种事情是一点问题都没有的吧。不对，应该说这就是当然的，是自然的哲理，是神明的旨意，是命运的使然。】

    【……原来如此，确实您这么一说我也明白了。如果白银的艾希尔大人的头发是白银色的，反而很奇怪呢】

        【OK，OK，你能明白就好了。本来像我这样的大人物，就是不可以太过引人注目的嘛】

    这位叫做白银的艾希尔的男子，抖了抖腿，又大声的向店员喊道要追加料理了。


    【诶，是这样的吗……】

    【是的哦，就是这样。比如说，苍狼也并不是蓝色的吧，仔细看看的话不就是灰色的吗。还有红莲熊在初春的时候是红茶色的吧，根本就不是红莲嘛。】

    【哈，确实也是】

    【所以说，白银的艾希尔的头发是黑色的这种事情是一点问题都没有的吧。不对，应该说这就是当然的，是自然的哲理，是神明的旨意，是命运的使然。】

    【……原来如此，确实您这么一说我也明白了。如果白银的艾希尔大人的头发是白银色的，反而很奇怪呢】

        【OK，OK，你能明白就好了。本来像我这样的大人物，就是不可以太过引人注目的嘛】

    这位叫做白银的艾希尔的男子，抖了抖腿，又大声的向店员喊道要追加料理了。

` ;

class WebViewScreen extends React.Component {
  render() {
    return (
      // <WebView source={require('./pages/index.html')} />
      <WebView source={{uri: 'https://github.com/facebook/react-native'}} />

      

    )
  }
}


type Props = {};
export default class App extends Component<Props> {
//  //向HTML发送数据
//  _postMessage = () => {
//   this.setState({isPostMessage: true, isHtml: true})

//   setTimeout(() => {
//       if (this.webview) {
//           this.webview.postMessage('"Hello" 我是RN发送过来的数据');
//       }
//   }, 4000);
// }
// //接收HTML发出的数据
// _onMessage = (e) => {
//   this.setState({
//       messagesReceivedFromWebView: this.state.messagesReceivedFromWebView + 1,
//       message: e.nativeEvent.data,
//   })
//   Alert.alert(e.nativeEvent.data)
// }
constructor(props){
  super(props);
  this.indexHistory = [0];
  this.state = {
    all_font_num: 0,
    index: 0,
    reading:0,
    data: "這裡還沒有文章喔",
    lang:true,
    num:1,
    font:true,
    fontFamily:"",

};
    this.onMessage = this.onMessage.bind(this);
}
onMessage(e){
  // let text = "眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了";
  // let a = 4;
  // let b = 6;
  var event =e.nativeEvent;
  var data=JSON.parse(event.data);

this.setState({index:data});
this.indexHistory.push(data);
  // this.refs.webviewRef.postMessage(JSON.stringify({
  //     result:event
  //  }))
}

_post(){
    this.refs.webviewRef.postMessage(JSON.stringify({
      content:this.state.data,
      style: {
        backgroundColor: "black",
        color: "skyblue",
        fontFamily: "Noto Sans TC"
      },
      index: this.state.index
    }))
}
_next(){
  this.refs.webviewRef.postMessage(JSON.stringify({
    content:this.state.data,
    style: {
      backgroundColor: "black",
      color: "skyblue",
      fontFamily: "HiraMinProN-W3"
    },
    index: this.state.index
  }))
}
_prev(){
  this.indexHistory.pop();
  this.indexHistory.pop();
  this.refs.webviewRef.postMessage(JSON.stringify({
    content:this.state.data,
    style: {
      backgroundColor: "#aaa",
      color: "black",
      fontFamily: "Noto_Serif_TC"
    },
    index: this.indexHistory.pop()
  }))
}

_post_text(){
    // let text = "AA眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了";
  // let a = 4;
  // let b = 6;
  // let text = "12345678901234567890123456789012345678901234567890123456789012345678901234567890";
  let text = "眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了眼前这位咽了一口口水的少女，名字是，叫啥来着？忘了。的少女，名字是，叫啥来着？忘了的少女，名字是，叫啥来着？忘了名字是名字是名字是名字是名字是名字是名字是";

  this.refs.webviewRef.postMessage(JSON.stringify({
      result:text
   }))
}

componentWillMount() {
  // data=TS(text);
  this.setState({ data: Traditionalized(BookBody) });

}
componentDidMount() {
if (this.state.data.indexOf("    ") > -1) {
  }
  this.setState({ data: this.state.data.replace(/\n\n|\r\n\r\n/g, "\n") });

  // example = example.replace(/\n\n|\r\n\r\n/g, "\n");
  this.state.data
  
  // example.replace("    ","g");
  // example = example.replace(/\n/g,"@");
  // example = example.replace(/\s\s\s\s/g,"  ");

  console.log(example);
}

handleClick = () => {
  this.setState({ 
    data: this.state.lang ? Simplized(this.state.data) : Traditionalized(this.state.data),
    lang:!this.state.lang
  });
  this.indexHistory.pop()
  this.refs.webviewRef.postMessage(JSON.stringify({
    content:this.state.data,
    index: this.indexHistory[this.indexHistory.length - 1]
  }))
  //參考
  // this.setState({ data: (this.state.lang ? Simplized : Traditionalized)(this.state.data) });
}

switchfont = () => {
  this.setState({ 
    fontFamily: this.state.font ?'HiraMinProN-W3':'Noto_Serif_TC',
    font:!this.state.font
  });
  this.refs.webviewRef.postMessage(JSON.stringify({
    style: {
      backgroundColor: "#345",
      color: "skyblue",
      fontFamily: this.state.fontFamily,
    },
  }))
}


  render() {
    return (
      <ScrollView style={{flex: 1}}>
<View style={{flexDirection:'row'}}>
<TouchableOpacity onPress={() => { this._post_text()}} style={{flex: 1,height:height*0.1, backgroundColor: '#aff'}}>
  


      <Text style={{}}>
        Upper text
    
      </Text>
        
</TouchableOpacity>
<TouchableOpacity onPress={() => { this.switchfont()}} style={{flex: 1,height:height*0.1, backgroundColor: '#aae'}}>
<Text>
{this.state.font ? 'HiraMinProN-W3':'Noto_Serif_TC'}
</Text>
<Text>
{this.state.font ? 'HiraMinProN-W3':'Noto_Serif_TC'}
</Text>
<Text>
{this.state.font ? 'HiraMinProN-W3':'Noto_Serif_TC'}
</Text>
        
</TouchableOpacity>
<TouchableOpacity onPress={() => { this.handleClick()}} style={{flex: 1,height:height*0.1, backgroundColor: '#f03'}}>
<Text>
{this.state.lang ? '轉簡體':'轉繁體'}
</Text>
<Text>
{this.state.lang ? '轉簡體':'轉繁體'}
</Text>
<Text>
{this.state.lang ? '轉簡體':'轉繁體'}
</Text>
        
        
</TouchableOpacity>
</View>
      {/* <WebView
        style={{flex: 1, height: height*0.8, backgroundColor: 'yellow'}}
        originWhitelist={['*']}
        source={{uri: 'https://github.com/facebook/react-native'}}
      />
       */}

                 <WebView 
                         style={{ height: height*0.8, backgroundColor: 'yellow'}}
                 ref={'webviewRef'} 
                 automaticallyAdjustContentInsets={false} 
                 onMessage={this.onMessage} 
                 javaScriptEnabled={true} 
                 source={require('./pages/canvas-text-test.html')}
                 /> 
                  {/* <WebView
                  ref={'webviewRef'} 
                  style={{ height: height*0.8, backgroundColor: 'yellow'}}
                  automaticallyAdjustContentInsets={false} 
                  javaScriptEnabled={true} 
                  source={{uri: 'https://my-fuck-awesome-project.firebaseapp.com/phone-invisible.html'}}
                  /> */}
            {/* <WebView 
                         style={{ height: height*0.8, backgroundColor: 'yellow'}}
                 ref={'webviewRef'} 
                 automaticallyAdjustContentInsets={false} 
                 onMessage={this.onMessage} 
                 javaScriptEnabled={true} 
                 source={{uri: 'https://my-fuck-awesome-project.firebaseapp.com/phone-invisible.html'}}
                         source={{uri: 'https://github.com/facebook/react-native'}}

                 />  */}


                 {/* <BOOK/> */}
           {/* <WebView
        style={{flex: 1, height: height*0.8, backgroundColor: 'yellow'}}
        originWhitelist={['*']}
        source={require('./pages/call.html')}
      />
           */}

<View style={{flexDirection:'row'}}>
<TouchableOpacity onPress={() => { this._next()}} style={{flex: 1,height:height*0.1, backgroundColor: '#aae'}}>
      <Text >
      _next text
        {/* {this.state.num} */}

        {this.state.index}
        {/* {example[this.state.all_font_num-1]} */}
      </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { this._prev()}} style={{flex: 1,height:height*0.1, backgroundColor: '#fae'}}>
      <Text >
        {/* {this.state.num} */}

        {this.state.index}
        {/* {example[this.state.all_font_num-1]} */}
      </Text>
      </TouchableOpacity>

</View>

    </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
