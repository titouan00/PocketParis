import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MapView from 'react-native-maps';

function Map() {
  return (
    <View>
      <MapView style={styles.map} />
    </View>
  );
  }
  const styles = StyleSheet.create({
    map: { 
      width: '100%', 
      height: '100%'
    },
  });
export default Map