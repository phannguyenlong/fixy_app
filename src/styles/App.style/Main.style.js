import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
  },

  topBox: {
    height: 130,
    width: '100%',
    backgroundColor: '#00ECB9',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  // user display
  userDisplayContainer: {
    height: 150,
    width: '95%',
    marginTop: -70,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  topUserDisplay: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  userAvatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginTop: -25,
  },
  nameDisplay: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  userDisplayButton: {
    width: 100,
    height: 40,
    backgroundColor: '#00ECB9',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomUserDisplay: {
    marginTop: 10,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#C4C4C4',
  },
  bottomText: {
    flex: 1,
    fontWeight: 'bold',
    color: '#4BA1DB',
  },

  //routing container
  routingContainer: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  routingButton: {
    backgroundColor: 'white',
    width: 130,
    height: 130,
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },

  // worker display
  workerDisplayContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  workerDisplayElement: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  workerDisplayText: {
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#4BA1DB',
    width: 100,
    height: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "#4BA1DB"
  }
})

export default styles
