import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },

  logoContainer: {
    display: 'flex',
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: '85%',
    resizeMode: 'contain',
  },

  phoneLogInContainer: {
    flex: 1,
    textAlign: 'left',
    justifyContent: 'center',
    alignContent: 'center',
    width: '85%',
    paddingTop: 20,
  },
  countryPicker: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 56,
    width: 184,
    color: 'white',
  },
  inputElement: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 56,
    marginBottom: 8,
  },
  signInBtn: {
    marginTop: 8,
    padding: 6,
    backgroundColor: '#4BA1DB',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  signInBtnText: {
    margin: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  socialLoginContainer: {
    flex: 1,
    display: 'flex',
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperator: {
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
    color: 'white',
    width: '100%',
    fontWeight: 'bold',
  },
  socialButton: {
    margin: 8,
    width: '80%',
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
  },
})

export default styles
