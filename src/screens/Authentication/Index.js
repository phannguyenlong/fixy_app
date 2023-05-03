import SignIn from './SignIn'
import VerficationCode from './VerficationCode'

import {createStackNavigator} from 'react-navigation-stack'

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
    },
    VerficationCode: {
      screen: VerficationCode,
    },
  },
  {
    initialRouteKey: 'SignIn',
    headerMode: 'none'
  },
)

export default AuthStack
