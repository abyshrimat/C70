import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import Header from '../components/Header';
import db from '../config';

export default class Write extends React.Component {
  constructor() {
    super();
    this.state = {
      titleTxt: '',
      authorTxt: '',
      storyTxt: '',
    };
  }

  submitStory = () => {
    db.collection('stories').add({
      author: this.state.authorTxt,
      title: this.state.titleTxt,
      txt: this.state.storyTxt,
    });

    ToastAndroid.show(
      'Your story has been submitted successfully !!',
      ToastAndroid.SHORT
    );
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={{ backgroundColor: 'white', margin: 0, height: 700 }}>
          <Header />

          <TextInput
            style={{
              height: 40,
              borderColor: 'black',
              borderWidth: 2,
              placeholderTextColor: 'black',
              textAlign: 'center',
              borderRadius: 30,
              margin: 15,
              color: 'black',
            }}
            placeholder="Title of The Story"
            onChangeText={(text) => {
              this.setState({
                titleTxt: text,
              });
            }}
          />

          <TextInput
            style={{
              height: 40,
              borderColor: 'black',
              borderWidth: 2,
              placeholderTextColor: 'black',
              textAlign: 'center',
              borderRadius: 30,
              margin: 15,
              color: 'black',
            }}
            placeholder="Author of The Story"
            onChangeText={(text) => {
              this.setState({
                authorTxt: text,
              });
            }}
          />

          <TextInput
            style={{
              height: 200,
              borderColor: 'black',
              borderWidth: 2,
              placeholderTextColor: 'black',
              textAlign: 'center',
              borderRadius: 30,
              margin: 20,
              color: 'black',
            }}
            placeholder="Type the story here ..."
            onChangeText={(text) => {
              this.setState({
                storyTxt: text,
              });
            }}
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#FFD700',
              marginBottom: 20,
              textAlign: 'center',
              borderRadius: 100,
              borderWidth: '3px',
              padding: 10,
              marginRight: 20,
              marginLeft: 20,
              borderColor: 'black',
              marginTop: 30,
            }}>
            <Text
              onPress={this.submitStory}
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'cursive',
              }}>
              {' '}
              SUBMIT{' '}
            </Text>{' '}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
