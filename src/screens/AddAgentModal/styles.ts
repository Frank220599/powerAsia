import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
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
  },
  saveAgent: {
    width: '100%',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 20,
  },
  saveAgentText: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
});
