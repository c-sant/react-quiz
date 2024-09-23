import React from "react";
import { Text, View, Alert, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import FlowButton from "../FlowButton";
import { useState } from "react";
import { deleteTheme, getThemes, updateTheme } from "../../services/Database";
import styles from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import Toast from "react-native-toast-message";

export default function ThemeScreen({ navigation }) {
  const [themes, setThemes] = useState(null);
  const [currentTheme, setCurrentTheme] = useState(0)

  async function fetchThemes() {
    const loadedThemes = await getThemes();
    setThemes(loadedThemes);
  }

  function onChangeTheme(index, value){
    let array = [...themes]
    setCurrentTheme(index)
    array[index].name = value 
    setThemes(array)
  }

  async function onHandleUpdateTheme(){
    let array = [...themes]
    try{
        await updateTheme(array[currentTheme])
        await fetchThemes()
    }catch(err){
        Toast.show({
            type: 'error',
            text1: 'Falha!',
            text2: 'Não foi possível atualizar o tema!'
          })
    }

    Toast.show({
        type: 'success',
        text1: 'Sucesso!',
        text2: 'Tema alterado com sucesso!'
      })
    
  }

  async function handleDeleteTheme(theme, id) {
    Alert.alert(
      "Apagar tema",
      `Você tem certeza de que quer apagar o tema selecionada (${theme.name})?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Apagar",
          onPress: async () => {
            await deleteTheme(id);
            await fetchThemes();
          },
        },
      ]
    );
  }

  useFocusEffect(
    React.useCallback(() => {
        fetchThemes(); // Call the function to fetch questions
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temas</Text>
      <View style={styles.questionList}>
        <ScrollView style={styles.scrollableView} contentContainerStyle={styles.contentContainer}>
        {themes &&
          themes.map((theme, index) => (
            <View style={styles.card} key={index}>
                <TextInput style={styles.cardText} value={theme.name} onChangeText={(value) => onChangeTheme(index, value)}></TextInput>
                <View style={styles.buttonRow}>
                    {/* Botão de Editar */}
                    <TouchableOpacity style={styles.cardButton} onPress={() => onHandleUpdateTheme()}>
                    <AntDesign name="edit" size={24} color="#f1f1f1" />
                    </TouchableOpacity>
                    {/* Botão de Deletar */}
                    <TouchableOpacity style={styles.cardButton} onPress={() => handleDeleteTheme(theme, theme.id)}>
                    <AntDesign name="delete" size={24} color="#f1f1f1" />
                    </TouchableOpacity>
                </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <FlowButton
        text="Voltar"
        onPress={() => navigation.navigate("Home")}
        backgroundColor="#d5ad2a"
      ></FlowButton>
    </View>
  );
}
