
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Inscription() {
  // const navigation = useNavigation();
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInscription = () => {
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_pocketparis.png')} style={styles.image}/>

      <TextInput
        style={styles.input}
        placeholder="Nom"
        onChangeText={(text) => setNom(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        onChangeText={(text) => setPrenom(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.signupButton} onPress={handleInscription}>
        <Text style={styles.signupButtonText}>Inscription</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Accueil')}
      >
        <Text style={styles.backButtonText}>Retour à la page d'accueil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 15,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  image: {
    width: 175,
    height: 175,
    marginBottom: 100
  },
  signupButton: {
    backgroundColor: '#fe593e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: '#fe593e',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
