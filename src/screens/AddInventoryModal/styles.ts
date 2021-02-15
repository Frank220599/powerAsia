import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 15,
  },
  rounded: {
    backgroundColor: 'rgba(245,245,245,0.91)',
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  addMore: { alignItems: 'center', marginVertical: 20 },
  addMoreText: { fontSize: 18 },
  saveInventory: {
    width: '100%',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 20,
  },
  saveInventoryText: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
});
