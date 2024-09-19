import React, { useEffect, useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { getThemes, insertTheme } from "../../services/Database";
import styles from "./styles";

export default function ThemeSelector() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  async function fetchThemes() {
    const themes = await getThemes();
    const dropdownItems = themes.map((theme) => ({
      label: theme.name,
      value: theme.id,
    }));
    setItems(dropdownItems);
  }

  useEffect(() => {
    fetchThemes();
  }, []);

  async function handleAddCustomItem(newTheme) {
    if (!items.map((theme) => theme.label).includes(newTheme.label)) {
      const success = await insertTheme({
        name: newTheme.label,
      });
      if (success) {
        fetchThemes();
      }
    }
  }

  DropDownPicker.setTheme("DARK");

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={"Selecione um tema"}
        searchable={true}
        searchPlaceholder={"Buscar/Adicionar..."}
        addCustomItem={true}
        onSelectItem={handleAddCustomItem}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />
    </View>
  );
}
