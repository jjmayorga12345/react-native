import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type Props = {
  name: string;
  image: string;
};

const ContactCard = ({ name, image }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
  },
});

export default ContactCard;
