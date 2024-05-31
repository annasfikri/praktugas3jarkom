import * as React from 'react';
import {View,Text,TextInput,Button,ScrollView,FlatList,Image,StyleSheet,} 
from 'react-native';

const App = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [notes, setNotes] = React.useState([]);
  const [image, setImage] = React.useState('');

  const addNote = () => {
    if (title && description) {
      const newNote = { id: Date.now().toString(), title, description, image };
      setNotes([...notes, newNote]);
      setTitle('');
      setDescription('');
      setImage('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.note}>
      <Image source={{ uri: item.image }} style={styles.noteImage} />
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.noteDescription}>{item.description}</Text>
      <Button color= 'red' title="Hapus" onPress={() => deleteNote(item.id)} />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
    <Image source={{ uri: 'https://i.pinimg.com/564x/a1/cc/09/a1cc09b6e0087036b5629c42c66edc57.jpg' }} style={styles.largeHeaderImage} />
      <Text style={[styles.header, {fontFamily: 'bebas'}]}>YANG PUNYA DUIT AJA</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Barang"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Harga Barang"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="link Gambar"
        value={image}
        onChangeText={setImage}
      />

      <Button title="Tambah Produk" onPress={addNote} />
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
  padding: 20,  
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  
  largeHeaderImage: {
    width: 100, 
    height: 100,
    marginHorizontal: 100
  ,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  note: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noteDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  noteImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default App;