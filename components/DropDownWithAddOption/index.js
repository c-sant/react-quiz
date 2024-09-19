import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const DropdownWithAddOption = () => {
  const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3"]);
  const [newOption, setNewOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleAddNewOption = () => {
    if (newOption.trim() && !options.includes(newOption)) {
      setOptions((prevOptions) => [...prevOptions, newOption]);
      setSelectedOption(newOption);
      setNewOption(""); // Clear the text input after adding
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => handleSelectOption(item)}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select option</Text>
      <FlatList
        data={options}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <TextInput
        style={styles.input}
        value={newOption}
        placeholder="Type new option"
        onChangeText={setNewOption}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddNewOption}>
        <Text style={styles.addButtonText}>Add new option</Text>
      </TouchableOpacity>
      {selectedOption ? (
        <Text style={styles.selectedText}>Selected: {selectedOption}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "black",
    padding: 10,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DropdownWithAddOption;
