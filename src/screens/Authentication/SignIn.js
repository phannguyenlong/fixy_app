import {
  View,
  Image,
  Picker,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'
import React, {Component} from 'react'
import {AccessToken, LoginManager} from 'react-native-fbsdk'
import firebase from 'react-native-firebase'
import styles from '../../styles/Authentication.style/SignIn.style'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Auth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'vi',
      countryCode: '+84',
      phoneNumber: '0',
      password: '',
      isLoading: false,
      confirmCode: null,
      credential: null,
    }
  }
  fbLoginHandler = async e => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ])
      if (result.isCancelled) {
        // handle this however suites the flow of your app
        throw new Error('User cancelled request')
      }
      console.log(
        `Login success with permissions: ${result.grantedPermissions.toString()}`,
      )
      // get the access token
      const data = await AccessToken.getCurrentAccessToken()
      if (!data) {
        // handle this however suites the flow of your app
        throw new Error('Something went wrong obtaining the users access token')
      }
      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(
        data.accessToken,
      )
      // login with credential
      const firebaseUserCredential = await firebase
        .auth()
        .signInWithCredential(credential)
    } catch (e) {
      console.error(e)
    }
  }

  // phone number login
  handlePhoneNumberSubmit = () => {
    const {phoneNumber} = this.state
    this.setState({isLoading: true})
    firebase
      .auth()
      .signInWithPhoneNumber(`+84${phoneNumber}`)
      .then(confirmCode => {
        this.setState({isLoading: false})
        this.props.navigation.navigate('VerficationCode', {
          code: confirmCode,
          phoneNumber: phoneNumber,
        })
      })
      .catch(error => {
        this.setState({isLoading: false})
        alert(error)
      })
  }

  render() {
    const {isLoading} = this.state
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/logo_withSologan.png')}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.phoneLogInContainer}>
              <Picker
                selectedValue={this.state.language}
                style={styles.countryPicker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
                }>
                <Picker.Item label="Việt Nam (+84)" value="vi" />
              </Picker>
              <TextInput
                style={styles.inputElement}
                onChangeText={value => this.setState({phoneNumber: value})}
                placeholder="Số điện thoại"
                textContentType="telephoneNumber"
                keyboardType="numeric"
              />
              <TouchableOpacity
                style={styles.signInBtn}
                onPress={() => this.handlePhoneNumberSubmit()}
                disabled={isLoading}>
                <Text style={styles.signInBtnText}>Tiếp tục</Text>
                {isLoading ? (
                  <ActivityIndicator size="small" color="#00ff00" />
                ) : null}
              </TouchableOpacity>
            </View>
            <View style={styles.socialLoginContainer}>
              <Text style={styles.seperator}> ─────────  Hoặc  ─────────</Text>
              <Icon.Button
                name="facebook"
                backgroundColor="#4285F4"
                size={30}
                onPress={this.fbLoginHandler}>
                Login with Facebook
              </Icon.Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
