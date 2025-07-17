import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { verifyInstallation } from 'nativewind';
// ... inside your component

export default function Home() {
  verifyInstallation();
  return (
    <View style={styles.container}>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      <Link href={"/card"}>Card</Link>
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
