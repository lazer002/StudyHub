import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import your other screens
import Loan from '../liability/Loan';
import CarLoan from '../liability/CarLoan';
import PersonalLoan from '../liability/PersonalLoan';
import EducationLoan from '../liability/EducationLoan';
import CreditCardDebt from '../liability/CreditCardDebt';
import AgriLoan from '../liability/AgriLoan';
import BusinessLoan from '../liability/BusinessLoan';
import Settings from './Settings';

// Stack Navigator
const Stack = createStackNavigator();

const LiabilitiesItems = [
  { title: 'Loan', icon: 'credit-card', screen: 'Loan' },
  { title: 'Car Loan', icon: 'directions-car', screen: 'CarLoan' },
  { title: 'Personal Loan', icon: 'person', screen: 'PersonalLoan' },
  { title: 'Education Loan', icon: 'school', screen: 'EducationLoan' },
  { title: 'Credit Card Debt', icon: 'credit-card', screen: 'CreditCardDebt' },
  { title: 'Agri Loan', icon: 'agriculture', screen: 'AgriLoan' },
  { title: 'Business Loan', icon: 'business', screen: 'BusinessLoan' },
];

const LiabilitiesMain = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Liabilities</Text>
      <View style={styles.iconContainer}>
        {LiabilitiesItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.iconBox}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Icon name={item.icon} size={40} color="#4CAF50" />
            <Text style={styles.iconLabel}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const Liabilities = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LiabilitiesMain"
        component={LiabilitiesMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Loan" component={Loan} />
      <Stack.Screen name="CarLoan" component={CarLoan} />
      <Stack.Screen name="PersonalLoan" component={PersonalLoan} />
      <Stack.Screen name="EducationLoan" component={EducationLoan} />
      <Stack.Screen name="CreditCardDebt" component={CreditCardDebt} />
      <Stack.Screen name="AgriLoan" component={AgriLoan} />
      <Stack.Screen name="BusinessLoan" component={BusinessLoan} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconBox: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconLabel: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Liabilities;
