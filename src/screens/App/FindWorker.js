import React from 'react'
import {FlatList, Image, Text, View, TextInput} from 'react-native'
import firebase from 'react-native-firebase'
// styles
import styles from '../../styles/App.style/FindWorker.style'
// icon
import SearchIcon from '../../assets/screen/App.findWorker/searchIcon.svg'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workerData: [],
      searchInput: null,
    }
  }
  componentDidMount = async () => {
    await firebase
      .database()
      .ref(`Worker`)
      .once('value')
      .then(snapshot => {
        let data = snapshot.val()
        let items = Object.values(data)
        this.setState({workerData: items})
      })
  }
  renderWorkerDisplay = ({item, index}) => {
    return (
      <View style={styles.workerDisplayContainer}>
        <Image
          source={{
            uri:
              'https://i.pinimg.com/originals/9a/f6/4f/9af64fa05b7016e5963aff1a0d9968c4.png',
          }}
          style={styles.workerAvatar}
        />
        <View style={styles.workerInfoContainer}>
          <Text>{item.BranchName}</Text>
        </View>
      </View>
    )
  }
  render() {
    const {workerData} = this.state
    // console.log(workerData)
    // if (workerData!==null) {workerData.map(item => console.log(item))}
    return (
      <View style={styles.container}>
        <View style={styles.topBox}>
          <View style={styles.topBoxTextInputContainter}>
            <SearchIcon width={35} height={35} />
            <TextInput
              style={styles.inputElement}
              placeholder="Tìm thợ"
              onChangeText={value => this.setState({searchInput: value})}
            />
          </View>
        </View>
        <FlatList
          style={{width: '100%'}}
          data={workerData}
          renderItem={this.renderWorkerDisplay}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}
