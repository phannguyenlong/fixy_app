import React from 'react'
import {
  ImageBackground,
  Picker,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import firebase from 'react-native-firebase'
import {Dialog} from 'react-native-simple-dialogs'
// style
import styles from '../../styles/App.style/Calendar.style'
// image
import AdressLogo from '../../assets/screen/App.calendar/address_logo.svg'
import SearchLogo from '../../assets/screen/App.calendar/search_logo.svg'
import LinearGradient from 'react-native-linear-gradient'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      speicalitySelect: null,
      numberOfWorker: 1,
      typeOfWorker: null,
      typeOfPayment: 'cash',
      showDialog: false,
      isLoading: false,
      speicalities: [
        {name: 'Sửa ống nước', id: 1},
        {name: 'Sửa bóng đèn', id: 2},
        {name: 'Sửa Laptop', id: 3},
        {name: 'Sửa xe máy', id: 4},
        {name: 'Sửa tủ lạnh', id: 5},
        {name: 'Sơn điện thoại', id: 6},
        {name: 'Sửa TV', id: 7},
        {name: 'Sửa bàn ghế', id: 8},
        {name: 'Sửa máy giặt', id: 9},
        {name: 'Thuê nhân viên', id: 10},
        {name: 'Đóng đồ', id: 11},
        {name: 'Đặt đồ', id: 12},
      ],
    }
  }
  componentDidMount() {
    const {currentUser} = firebase.auth()
    this.ref = firebase.database().ref(`user/${currentUser.uid}`)
    this.ref.once('value').then(snapshot => {
      this.setState({
        address: snapshot.val().address,
      })
    })
  }
  handleFindWorker = async () => {
    this.setState({showDialog: true, isLoading: true})
    let pushData = {
      notification: {name: 'Của hàng điện tử Chợ lớn'},
    }
    await this.ref.update(pushData, async user => {
      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(5000)
      // 2 line above for fake data only :)))
      this.setState({isLoading: false})
      // Alert.alert('Thông báo', 'Tìm thợ thành công')
    })
  }
  renderDialog = () => {
    const {isLoading} = this.state
    return (
      <Dialog
        visible={this.state.showDialog}
        title=""
        animationType="fade"
        onTouchOutside={() => this.setState({showDialog: false})}>
        {isLoading ? (
          <View>
            <ActivityIndicator size="large" />
            <Text style={{marginTop: 10,fontSize: 18, fontWeight:'bold', textAlign: 'center'}}>Đang tìm thợ</Text>
          </View>
        ) : (
          <View style={styles.dialogContainer}>
            <Image
              style={{width: 100, height: 100, borderRadius: 20}}
              source={{
                uri:
                  'https://ak.picdn.net/offset/photos/5a957d2517fb156e48078c32/medium/offset_666696.jpg',
              }}
            />
            <View style={styles.dialogTextContainer}>
              <Text
                style={[
                  styles.dialogText,
                  {fontSize: 18, fontWeight: 'bold', textAlign: 'center'},
                ]}>
                Đã tìm được thợ
              </Text>
              <Text style={[styles.dialogText, {fontWeight: 'bold'}]}>
                Võ Đại Thành
              </Text>
              <Text style={styles.dialogText}>Số điện thoại: 0912445112</Text>
              <Text style={styles.dialogText}>Đánh giá: 4.5/5</Text>
              <Text style={[styles.dialogText,{fontStyle:'italic'}]}>
                Thợ sẽ liên hệ với bạn sau vài phút
              </Text>
            </View>
          </View>
        )}
      </Dialog>
    )
  }
  render() {
    const {
      speicalities,
      speicalitySelect,
      typeOfWorker,
      typeOfPayment,
      address,
    } = this.state
    return (
      <ImageBackground
        source={require('../../assets/images/map_background.png')}
        style={{width: '100%', height: '100%'}}>
        <ScrollView>
          {this.renderDialog()}
          <View style={styles.container}>
            <View style={[styles.addressBoxContainer, styles.boxStyle]}>
              <AdressLogo width={50} height={50} />
              <Text style={styles.addressText}>{address}</Text>
            </View>
            <View style={[styles.boxStyle, styles.specialitiesContainer]}>
              <SearchLogo width={30} height={30} />
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={speicalitySelect}
                  style={styles.picker}
                  mode="dropdown"
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({speicalitySelect: itemValue})
                  }>
                  {speicalities.map(item => (
                    <Picker.Item
                      key={item.id}
                      label={item.name}
                      value={item.name}
                    />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.workerTypeContainer}>
              <View style={[styles.boxStyle, styles.workerNumber]}>
                <Text style={styles.workerNumberText}>Số lượng thợ</Text>
                <TextInput
                  style={styles.inputElement}
                  onChangeText={value => this.setState({numberOfWorker: value})}
                  keyboardType="numeric"
                  placeholder="1"
                />
              </View>
              <View style={[styles.boxStyle, styles.typeOfWorker]}>
                <Picker
                  selectedValue={typeOfWorker}
                  style={styles.typeOfWorkerPicker}
                  mode="dropdown"
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({typeOfWorker: itemValue})
                  }>
                  <Picker.Item label={'Cá nhân'} value={'invidual'} />
                  <Picker.Item label={'Trung Tâm'} value={'group'} />
                </Picker>
              </View>
            </View>
            <View style={[styles.boxStyle, styles.paymentContainer]}>
              <View style={styles.tipBoxContainer}>
                <Text style={styles.tipBoxText}>Tip</Text>
                <TextInput
                  style={[styles.inputElement, {width: '80%'}]}
                  onChangeText={value => this.setState({numberOfWorker: value})}
                  keyboardType="numeric"
                  placeholder="50.000"
                />
              </View>
              <View style={styles.paymentBoxCotainer}>
                <TouchableOpacity
                  onPress={() => this.setState({typeOfPayment: 'cash'})}
                  style={[
                    styles.paymentButton,
                    {
                      backgroundColor:
                        typeOfPayment == 'cash' ? 'black' : 'white',
                    },
                  ]}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: typeOfPayment == 'cash' ? 'white' : 'black',
                    }}>
                    Tiền mặt
                  </Text>
                </TouchableOpacity>
                <Text style={{fontWeight: 'bold', color: 'white'}}>hoặc</Text>
                <TouchableOpacity
                  onPress={() => this.setState({typeOfPayment: 'credit'})}
                  style={[
                    styles.paymentButton,
                    {
                      backgroundColor:
                        typeOfPayment == 'credit' ? 'black' : 'white',
                    },
                  ]}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: typeOfPayment == 'credit' ? 'white' : 'black',
                    }}>
                    Thẻ tín dụng
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.boxStyle, styles.description]}>
              <Text style={styles.workerNumberText}>Mô tả</Text>
              <TextInput
                multiline
                style={[styles.inputElement, styles.descriptionInput]}
                onChangeText={value => this.setState({numberOfWorker: value})}
                placeholder="Mô tả chi tiết"
              />
            </View>
            <TouchableOpacity onPress={this.handleFindWorker}>
              <LinearGradient
                colors={['#4BA1DB', '#00ECB9']}
                style={styles.findWorkerButton}>
                <Text
                  style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                  Tìm thợ
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}
