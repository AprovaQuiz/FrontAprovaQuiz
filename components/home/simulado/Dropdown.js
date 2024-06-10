import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Dropdown = ({ data, onSelect }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (item) => {
    setSelectedValue(item);
    onSelect(item);
    setShowOptions(false);
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setShowOptions(!showOptions)}
      >
        <Text style={styles.dropdownButtonText}>
          {selectedValue ? selectedValue.nome : 'Selecione uma opção'}
        </Text>
      </TouchableOpacity>
      {showOptions && (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.option}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.optionText}>{item.nome}</Text>
            </TouchableOpacity>
          )}
          style={styles.optionsList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  dropdownButton: {
    backgroundColor: '#8A45ED',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderBottomWidth: 5,
    borderColor: '#3C1673',
    minWidth: 200,
    height: 50,
    bottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    alignSelf: 'center'
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#fff'
  },
  optionsList: {
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#391173',
    elevation: 2,
    marginBottom: 20,
    width: 220
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#fff'
  },
});

export default Dropdown;
