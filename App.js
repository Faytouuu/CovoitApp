import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TripListScreen from './screens/TripListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>faiz!</Text>
      <StatusBar style="auto" />
      <TripListScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d182e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
