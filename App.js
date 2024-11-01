import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Computer from './format/pc';
import Tablet from './format/tablet';
import Mobile from './format/mobile';
const getDeviceType = () => {
  const { width } = Dimensions.get('window');
  if (width >= 1024) {
    return 'PC'; 
  } else if (width >= 600) {
    return 'Tablet'; 
  } else {
    return 'Phone';
  }
};

const App = () => {
  const [deviceType, setDeviceType] = useState(getDeviceType());

  useEffect(() => {
    const interval = setInterval(() => {
      setDeviceType(getDeviceType());
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.container}>
      {deviceType == 'PC'?(
        <View style={styles.compo}>
          <Computer/>
        </View>
      ) : deviceType == 'Tablet' ?(
        <View style={styles.compo}>
          <Tablet/>
        </View>
      ):(
        <View style={styles.compo}>
          <Mobile/>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  compo : {
    justifyContent : 'flex-start',
    alignItems : 'flex-start',
    width: '100%',
    height: '100%',
  }
});

export default App;
