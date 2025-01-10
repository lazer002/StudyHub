import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';

// Sample user data
const initialUserData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  phone: '123-456-7890',
  address: '123 Main Street, Cityville',
  dob: '1990-01-01',
  gender: 'Male',
  nationality: 'CountryX',
  language: 'English',
  occupation: 'Software Engineer',
  maritalStatus: 'Single',
  hobbies: 'Reading, Traveling',
  socialMedia: '@john_doe',
};

const Settings = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState(initialUserData);

  const handleSave = () => {
    // You can add validation or save logic here
    Alert.alert('Changes Saved!', 'Your user details have been updated.', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  const handleInputChange = (field, value) => {
    setUserDetails({ ...userDetails, [field]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={userDetails.name}
          onChangeText={(value) => handleInputChange('name', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={userDetails.email}
          onChangeText={(value) => handleInputChange('email', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value={userDetails.phone}
          onChangeText={(value) => handleInputChange('phone', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={userDetails.address}
          onChangeText={(value) => handleInputChange('address', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          value={userDetails.dob}
          onChangeText={(value) => handleInputChange('dob', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Gender</Text>
        <TextInput
          style={styles.input}
          value={userDetails.gender}
          onChangeText={(value) => handleInputChange('gender', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nationality</Text>
        <TextInput
          style={styles.input}
          value={userDetails.nationality}
          onChangeText={(value) => handleInputChange('nationality', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Language</Text>
        <TextInput
          style={styles.input}
          value={userDetails.language}
          onChangeText={(value) => handleInputChange('language', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Occupation</Text>
        <TextInput
          style={styles.input}
          value={userDetails.occupation}
          onChangeText={(value) => handleInputChange('occupation', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Marital Status</Text>
        <TextInput
          style={styles.input}
          value={userDetails.maritalStatus}
          onChangeText={(value) => handleInputChange('maritalStatus', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Hobbies</Text>
        <TextInput
          style={styles.input}
          value={userDetails.hobbies}
          onChangeText={(value) => handleInputChange('hobbies', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Social Media</Text>
        <TextInput
          style={styles.input}
          value={userDetails.socialMedia}
          onChangeText={(value) => handleInputChange('socialMedia', value)}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 5,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Settings;
