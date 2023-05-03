import Main from './Main'
import Profile from './Profile'
import History from './History'

import {createStackNavigator} from 'react-navigation-stack'

const userStack = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        header: null,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerTitle: 'Chỉnh sửa thông tin cá nhân',
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        headerTitle: 'Lịch sử giao dịch',
      },
    },
  },
  {
    initialRouteKey: 'Main',
  },
)
export default userStack
