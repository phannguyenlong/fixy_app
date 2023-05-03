import Main from './Main'
import User from './UserTab/Index'
import Calendar from './Calendar'
import Notification from './Mailbox'
import FindWorker from './FindWorker'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        tabBarLabel: 'Trang Chủ',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="ios-home" color={tintColor} size={26} />
        },
      },
    },
    Calendar: {
      screen: Calendar,
      navigationOptions: {
        tabBarLabel: 'Đặt lịch',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="ios-calendar" color={tintColor} size={26} />
        },
      },
    },
    FindWorker: {
      screen: FindWorker,
      navigationOptions: {
        tabBarLabel: 'Gọi Nhanh',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="md-rocket" color={tintColor} size={26} />
        },
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarLabel: 'Thông báo',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="ios-notifications" color={tintColor} size={26} />
        },
      },
    },
    User: {
      screen: User,
      navigationOptions: {
        tabBarLabel: 'Tài khoản',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="ios-settings" color={tintColor} size={26} />
        },
      },
    },
  },
  {
    barStyle: {backgroundColor: 'white'},
    initialRouteName: 'Home',
    activeColor: '#4BA1DB',
  },
)

export default TabNavigator
