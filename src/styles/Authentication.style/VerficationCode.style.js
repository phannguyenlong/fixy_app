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
  
  displayContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  firstText: {
    color: '#A3A3A3',
    fontSize: 15
  },
  secondText: {
      paddingTop: 10,
      color: '#4BA1DB',
      fontSize: 36,
      fontWeight: 'bold'
  },

  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '80%'
  },
  inputElement: {
    marginTop: '15%',
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
    marginTop: 14,
    width: '80%',
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
  }
})

export default styles
