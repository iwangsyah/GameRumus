import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class SplashScreen extends React.Component {

  constructor(props) {
  super(props)
  this.state = {
  }

}

  componentDidMount() {
    setTimeout(() => {Actions.welcome()}, 2000)
  }

  onClick() {

  }

  render() {
    return (
      <View style={styles.container}>
      <Image
        style={{width: 250, height: 200}}
        source={require('../images/logo.jpg')}/>
        <Text style={styles.title}>
          Master Rumus
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'rgb(78, 87, 97)',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
