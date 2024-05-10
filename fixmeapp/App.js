import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchPage from './screens/SearchPage';


export default function App() {
  return (
    <View style={styles.container}>
      <SearchPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
