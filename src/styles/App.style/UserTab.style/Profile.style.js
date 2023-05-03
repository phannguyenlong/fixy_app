import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  
  headerText: {
    fontSize: 25,
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
  }, 
  inputContainer: {
    paddingTop: '10%',
    height: '80%',
    display: 'flex',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  inputElement: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    width: '85%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 45,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  countryPicker: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 56,
    width: 184,
    fontSize: 8,
  },
  signInBtn: {
    height: 72,
    width: '92%',
    marginTop: 8,
    padding: 8,
    backgroundColor: '#80B4D8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    borderRadius: 4,
  },
  signInBtnText: {
    margin: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  socialContainer: {
    display: 'flex',
    height: 72,
    width: '92%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default styles
