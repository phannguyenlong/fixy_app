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
  Alert,
} from 'react-native'
import firebase from 'react-native-firebase'
import LinearGradient from 'react-native-linear-gradient'
import styles from '../../../styles/App.style/UserTab.style/Profile.style'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phoneNumber: null,
      email: null,
      name: null,
      gender: null,
      address: null,
      isLoading: false,
    }
  }
  componentDidMount = async () => {
    const {currentUser} = firebase.auth()
    this.ref = firebase.database().ref(`user/${currentUser.uid}`)
    // alert(JSON.stringify(currentUser))
    const userData = await this.props.navigation.getParam('userData', 'nothing')
    this.setState({
      phoneNumber: userData.phoneNumber,
      name: userData.name,
      email: userData.email,
      gender: userData.gender,
      address: userData.address,
    })
  }
  signOut = () => {
    firebase.auth().signOut()
  }
  handleUpdate = async () => {
    this.setState({isLoading: true})
    // Alert.alert('hel')
    await this.ref.update(this.state, user => {
      Alert.alert('Thông báo', 'Cập nhập thành công')
      this.setState({isLoading: false})
    })
  }
  render() {
    const {phoneNumber, email, name, gender, isLoading, address} = this.state
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#00ECB9', '#00DBE6']}
          style={styles.inputContainer}>
          <Text style={styles.headerText}>
            Chào, {name !== null ? name.split(' ')[2] : ''}
          </Text>
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
              editable={false}
            />
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
              defaultValue={address}
            />
          </View>
          <View style={styles.inputElement}>
            <Picker
              selectedValue={gender}
              style={{flex: 1}}
              defaultValue={gender}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({gender: itemValue})
              }>
              <Picker.Item label="Nam" value="male" />
              <Picker.Item label="Nữ" value="female" />
              <Picker.Item label="Không xác định" value={null} />
            </Picker>
          </View>
          <TouchableOpacity
            onPress={this.handleUpdate}
            style={styles.signInBtn}>
            <Text style={styles.signInBtnText}>Cập nhập</Text>
            {isLoading ? (
              <ActivityIndicator size="small" color="#00ff00" />
            ) : null}
          </TouchableOpacity>
        </LinearGradient>
      </View>
    )
  }
}
