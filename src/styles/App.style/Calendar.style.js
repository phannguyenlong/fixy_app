import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
  },
  boxStyle: {
    backgroundColor: '#4BA1DB',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  inputElement: {
    backgroundColor: 'white',
    height: 40,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    borderRadius: 5,
  },

  // address container
  addressBoxContainer: {
    marginTop: 30,
    width: '95%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  addressText: {
    height: 60,
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5,
    borderLeftWidth: 1.5,
    borderLeftColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // specialitiesContainer
  specialitiesContainer: {
    marginTop: 20,
    height: 40,
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pickerContainer: {
    flex: 1,
    marginLeft: 10,
    borderLeftWidth: 1.5,
    borderLeftColor: 'white',
    height: 35,
  },
  picker: {
    color: 'white',
    height: 35,
  },

  //type of worker container
  workerTypeContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  workerNumber: {
    width: 152,
  },
  workerNumberText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  typeOfWorker: {
    width: 130,
    height: 50,
  },
  typeOfWorkerPicker: {
    width: 130,
    height: 25,
    color: 'white',
  },

  // payment container
  paymentContainer: {
    width: '95%',
    marginTop: 30,
    height: 160,
    padding: 20,
  },
  tipBoxContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tipBoxText: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '20%',
    textAlign: 'center',
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  paymentBoxCotainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentButton: {
    width: 120,
    height: 65,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Description
  description: {
    marginTop: 30,
    width: '95%',
    height: 150
  },
  descriptionInput: {
    height: 100,
    textAlign: "left"
  },
 
  findWorkerButton: {
    width: 300,
    height: 60,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Dialog
  loadingContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },  
  dialogContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  dialogTextContainer: {
    flex: 1,
    marginLeft: 10
  },
  dialogText: {
    textAlign: 'left',
    fontSize: 15
  }
})

export default styles
