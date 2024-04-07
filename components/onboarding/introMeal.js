import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import MealDrawing from '../svgElements/mealDrawing';
import IntroMealPageStyles from '../../styles/onboarding/introMeal';

const mainButtonColors = { firstColor: '#92A3FD', secondColor: '#9DCEFF' };
const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };
const gradientEnd = { x: 1, y: 0 };

const IntroMealPage = () => {
  const navigation = useNavigation();

  const navigateToNextScreen = () => {
    navigation.navigate('IntroInspired'); 
  };
    return (
      <View style={IntroMealPageStyles.container}>
       <MealDrawing></MealDrawing>
        <View style={IntroMealPageStyles.contentContainer}>
          <Text style={IntroMealPageStyles.textHeader}>Fit Meal</Text>
          <Text style={IntroMealPageStyles.textDescription}>Track your meal's calorie content effortlessly with our intuitive interface. But that's just the beginning!</Text>
        </View>
        <View style={IntroMealPageStyles.buttonContainer}>
          <TouchableOpacity style={IntroMealPageStyles.button} onPress={navigateToNextScreen}>
            <LinearGradient
              colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
              end={gradientEnd}
              style={IntroMealPageStyles.gradient}
            >
              <Text style={IntroMealPageStyles.buttonText}>{'>'}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
};

export default IntroMealPage;
