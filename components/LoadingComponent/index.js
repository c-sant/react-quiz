import React, { useEffect } from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { createTables } from '../../services/Database';

export default function LoadingComponent({ navigation }){
    async function onCreateTable() {
        let result = await createTables()
        navigation.navigate("Home")
    }

    useEffect(() => {
        onCreateTable()
    }, [])
    return(
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
    </View>
    )
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});