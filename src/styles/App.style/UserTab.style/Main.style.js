import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  userInfoContainer: {
    marginTop: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    padding: 20,
    backgroundColor: 'white'
  },
  userAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 5,
  },
  userText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
  },

  routingContainer:{
    width: '100%',
    borderTopWidth: 8,
    paddingTop: 5,
    borderTopColor: '#E7E7E7',
    padding: 10
  },
  routingElement: {
    width: '100%',
    height: 60,
    paddingRight: 5,
    borderBottomColor: '#E7E7E7',
    borderBottomWidth: 0.5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  routingText: {
    fontSize: 17,
  }
})

export default styles