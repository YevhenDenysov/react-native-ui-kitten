import React, {Component} from 'react';

import {
  ScrollView,
  Animated,
} from 'react-native';

import { RkConfig} from '../../config/config';

export class RkBoardUpView extends Component {


  constructor(props) {
    super(props);
    this.state = {
      top: new Animated.Value(0),
    };
  }

  onKeyboardWillShow(e) {
    Animated.timing(this.state.top, {
      toValue: -(e.startCoordinates.height),
      duration: 200,
    }).start();
  }

  onKeyboardDidShow(e) {

  }

  onKeyboardWillHide(e) {
    Animated.timing(this.state.top, {
      toValue: 0,
      duration: 200,
    }).start();
  }

  onKeyboardDidHide(e) {

  }

  render() {

    let {
      style,
      children,
      ...props
      } = this.props;
    return (
      <Animated.View style={[{position: 'relative', top: this.state.top}, style]} {...props}
        >
        {children}
        <ScrollView
          style={{height: 0, width: 0}}
          onKeyboardWillShow={(e)=>{this.onKeyboardWillShow(e)}}
          onKeyboardDidShow={(e)=>{this.onKeyboardDidShow(e)}}
          onKeyboardWillHide={(e)=>{this.onKeyboardWillHide(e)}}
          onKeyboardDidHide={(e)=>{this.onKeyboardDidHide(e)}}
          scrollEnabled={false}
          >
        </ScrollView>
      </Animated.View>
    );
  }


}
