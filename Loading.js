import React from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native'
import firebase from 'react-native-firebase'

export default class Loading extends React.Component {
  componentDidMount() {
    // check information of user for routing
    firebase.auth().onAuthStateChanged(async user => {
      // console.log(JSON.stringify(user))
      if (user == null) {
        this.props.navigation.navigate('Auth')
      } else{
        await firebase.database()
        .ref(`user/${user.uid}`)
        .once('value')
        .then((snapshot) => {
          // check there is user in database or not
          if(snapshot.val()) {
            this.props.navigation.navigate('App')
          } else {
            this.props.navigation.navigate('SignUp')
          }
        })
      }
    })
  }
  render() {
    return (
      <ImageBackground
        source={require('./src/assets/images/background.png')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Image source={require('./src/assets/images/logo.png')} />
          <Text>Loading</Text>
          <ActivityIndicator size="large" />
        </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
