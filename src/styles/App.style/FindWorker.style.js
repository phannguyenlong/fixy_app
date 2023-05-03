import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
  },
  // top box
  topBox: {
    height: 65,
    width: '100%',
    backgroundColor: '#00ECB9',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  topBoxTextInputContainter: {
    display: 'flex',
    flexDirection: 'row',
    width: '89%',
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  inputElement: {
    flex: 1,
    paddingLeft: 5,
  },

  // worker display
  workerDisplayContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
    width: '90%',
    height: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  workerAvatar: {
    width: 90,
    height: 90,
    borderRadius: 8,
    margin: 5,
  },
  workerInfoContainer: {
    flex: 1,
    height: 100,
    borderLeftColor: 'black',
    borderLeftWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
