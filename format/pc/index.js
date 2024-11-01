import React, { useEffect, useRef } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const AnimatedText = ({ children }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Lancer l'animation d'Computerarition
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000, // Durée de l'animation en millisecondes
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
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <AnimatedText>Bonjour, voici un texte animé !</AnimatedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width :'100%',
    height:'100%'
  },
  text: {
    fontSize: scale(20),
    fontWeight:'bold',  
    color: 'white',
    fontFamily: 'century gothic'
  },
  banner : {
    width : '100%',
    height : verticalScale(100),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#07268fb3',
        // Styles pour l'ombre
        shadowColor: '#000', // Couleur de l'ombre
        shadowOffset: {
          width: 0, // Aucun décalage horizontal
          height: 2, // Décalage vertical
        },
        shadowOpacity: 0.25, // Opacité de l'ombre
        shadowRadius: 3.5, // Rayon de l'ombre
        elevation: 5, // Élévation pour Android
  }
});

export default Computer;
