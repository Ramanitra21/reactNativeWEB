import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import React, {useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Mobile = () => {

  
  useEffect(() => {
    const interval = setInterval(() => {
      setDeviceType(getDeviceType());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text>mobile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
      justifyContent : 'center',
      alignItems : 'center',
      width: '100%',
      height: '100%',
      
    },
    
  });

export default Mobile