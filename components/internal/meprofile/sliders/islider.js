import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const IListSlider = ({ isExpanded, onSelect }) => {
  const handleOptionSelect = (option) => {
    onSelect(option);
  };
  

  return isExpanded ? (
    <View style={styles.sliderContainer}>
      <TouchableOpacity
        style={styles.sliderOption}
        onPress={() => handleOptionSelect('Yes')}
      >
        <Text style={styles.optionText}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sliderOption}
        onPress={() => handleOptionSelect('No')}
      >
        <Text style={styles.optionText}>No</Text>
      </TouchableOpacity>
      {/* Add more options as needed */}
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  sliderOption: {
    backgroundColor: '#e0e0e0',
    padding: 8,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
  },
});

export default IListSlider;
