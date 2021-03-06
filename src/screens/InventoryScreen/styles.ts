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
  text: { fontWeight: 'bold' },
  inventoryWrapper: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    elevation: 8,
    margin: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    backgroundColor: '#1a73e8',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});
