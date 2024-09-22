import React, { useEffect, useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { getThemes, insertTheme } from "../../services/Database";
import styles from "./styles";

export default function ThemeSelector({
  theme,
  setTheme,
  searchable = true,
  searchPlaceholder = "Buscar/Adicionar...",
  addCustomItem = true,
  includeAll = false,
  onChangeValue = null,
}) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchThemes() {
    const themes = await getThemes();
    var dropdownItems = themes.map((theme) => ({
      label: theme.name,
      value: theme.id,
    }));

    if (includeAll) dropdownItems.push({ label: "Todos", value: -1 });
    setItems(dropdownItems);
  }

  useEffect(() => {
    fetchThemes();
  }, []);

  async function handleAddCustomItem(newTheme) {
    if (!items.map((theme) => theme.label).includes(newTheme.label)) {
      await insertTheme({
        name: newTheme.label,
      });
    }
    fetchThemes()
  }

  DropDownPicker.setTheme("DARK");

  return (
    <View>
      <DropDownPicker
        open={open}
        value={theme}
        items={items}
        setOpen={setOpen}
        setValue={setTheme}
        setItems={setItems}
        placeholder={"Selecione um tema"}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        addCustomItem={addCustomItem}
        onSelectItem={handleAddCustomItem}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />
    </View>
  );
}
