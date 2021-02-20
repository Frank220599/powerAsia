import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputWrapper: {
    marginVertical: 15,
  },
  label: {
    marginBottom: 10,
  },
  input: {
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: '#a7a7a7',
    borderRadius: 5,
    padding: 15,
  },
  wrapper: {
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    flex: 1,
    overflow: 'hidden',
  },
  flatList: {
    padding: 30,
  },
  search: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#41689d',
  },
  backdrop: {
    backgroundColor: 'rgba(0,0,0,.5)',
    height: '100%',
  },
  inputIcon: {
    position: 'absolute',
    right: 10,
  },
  searchButton: {
    marginRight: 10,
  },
  top: {
    backgroundColor: '#41689d',
    padding: 15,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
    paddingLeft: 10,
  },
  option: {
    padding: 10,
  },
});
