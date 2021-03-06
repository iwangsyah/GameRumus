import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import { connect, Provider } from 'react-redux'

import SplashScreen from '../components/SplashScreen'
import WelcomeScreen from '../components/WelcomeScreen'
import HomeScreen from '../components/HomeScreen'


//import store from '../store'

console.ignoredYellowBox = [
  'Remote debugger is in a background tab',
  'Warning: BackAndroid is deprecated.',
  'Warning: In next release empty section headers will be rendered.',
  'Possible Unhandled Promise Rejection',
]

const RouterWithRedux = connect()(Router)

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='splash'
                 component={SplashScreen}
                 title='Splash'
                 hideNavBar={true}
                 initial={true}
                 />
          <Scene key='welcome'
                 component={WelcomeScreen}
                 title='Welcome'
                 hideNavBar={true}
                 />
          <Scene key='home'
                 component={HomeScreen}
                 title='Home'
                 hideNavBar={true}
          />
        </Scene>
      </Router>
    )
  }
}
