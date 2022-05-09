import React, { useState } from 'react';

import { 
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';
import { FriendList } from './components/FriendList';

export function Home(){
  const [name, setName] = useState('');
  const [friends, setFriends] = useState([]);

  async function handleSearch(){
    try{
      console.log(name)
      const response = await fetch(`http://192.168.1.62:3333/friends?q=${name}`)
      const data = await response.json();
      setFriends(data);
    } catch(e){
      console.log(e);
    }
  }

  return(
    <ScrollView
      style={styles.container}
    >
      <Text style={styles.title}>Amigos</Text>

      <TextInput
        placeholder='Nome do cliente'
        onChangeText={setName}
        style={styles.input}
      />

      <Button
        title="Buscar"
        onPress={handleSearch}
      />

      <FriendList data={friends} />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginVertical: 10
  },
})