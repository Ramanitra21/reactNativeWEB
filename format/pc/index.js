import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import { Animated, Text, View, StyleSheet, ScrollView, Image, useWindowDimensions } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const AnimatedText = ({ children }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <Animated.Text style={[styles.text, { opacity }]}>
      {children}
    </Animated.Text>
  );
};

const Computer = () => {
  const { width } = useWindowDimensions();
  const [isLargeScreen, setIsLargeScreen] = useState(width > 768);

  useEffect(() => {
    const handleDimensionChange = () => {
      const screenWidth = Dimensions.get('window').width;
      setIsLargeScreen(screenWidth > 768);
    };

    Dimensions.addEventListener('change', handleDimensionChange);

    return () => {
      Dimensions.removeEventListener('change', handleDimensionChange);
    };
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={[
          styles.header, 
          { paddingHorizontal: scale(10) }
        ]}
      >
        <View style={styles.headerLeft}>
          <View style={styles.logoContainer}>
            <Image source={require('../../images/4.png')} style={styles.logoImage}/>
            <AnimatedText>oobilies</AnimatedText>
          </View>
        </View>
        <View style={styles.headerRight}>
          <AnimatedText>Together, Crafting the Future of Mobile Apps!</AnimatedText>
        </View>
      </View>

      <View style={[styles.mainContent, { flexDirection: isLargeScreen ? 'row' : 'column' }]}>
        <View style={styles.leftContent}>
          <Text style={styles.mainTitle}>Experience excellence with us.</Text>
          <Text style={styles.subtitle}>Your partner in business</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Learn more</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Image source={require('../../images/techno.png')} style={[styles.mainImage, { width: isLargeScreen ? '100%' : '80%' }]}/>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          {/* Icon Images section */}
        </View>
        <View style={styles.footerRight}>
          {['Service', 'Developer', 'Student', 'About us'].map((text) => (
            <TouchableOpacity key={text}>
              <Text style={styles.footerText}>{text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(200),
    backgroundColor: '#00c4b3',
  },
  header: {
    height: verticalScale(70),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLeft: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    height: '100%',
  },
  logoImage: {
    width: '50%',
    height: '100%',
  },
  headerRight: {
    width: '50%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  mainContent: {
    width: '100%',
    height: verticalScale(200),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    width: '40%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: scale(26),
  },
  mainTitle: {
    fontSize: scale(38),
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'century gothic',
  },
  subtitle: {
    fontSize: scale(20),
    color: 'white',
    fontFamily: 'century gothic',
    marginTop: verticalScale(10),
  },
  buttonContainer: {
    height: '25%',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  button: {
    width: '45%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00569e',
    borderRadius: scale(10),
  },
  buttonText: {
    fontSize: scale(12),
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'century gothic',
  },
  rightContent: {
    width: '60%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  mainImage: {
    height: '100%',
  },
  footer: {
    height: verticalScale(46),
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerLeft: {
    width: '40%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(26),
  },
  footerRight: {
    width: '60%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(40),
  },
  footerText: {
    fontSize: scale(12),
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'century gothic',
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: scale(20),
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'century gothic',
  },
});

export default Computer;
