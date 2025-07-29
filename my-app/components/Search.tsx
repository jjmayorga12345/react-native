import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

type Props = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};

const Search = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  },
});

export default Search;
