/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  Platform,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
import React, { Component } from 'react';

import dependency0 from './Dependency0';
import dependency1 from './Dependency1';
import dependency2 from './Dependency2';
import dependency3 from './Dependency3';
import dependency4 from './Dependency4';
import { instructions } from './instructions';

export const circularInstructions = 'foo and bar';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text>{circularInstructions}</Text>
        <Text>{dependency0}</Text>
        <Text>{dependency1}</Text>
        <Text>{dependency2}</Text>
        <Text>{dependency3}</Text>
        <Text>{dependency4}</Text>
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
