import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const CreditCard = () => {
  return (
    <View style={styles.creditCard}>
      <View style={styles.creditCardBody}>
        <View style={styles.creditCardBodyInfos}>
          <Image
            style={styles.creditCardBodyInfosImage}
            source={require('../../../assets/images/person_02.png')}
          />
          <Text style={styles.creditCardBodyInfosTitle}>
            Nina te ha enviado
          </Text>
          <Text style={styles.creditCardBodyInfosSubtitle}>20,00</Text>
        </View>
        <View style={styles.creditCardBodyButton}>
          <Text style={styles.creditCardBodyButtonText}>HOY</Text>
        </View>
      </View>
      <View style={styles.creditCardFooter}>
        <View style={styles.creditCardFooterButton}>
          <Text style={styles.creditCardFooterButtonText}>VER DETALLES</Text>
        </View>
        <View style={styles.creditCardFooterMessage}>
          <Text style={styles.creditCardFooterMessageTitle}>Mensaje</Text>
          <Text style={styles.creditCardFooterMessageSubtitle}>
            Por la cena
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  creditCard: {
    backgroundColor: '#0262E9',
    borderRadius: 15.0,
    paddingLeft: 30.0,
    paddingRight: 15.0,
    paddingTop: 16.0,
    paddingBottom: 23.0,
  },
  creditCardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  creditCardBodyInfosImage: {
    width: 56.0,
    height: 56.0,
    borderRadius: 100.0,
  },
  creditCardBodyInfosTitle: {
    fontWeight: '500',
    fontSize: 14.0,
    lineHeight: 17.0,
    fontFamily: 'Montserrat-500',
    color: '#FFFFFF',
    marginTop: 6.0,
  },
  creditCardBodyInfosSubtitle: {
    fontWeight: '600',
    fontSize: 28.0,
    lineHeight: 34.0,
    fontFamily: 'Montserrat-600',
    color: '#FFFFFF',
  },
  creditCardBodyButton: {
    backgroundColor: '#FFF0B4',
    borderWidth: 1.0,
    borderColor: '#FFD202',
    borderStyle: 'solid',
    borderRadius: 15.0,
    paddingVertical: 5.0,
    paddingHorizontal: 15.0,
  },
  creditCardBodyButtonText: {
    fontWeight: '600',
    fontSize: 13.0,
    lineHeight: 15.0,
    fontFamily: 'Montserrat-600',
    color: '#3A2424',
  },
  creditCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 12.0,
    paddingRight: 17.0,
  },
  creditCardFooterButton: {
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
    borderRadius: 19.0,
    paddingVertical: 8.0,
    paddingHorizontal: 19.0,
  },
  creditCardFooterButtonText: {
    fontWeight: '600',
    fontSize: 12.0,
    lineHeight: 15.0,
    fontFamily: 'Montserrat-600',
    color: '#FFFFFF',
  },
  creditCardFooterMessageTitle: {
    fontWeight: '500',
    fontSize: 13.0,
    lineHeight: 15.0,
    fontFamily: 'Montserrat-500',
    color: '#FFFFFF',
    opacity: 0.6,
  },
  creditCardFooterMessageSubtitle: {
    fontWeight: '500',
    fontSize: 17.0,
    lineHeight: 20.0,
    fontFamily: 'Montserrat-500',
    color: '#FFFFFF',
  },
});

export default CreditCard;
