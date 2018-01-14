import React from 'react'
import Orientation from 'react-native-orientation'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'


export default class WelcomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
    this._toHome = this._toHome.bind(this)
  }

  _toHome() {
    Actions.home()
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._toHome}>
          <Text style={styles.welcome}>
            Welcome
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  welcome: {
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
})
