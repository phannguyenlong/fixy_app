import Auth from './src/screens/Authentication/Index';
import Main from './src/screens/App/Index';
import Loading from './Loading'
import SignUp from './src/screens/Authentication/SignUp'

/* React navigation */
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: Loading,
    App: Main,
    Auth: Auth,
    SignUp: SignUp
  },
  {initialRouteName: 'AuthLoading'}
  )
);
