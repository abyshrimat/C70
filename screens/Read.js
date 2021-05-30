import * as React from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import db from '../config';
import { SearchBar } from 'react-native-elements';

export default class Read extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      author: '',
      story: '',
      ref: [],
    };
  }

  searchStory = async (text) => {
    const storyRef = await db
      .collection('stories')
      .where('title', '===', text)
      .get();

    storyRef.docs.map((doc) => {
      //  var story = doc.data();
      // console.log(story)
      // var authorV=story.author;
      //  console.log(authorV)
      this.setState({
        ref:[...this.state.ref, doc.data()],
          author: doc.data().author,
          story: '',
      });
    });
  };

  render() {
    return (
      <View style={{ backgroundColor: 'white', margin: 0, height: 700 }}>
        <View style={styles.head}>
          <Text style={styles.headT}> Read Stories ...</Text>
        </View>{' '}
        <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 2,
            placeholderTextColor: 'black',
            textAlign: 'center',
            borderRadius: 30,
            marginRight: 15,
            width: 260,
            color: 'black',
          }}
          placeholder="Search Here - Title of The Story"
          onChangeText={(text) => {
            this.setState({
              search: text,
            });
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.searchStory(this.state.search);
          }}
          style={{
            backgroundColor: '#FFD700',
            marginBottom: 5,
            textAlign: 'center',
            borderRadius: 100,
            borderWidth: '3px',
            padding: 0,
            marginRight: 0,
            marginLeft: 270,
            borderColor: 'black',
            marginTop: -40,
            width: 50,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'cursive',
            }}>
            {' '}
            Go{' '}
          </Text>{' '}
        </TouchableOpacity>
        <View>
          {' '}
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginTop: 20,
              textAlign: 'center',
            }}>
            Title : {this.state.search}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginTop: 20,
              textAlign: 'center',
            }}>
            Author : {this.state.author}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginTop: 20,
              textAlign: 'center',
            }}>
            Story : {this.state.story}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: 'pink',
    marginTop: 3,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'black',
    padding: 5,
  },
  headT: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
