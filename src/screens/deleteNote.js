import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DeleteNote = ({ setCurrentPage, deleteNote, note }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hapus Note</Text>
      <Text style={styles.message}>
        Apakah Anda yakin ingin menghapus note ini?
      </Text>
      <Text style={styles.noteTitle}>{note.title}</Text>
      <Text style={styles.noteDesc}>{note.desc}</Text>
      <TouchableOpacity
        style={styles.buttonDelete}
        onPress={() => {
          deleteNote(note.id);
          setCurrentPage("home");
        }}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonCancel}
        onPress={() => setCurrentPage("home")}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  message: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  noteDesc: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  buttonDelete: {
    backgroundColor: "#ff0000",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonCancel: {
    backgroundColor: "#DDDDDD",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default DeleteNote;
