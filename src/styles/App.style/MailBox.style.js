import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
  },

  //header
  header: {
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
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 0,
  },

  // alert display
  workerDisplayContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    width: '90%',
    minHeight: 50,
    borderRadius: 3,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  workerInfoContainer: {
    flex: 1,
    minHeight: 50,
    paddingHorizontal: 5,
    marginLeft: 5,
    borderLeftColor: 'black',
    borderLeftWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // blank alert
  noNotifcationContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noNotifcationText: {
    fontSize: 20,
    marginTop: 10
  }
})

export default styles
