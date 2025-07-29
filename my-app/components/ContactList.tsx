import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ContactCard from './ContactCard';
import Search from './Search';

type Contact = {
  id: string;
  name: string;
  image: string;
};

const contacts: Contact[] = [
  { id: '1', name: 'Joel', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '2', name: 'Miguel', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '3', name: 'Steve Jobs', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '4', name: 'Peanut man', image: 'https://reactnative.dev/img/tiny_logo.png' },
];

const ContactList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FlatList
        data={filteredContacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ContactCard name={item.name} image={item.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ContactList;
