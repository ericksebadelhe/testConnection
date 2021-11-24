import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const NetworkInfo = () => {
  const [anim] = useState(new Animated.Value(56));

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        Animated.timing(anim, {
          toValue: 56,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(anim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }
    });

    return () => {
      unsubscribe();
    };
  }, [anim]);

  return (
    <Animated.View
      style={[
        styles.animatedContainer,
        {
          transform: [{translateY: anim}],
        },
      ]}>
      <View style={styles.container}>
        <Text style={styles.text}>No Connection</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    height: 40,
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
  },
  container: {
    flex: 1,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#EF2756',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default NetworkInfo;
