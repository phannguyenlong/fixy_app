import React from 'react'
import {
  Text,
  TextInput,
  View,
  Picker,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from '../../styles/Authentication.style/SignUp.style'
import firebase from 'react-native-firebase'
import {AccessToken} from 'react-native-fbsdk'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phoneNumber: null,
      address: null,
      name: null,
      gender: null,
      email: null,
      id: null,
      typeOfAuth: null,
      codeInput: null,
      confirmCode: null,
      credential: null,
    }
  }
  componentDidMount = async () => {
    let user = firebase.auth().currentUser
    this.ref = firebase.database().ref(`user/${user.uid}`)
    this.setState({
      phoneNumber: user.phoneNumber,
      name: user.displayName,
      email: user.email,
      id: user.uid,
      typeOfAuth: user.providerData[0].providerId,
    })
    const data = await AccessToken.getCurrentAccessToken()
    const credential = firebase.auth.FacebookAuthProvider.credential(
      data.accessToken,
    )
    this.setState({credential})
  }
  changePhoneNumber = () => {
    const {typeOfAuth} = this.state
    if (typeOfAuth == 'phone') {
      firebase.auth().signOut()
      this.props.navigation.navigate('Auth')
    } else {
      this.setState({confirmCode: null})
    }
  }
  handleSignUp = async () => {
    const {typeOfAuth} = this.state
    this.setState({isContinue: true, isLoading: true})
    await firebase
      .auth()
      .currentUser.updateProfile({displayName: this.state.name})
      .catch(err => alert(err))
    await this.ref.set(this.state, function(err) {
      if (err) {
        alert(err)
      }
    })
    this.setState({isLoading: false})
    if (typeOfAuth !== 'phone') {
      alert('Đăng ký thành công\nVui lòng đăng nhập lại')
      firebase.auth().signOut()
      this.props.navigation.navigate('Auth')
    }
  }
  handleFbSignUp = async () => {
    const {phoneNumber, confirmCode, codeInput} = this.state
    this.setState({isLoading: true})
    let isUseByAnotherAccount = false
    await firebase
      .database()
      .ref('user')
      .once('value')
      .then(snapshot => {
        snapshot.forEach(async childSnapshot => {
          let phoneNumberDB = await childSnapshot.val().phoneNumber
          if (phoneNumberDB == `+84${Number(phoneNumber)}`) {
            // check whether phone is used or not
            alert('Số điện thoại đã được sử dụng')
            this.setState({isLoading: false})
            isUseByAnotherAccount = true
          }
        })
      })
    if (!isUseByAnotherAccount) {
      if (confirmCode) {
        confirmCode
          .confirm(codeInput)
          .then(user => this.handleSignUp())
          .catch(error => {
            this.setState({isLoading: false})
            alert(error)
          })
      } else {
        firebase
          .auth()
          .signInWithPhoneNumber(`+84${phoneNumber}`, false)
          .then(confirmCode => {
            this.setState({
              isLoading: false,
              confirmCode,
              phoneNumber: `+84${Number(phoneNumber)}`,
            })
          })
          .catch(error => {
            this.setState({isLoading: false})
            alert(error)
          })
      }
    }
  }
  render() {
    const {
      phoneNumber,
      name,
      email,
      gender,
      isContinue,
      isLoading,
      typeOfAuth,
      confirmCode,
    } = this.state
    return (
      <ScrollView
        style={{width: '100%', flex: 1}}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <LinearGradient
            colors={['#00ECB9', '#00DBE6']}
            style={styles.inputContainer}>
            <Image
              style={{width: 50, height: 50}}
              source={{
                uri:
                  'https://facebook.github.io/react-native/img/tiny_logo.png',
              }}
            />
            <Text style={styles.headerText}>Thông tin khách hàng</Text>
            <View style={styles.inputElement}>
              <TextInput
                style={{display: 'flex', flex: 1}}
                placeholder="Họ và tên"
                onChangeText={value => this.setState({name: value})}
                defaultValue={name}
                autoCompleteType="name"
              />
            </View>
            <View style={styles.inputElement}>
              <TextInput
                style={{display: 'flex', flex: 1}}
                placeholder="Số điện thoại"
                onChangeText={value => this.setState({phoneNumber: value})}
                defaultValue={phoneNumber}
                autoCompleteType="tel"
                keyboardType="numeric"
                editable={typeOfAuth == 'phone' || confirmCode ? false : true}
              />
              <TouchableOpacity onPress={this.changePhoneNumber}>
                <Text>Đổi số điện thoại</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputElement}>
              <TextInput
                style={{display: 'flex', flex: 1}}
                placeholder="Email"
                onChangeText={value => this.setState({email: value})}
                autoCompleteType="email"
                defaultValue={email}
              />
            </View>
            <View style={styles.inputElement}>
              <TextInput
                style={{display: 'flex', flex: 1}}
                placeholder="Địa chỉ"
                onChangeText={value => this.setState({address: value})}
                autoCompleteType="street-address"
              />
            </View>
            <View style={styles.inputElement}>
              <Picker
                selectedValue={gender}
                style={{flex: 1}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({gender: itemValue})
                }>
                <Picker.Item label="Nam" value="male" />
                <Picker.Item label="Nữ" value="female" />
                <Picker.Item label="Không xác định" value={null} />
              </Picker>
            </View>
            {confirmCode ? (
              <View style={styles.inputElement}>
                <TextInput
                  style={{display: 'flex', flex: 1}}
                  placeholder="Code"
                  keyboardType="numeric"
                  onChangeText={value => this.setState({codeInput: value})}
                />
              </View>
            ) : null}
            <TouchableOpacity
              onPress={
                typeOfAuth == 'phone' ? this.handleSignUp : this.handleFbSignUp
              }
              style={styles.signInBtn}>
              <Text style={styles.signInBtnText}>Cập nhập</Text>
              {isLoading ? (
                <ActivityIndicator size="small" color="#00ff00" />
              ) : null}
            </TouchableOpacity>
            {isContinue && !isLoading ? (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('App')}
                style={styles.signInBtn}>
                <Text style={styles.signInBtnText}>Tiếp tục</Text>
              </TouchableOpacity>
            ) : null}
          </LinearGradient>
        </View>
      </ScrollView>
    )
  }
}
