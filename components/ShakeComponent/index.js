import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const ShakeComponent = ({children, shouldShake, render}) => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (shouldShake) {
      shake();
    }
  }, [render]);

  const animatedStyle = {
    transform: [{translateX: shakeAnimation}],
  };

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};

export default ShakeComponent;
