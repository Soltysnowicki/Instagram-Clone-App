import React from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import styles from "./SearchBar.style";

const SearchBar = ({ ıconColor, placeHolders }) => {
  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholder={"Szukaj"}
          placeholderTextColor="grey"
          style={styles.input}
        />

        <Feather name="search" size={20} color="grey" style={styles.icon} />
      </View>
    </SafeAreaView>
  );
};

export default SearchBar;
