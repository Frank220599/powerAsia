import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  floatingActionButton: {
    width: 60,
    height: 60,
    backgroundColor: '#1a73e8',
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  topInfo: {
    padding: 15,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    padding: 5,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  halfWidth: {
    width: '50%',
  },
  comingProduct: {
    padding: 10,
    margin: 5,
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  heading: {
    backgroundColor: '#41689d',
    padding: 15,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: {
    color: '#fff',
    fontSize: 20,
    marginRight: 'auto',
  },
  searchButton: {
    marginRight: 10,
  },
  search: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
    paddingLeft: 10,
  },
  inputIcon: {
    position: 'absolute',
    right: 10,
  },
  numberInp: {
    borderColor: '#41689d',
    borderWidth: 1,
    flex: 1,
    borderRadius: 10,
  },
});
