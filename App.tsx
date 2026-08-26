import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Request from './components/Request';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Act_3 React Native 1!</Text>
      <Request url="https://raw.githubusercontent.com/dariogarayrojo-git/Act_3/refs/heads/main/instrumentos.json"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
