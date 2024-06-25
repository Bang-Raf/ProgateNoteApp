import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Home = ({ noteList, setCurrentPage, setSelectedNote }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progate App Note</Text>
      <FlatList
        data={noteList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.note}>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.noteDesc}>{item.desc}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.editButton]}
                onPress={() => {
                  setSelectedNote(item);
                  setCurrentPage("edit");
                }}
              >
                <Text style={styles.buttonText}>Ubah</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.deleteButton]}
                onPress={() => {
                  setSelectedNote(item);
                  setCurrentPage("delete");
                }}
              >
                <Text style={styles.buttonText}>Hapus</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setCurrentPage("add")}
      >
        <Text style={styles.addButtonText}>Add Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E5E5E5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "#DADADA",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  note: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  noteDesc: {
    fontSize: 16,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: "45%",
  },
  editButton: {
    backgroundColor: "#FFC107",
  },
  deleteButton: {
    backgroundColor: "#DC3545",
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
  },
  addButton: {
    backgroundColor: "#247881",
    color: "#fff",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
  },
});

export default Home;
