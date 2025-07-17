import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function About() {
  return (
    <View style={styles.container}>
        <Link href={"/"}>
        <Text className="text-red-300 text-3xl">Go to Home</Text>
        </Link>
      <Text>Open up App.tsx to start working on your app Sidhartha</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
