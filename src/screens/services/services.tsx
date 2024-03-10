import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {FitnessClass, fitnessClasses} from '../../data';

interface ServicesScreenProps {
  navigation: any;
}

const ServicesScreen: React.FC<ServicesScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewWrapper}>
          {fitnessClasses.map((fitnessClass: FitnessClass) => (
            <TouchableOpacity
              key={fitnessClass.id}
              style={styles.fitnessClassContainer}
              onPress={() => navigation.navigate('Booking', {fitnessClass})}>
              <Text style={styles.fitnessClassName}>{fitnessClass.name}</Text>
              <Text style={styles.fitnessClassPrice}>{fitnessClass.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapper: {
    padding: 20,
  },
  fitnessClassContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  fitnessClassName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fitnessClassPrice: {
    fontSize: 16,
    color: '#888',
  },
});

export default ServicesScreen;
