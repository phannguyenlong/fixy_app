import React from 'react'
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import firebase from 'react-native-firebase'
// style
import styles from '../../styles/App.style/Main.style'
//image
import AddressLogo from '../../assets/screen/App.main/address.svg'
import GoiNhanhLogo from '../../assets/screen/App.main/goinhanhLogo.svg'
import DatLichLogo from '../../assets/screen/App.main/datlichLogo.svg'
import SuaOngNuocIcon from '../../assets/screen/App.main/suaOngNuoc_icon.svg'
import SuaBongDenIcon from '../../assets/screen/App.main/suaBongDen_icon.svg'
import SuaLapTopIcon from '../../assets/screen/App.main/suaLapTop_icon.svg'
import SuaXeMayIcon from '../../assets/screen/App.main/suaXeMay_icon.svg'
import SuaTuLanhIcon from '../../assets/screen/App.main/suaTuLanh_icon.svg'
import SuaDienThoaiIcon from '../../assets/screen/App.main/suaDienThoai_icon.svg'
import SuaTvIcon from '../../assets/screen/App.main/suaTv_icon.svg'
import SuaBanGheIcon from '../../assets/screen/App.main/suaBanGhe_icon.svg'
import SuaMayGiatIcon from '../../assets/screen/App.main/suaMayGiat_icon.svg'
import ThueNguoiGiupViecIcon from '../../assets/screen/App.main/thueNguoiGiupViec_icon.svg'


export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      address: null,
      screenWidth: 300,
      activeSlide: 0,
      speicalities: [
        [
          {name: 'Sửa ống nước', img: SuaOngNuocIcon},
          {name: 'Sửa bóng đèn', img: SuaBongDenIcon},
          {name: 'Sửa Laptop', img: SuaLapTopIcon},
          {name: 'Sửa xe máy', img: SuaXeMayIcon},
          {name: 'Sửa tủ lạnh', img: SuaTuLanhIcon},
          {name: 'Sửa điện thoại', img: SuaDienThoaiIcon},
        ],
        [
          {name: 'Sửa TV', img: SuaTvIcon},
          {name: 'Sửa bàn ghế', img: SuaBanGheIcon},
          {name: 'Sửa máy giặt', img: SuaMayGiatIcon},
          {name: 'Thuê nhân viên', img: ThueNguoiGiupViecIcon},
          {name: 'Đóng đồ', img: AddressLogo},
          {name: 'Đặt đồ', img: GoiNhanhLogo},
        ],
      ],
    }
  }
  componentDidMount() {
    const {currentUser} = firebase.auth()
    firebase
      .database()
      .ref(`user/${currentUser.uid}`)
      .once('value')
      .then(snapshot => {
        this.setState({
          name: snapshot.val().name.split(' ').slice(-2).join(' '),
          address: snapshot.val().address,
        })
      })
    this.setState({
      screenWidth: Math.round(Dimensions.get('window').width),
    })
  }
  renderWorkerCorousel = ({item, index}) => {
    const {navigation} = this.props
    return (
      <View style={styles.workerDisplayContainer}>
        {item.map(child => {
          let Logo = child.img
          return (
            <TouchableOpacity
              key={child.name}
              onPress={() => navigation.navigate('Calendar', {speicality: item.name})}
              style={styles.workerDisplayElement}>
              <Logo width={60} height={60} />
              <Text style={styles.workerDisplayText}>{child.name}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
  render() {
    const {speicalities, screenWidth, activeSlide, name, address} = this.state
    const {navigation} = this.props
    return (
      <ScrollView style={{marginBottom: 3}}>
        <View style={styles.container}>
          <View style={styles.topBox}></View>
          <View style={styles.userDisplayContainer}>
            <View style={styles.topUserDisplay}>
              <Image
                source={{
                  uri:
                    'https://i.pinimg.com/originals/9a/f6/4f/9af64fa05b7016e5963aff1a0d9968c4.png',
                }}
                style={styles.userAvatar}
              />
              <View>
                <Text>Xin chào,</Text>
                <Text style={styles.nameDisplay}>{name}</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('User')}
                style={styles.userDisplayButton}>
                <Text style={{fontSize: 12, color: 'white'}}>
                  Trang cá nhân
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomUserDisplay}>
              <AddressLogo width={45} height={45} />
              <Text style={styles.bottomText}>
                {address}
              </Text>
            </View>
          </View>
          <View style={styles.routingContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('FindWorker')} style={styles.routingButton}>
              <GoiNhanhLogo width={70} height={70} />
              <Text style={{fontWeight: 'bold'}}>Gọi nhanh</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Calendar')} style={styles.routingButton}>
              <DatLichLogo width={70} height={70} />
              <Text style={{fontWeight: 'bold'}}>Đặt lịch</Text>
            </TouchableOpacity>
          </View>
          <Carousel
            ref={c => {
              this._carousel = c
            }}
            loop={false}
            data={speicalities}
            renderItem={this.renderWorkerCorousel}
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          />
          <Pagination 
            dotsLength={speicalities.length}
            activeDotIndex={activeSlide}
            dotStyle={styles.dotStyle}
          />
        </View>
      </ScrollView>
    )
  }
}
