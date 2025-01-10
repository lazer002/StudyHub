import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Loan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Loan Details</Text>
      <Text>Here you can manage and view your loan details.</Text>
    </View>
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
    textAlign: 'center',
  },
});

export default Loan;
