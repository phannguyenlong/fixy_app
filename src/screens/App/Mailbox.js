import React from 'react'
import {TouchableOpacity, Text, View, Alert} from 'react-native'
import firebase from 'react-native-firebase'
// style
import styles from '../../styles/App.style/MailBox.style'
// image
import TrashIcon from '../../assets/screen/App.mailBox/trashcan_icon.svg'
import AlertIcon from '../../assets/screen/App.mailBox/alert_icon.svg'
import EmptyBoxIcon from '../../assets/screen/App.mailBox/emptybox_icon.svg'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workerName: null,
    }
  }
  componentDidMount() {
    const {currentUser} = firebase.auth()
    this.ref = firebase.database().ref(`user/${currentUser.uid}/notification`)
    this.ref.on('value', snapshot => {
      if (snapshot.val() !== null) {
        console.log('runnnn')
        this.setState({workerName: snapshot.val().name})
      } else {
        this.setState({workerName: null})
      }
    })
  }
  handleDelete = () => {
    Alert.alert(
      'Thông báo',
      'Bạn có chắc chắn muốn xóa hết thông báo',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Xóa hết', onPress: () => this.ref.remove()},
      ],
      {cancelable: true},
    )
  }
  renderNotification = () => {
    const {workerName} = this.state
    return (
      <View style={styles.workerDisplayContainer}>
        <AlertIcon width={30} height={30} />
        <View style={styles.workerInfoContainer}>
          <Text>
            Yêu cầu thợ của đã được xác nhận bởi {workerName} Thợ sẽ liên lạc
            với bạn sau vài phút
          </Text>
        </View>
      </View>
    )
  }
  renderNoneNotification = () => {
    return (
      <View style={styles.noNotifcationContainer}>
        <EmptyBoxIcon width={110} height={110} />
        <Text style={styles.noNotifcationText}>Hiện tại không có thông báo nào</Text>
      </View>
    )
  }
  render() {
    const {workerName} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Thông báo</Text>
          <TouchableOpacity
            onPress={this.handleDelete}
            style={styles.deleteButton}>
            <TrashIcon width={40} height={40} />
          </TouchableOpacity>
        </View>
        {workerName !== null
          ? this.renderNotification()
          : this.renderNoneNotification()}
      </View>
    )
  }
}
