import React, {Component} from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  Alert,
} from 'react-native'
import styles from '../../styles/Authentication.style/VerficationCode.style'
import firebase from 'react-native-firebase'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      confirmCode: null,
      codeInput: null,
      phoneNumber: null,
    }
  }
  componentDidMount() {
    const confirmCode = this.props.navigation.getParam('code', 'no_code')
    const phoneNumber = this.props.navigation.getParam(
      'phoneNumber',
      'Không tìm thấy',
    )
    this.setState({confirmCode, phoneNumber: phoneNumber})
  }

  // phone number login
  handleCodeVerification = async () => {
    const {confirmCode, codeInput, phoneNumber} = this.state
    this.setState({isLoading: true})
    await confirmCode
      .confirm(codeInput)
      .then(async user => {
        // check whether a facebook account using this phone or not
        await firebase
          .database()
          .ref('user')
          .once('value')
          .then(async snapshot => {
            await snapshot.forEach(childSnapshot => {
              if (
                childSnapshot.val().phoneNumber == `+84${Number(phoneNumber)}` &&
                childSnapshot.val().typeOfAuth !== 'phone'
              ) {
                // if yes: redirect to login by facebook
                // console.log(childSnapshot.val().credential)
                // this.props.navigation.navigate('confirmAccount', {
                //   username: childSnapshot.val().name,
                // })
                // this.props.navigation.navigate('App')
                firebase
                  .auth()
                  .signInWithCredential(childSnapshot.val().credential)
              }
            })
          })
      })
      .catch(error => {
        this.setState({isLoading: false})
        alert(error)
      })
  }

  render() {
    const {isLoading, phoneNumber} = this.state
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.content}>
            <View style={styles.displayContainer}>
              <Text style={styles.firstText}>
                Xin hãy xác minh code đã gửi đến số điện thoại
              </Text>
              <Text style={styles.secondText}>{`+84${Number(
                phoneNumber,
              )}`}</Text>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputElement}>
                <TextInput
                  style={{display: 'flex', flex: 1, justifyContent: 'center'}}
                  placeholder="Code"
                  textContentType="oneTimeCode"
                  keyboardType="numeric"
                  onChangeText={value => this.setState({codeInput: value})}
                />
              </View>
              <TouchableOpacity
                onPress={this.handleCodeVerification}
                style={styles.signInBtn}>
                <Text style={styles.signInBtnText}>Tiếp tục</Text>
                {isLoading ? (
                  <ActivityIndicator size="small" color="#00ff00" />
                ) : null}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignIn')}
                style={styles.signInBtn}>
                <Text style={styles.signInBtnText}>Đổi số điện thoại</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
