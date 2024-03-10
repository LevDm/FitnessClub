import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {FitnessClass} from '../../data';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../utils/mobx/store-provider';

interface ServicesScreenProps {
  navigation: any;
}

const ServicesScreen: React.FC<ServicesScreenProps> = observer(
  ({navigation}) => {
    const {getServices} = useStore();

    const services = getServices();

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.viewWrapper}>
            {services.map((value: FitnessClass) => (
              <TouchableOpacity
                key={value.id}
                style={styles.fitnessClassContainer}
                onPress={() =>
                  navigation.navigate('Booking', {fitnessClass: value})
                }>
                <Text style={styles.fitnessClassName}>{value.name}</Text>
                <Text style={styles.fitnessClassPrice}>{value.price}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  },
);

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
