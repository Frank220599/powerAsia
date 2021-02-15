import React from 'react';

import { Modal, StyleSheet, Text, TouchableOpacity } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

interface IProps {
  onSuccess: (data: any) => void;
  toggleModal: () => void;
  visible: boolean;
}

export const ScanScreen = ({ onSuccess, visible, toggleModal }: IProps) => {
  return (
    <Modal visible={visible} onRequestClose={toggleModal}>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Навидите на штрих код или QR код
          </Text>
        }
        bottomContent={
          <TouchableOpacity
            onPress={toggleModal}
            style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>Закрыть</Text>
          </TouchableOpacity>
        }
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
