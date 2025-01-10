import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Settings from './Settings';

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
  profilePic: 'https://www.example.com/profile.jpg',
};

const Profile = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState(initialUserData);

  const handleLogout = () => {
    // Implement logout logic here
    alert('Logging out...');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: userDetails.profilePic }} style={styles.profileImage} />
        <Text style={styles.username}>{userDetails.name}</Text>
        <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
          <Icon name="settings" size={30} color="#4CAF50" />
        </TouchableOpacity>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>User Details</Text>
        <Text style={styles.detailText}>Email: {userDetails.email}</Text>
        <Text style={styles.detailText}>Phone: {userDetails.phone}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  settingsButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Profile;
