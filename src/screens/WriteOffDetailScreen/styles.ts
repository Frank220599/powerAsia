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
  },
  row: {
    flexDirection: 'row',
    padding: 5,
  },
  halfWidth: {
    width: '50%',
  },
  writeOffProduct: {
    padding: 10,
    margin: 15,
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  heading: {
    backgroundColor: '#41689d',
    padding: 15,
    color: '#fff',
    fontSize: 20,
    elevation: 10,
  },
});
