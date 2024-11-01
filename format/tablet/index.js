import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import React, {useEffect } from 'react'

const Tablet = () => {

  
  useEffect(() => {
    const interval = setInterval(() => {
      setDeviceType(getDeviceType());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
        <Text>Tablet</Text>
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

export default Tablet