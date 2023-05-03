import React from 'react'
import {StyleSheet, Platform, Image, Text, View, Button} from 'react-native'
import firebase from 'react-native-firebase'
import EmptyIcon from '../../../assets/screen/App.history/empty_icon.svg'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: null,
    }
  }
  componentDidMount() {
    const {currentUser} = firebase.auth()
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <EmptyIcon width={110} height={110} />
        <Text style={styles.noHistoryText}>Bạn chưa có giao dịch nào</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noHistoryText: {
    fontSize: 20,
    marginTop: 10
  }
})
