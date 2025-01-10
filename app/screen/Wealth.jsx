import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';


// Import all screens
import InsurancePolicies from '../wealth/InsurancePolicies';
import FixedDeposit from '../wealth/FixedDeposit';
import RecurringDeposit from '../wealth/RecurringDeposit';
import Property from '../wealth/Property';
import Stocks from '../wealth/Stocks';
import Bonds from '../wealth/Bonds';
import MutualFunds from '../wealth/MutualFunds';
import PreciousMetals from '../wealth/PreciousMetals';
import Cryptocurrencies from '../wealth/Cryptocurrencies';
import OtherInvestments from '../wealth/OtherInvestments';
import NPS from '../wealth/NPS';
import PPF from '../wealth/PPF';
import EPS from '../wealth/EPS';
import BankAccounts from '../wealth/BankAccounts';
import Commodities from '../wealth/Commodities';

// Stack Navigator
const Stack = createStackNavigator();

const WealthItems = [
  { title: 'Insurance Policies', icon: 'assignment', screen: 'InsurancePolicies' },
  { title: 'Fixed Deposit', icon: 'account-balance', screen: 'FixedDeposit' },
  { title: 'Recurring Deposit', icon: 'savings', screen: 'RecurringDeposit' },
  { title: 'Property', icon: 'home', screen: 'Property' },
  { title: 'Stocks', icon: 'trending-up', screen: 'Stocks' },
  { title: 'Bonds', icon: 'attach-money', screen: 'Bonds' },
  { title: 'Mutual Funds', icon: 'pie-chart', screen: 'MutualFunds' },
  { title: 'Precious Metals', icon: 'emoji-events', screen: 'PreciousMetals' },
  { title: 'Cryptocurrencies', icon: 'currency-bitcoin', screen: 'Cryptocurrencies' },
  { title: 'Other Investments', icon: 'business', screen: 'OtherInvestments' },
  { title: 'NPS', icon: 'auto-stories', screen: 'NPS' },
  { title: 'PPF', icon: 'account-balance-wallet', screen: 'PPF' },
  { title: 'EPS', icon: 'account-circle', screen: 'EPS' },
  { title: 'Bank Accounts', icon: 'account-box', screen: 'BankAccounts' },
  { title: 'Commodities', icon: 'assessment', screen: 'Commodities' },
];

const WealthMain = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wealth and More</Text>
      <View style={styles.iconContainer}>
        {WealthItems.map((item, index) => (
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

const Wealth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WealthMain"
        component={WealthMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="InsurancePolicies" component={InsurancePolicies} />
      <Stack.Screen name="FixedDeposit" component={FixedDeposit} />
      <Stack.Screen name="RecurringDeposit" component={RecurringDeposit} />
      <Stack.Screen name="Property" component={Property} />
      <Stack.Screen name="Stocks" component={Stocks} />
      <Stack.Screen name="Bonds" component={Bonds} />
      <Stack.Screen name="MutualFunds" component={MutualFunds} />
      <Stack.Screen name="PreciousMetals" component={PreciousMetals} />
      <Stack.Screen name="Cryptocurrencies" component={Cryptocurrencies} />
      <Stack.Screen name="OtherInvestments" component={OtherInvestments} />
      <Stack.Screen name="NPS" component={NPS} />
      <Stack.Screen name="PPF" component={PPF} />
      <Stack.Screen name="EPS" component={EPS} />
      <Stack.Screen name="BankAccounts" component={BankAccounts} />
      <Stack.Screen name="Commodities" component={Commodities} />
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

export default Wealth;
