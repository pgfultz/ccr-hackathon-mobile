import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigator from './routes';

export default function Routes(){
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function loadData(){
      const data = await AsyncStorage.getItem('TOKEN');
      if(data){
        setToken(data);
      }
      setLoading(false);
    })();
  }, []);

  if(loading){
    return(
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#005d98" />
      </View>
    );
  }

  return token ? <Navigator /> : <Navigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});