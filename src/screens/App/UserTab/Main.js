import React from 'react'
import {TouchableOpacity, Image, Text, View, Button} from 'react-native'
import firebase from 'react-native-firebase'
import styles from '../../../styles/App.style/UserTab.style/Main.style'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: null,
      phoneNumber: null,
      email: null,
      name: null,
      gender: null,
      address: null,
    }
  }
  componentDidMount() {
    const {currentUser} = firebase.auth()
    console.log(currentUser.uid)
    firebase
      .database()
      .ref(`user/${currentUser.uid}`)
      .once('value')
      .then(snapshot => {
        this.setState({
          userData: snapshot.val(),
          phoneNumber: snapshot.val().phoneNumber,
          name: snapshot.val().name,
          email: snapshot.val().email,
          gender: snapshot.val().gender,
          address: snapshot.val().address,
        })
      })
  }
  signOut = () => {
    firebase.auth().signOut()
  }
  render() {
    const {name, userData} = this.state
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.userInfoContainer}>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/originals/9a/f6/4f/9af64fa05b7016e5963aff1a0d9968c4.png',
            }}
            style={styles.userAvatar}
          />
          <Text style={styles.userText}>{name}</Text>
        </View>
        <View style={styles.routingContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile', {userData: userData})}
            style={styles.routingElement}>
            <Text style={styles.routingText}>Cập nhập thông tin cá nhân</Text>
            <Icon name="ios-arrow-forward" color={'black'} size={26} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('History', {userData: userData})}
            style={styles.routingElement}>
            <Text style={styles.routingText}>Lịch sử giao dịch</Text>
            <Icon name="ios-arrow-forward" color={'black'} size={26} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.signOut}
            style={styles.routingElement}>
            <Text style={styles.routingText}>Đăng xuất</Text>
            <Icon name="ios-log-out" color={'red'} size={26} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
