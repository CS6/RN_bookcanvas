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
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


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



  render() {
     //脚本注入
     injectJS = () => {
      const script = 'document.write("Injected JS ")';  // eslint-disable-line quotes
      if (this.webview) {
          this.webview.injectJavaScript(script);
      }
  }

  //向HTML发送数据
  _postMessage = () => {
      this.setState({isPostMessage: true, isHtml: true})

      setTimeout(() => {
          if (this.webview) {
              this.webview.postMessage('"Hello" 我是RN发送过来的数据');
          }
      }, 4000);
  }
  //接收HTML发出的数据
  _onMessage = (e) => {
      this.setState({
          messagesReceivedFromWebView: this.state.messagesReceivedFromWebView + 1,
          message: e.nativeEvent.data,
      })
      Alert.alert(e.nativeEvent.data)
  }
    return (
      <ScrollView style={{flex: 1}}>
      <Text style={{flex: 1, height:height*0.1, backgroundColor: "#aff"}}>
        Upper text
      </Text>
      {/* <WebView
        style={{flex: 1, height: height*0.8, backgroundColor: 'yellow'}}
        originWhitelist={['*']}
        source={{uri: 'https://github.com/facebook/react-native'}}
      />
       */}
           <WebView
        style={{flex: 1, height: height*0.8, backgroundColor: 'yellow'}}
        originWhitelist={['*']}
        source={require('./pages/call.html')}
      />
         



      <Text style={{flex: 1,height:height*0.1, backgroundColor: '#aae'}}>
        Lower text
      </Text>
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
