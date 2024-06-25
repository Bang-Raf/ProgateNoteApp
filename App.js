import React, { useState } from "react";
import Home from "./src/screens/home";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";
import DeleteNote from "./src/screens/deleteNote";

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  editNote,
  deleteNote,
  selectedNote,
  setSelectedNote,
}) => {
  switch (currentPage) {
    case "home":
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          setSelectedNote={setSelectedNote}
        />
      );
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return (
        <EditNote
          setCurrentPage={setCurrentPage}
          editNote={editNote}
          note={selectedNote}
        />
      );
    case "delete":
      return (
        <DeleteNote
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          note={selectedNote}
        />
      );
    default:
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          setSelectedNote={setSelectedNote}
        />
      );
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
  ]);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
    setCurrentPage("home");
  };

  const editNote = (id, title, desc) => {
    const newNoteList = noteList.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          title,
          desc,
        };
      }
      return note;
    });
    setNoteList(newNoteList);
    setCurrentPage("home");
  };

  const deleteNote = (id) => {
    const newNoteList = noteList.filter((note) => note.id !== id);
    setNoteList(newNoteList);
    setCurrentPage("home");
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
      editNote={editNote}
      deleteNote={deleteNote}
      selectedNote={selectedNote}
      setSelectedNote={setSelectedNote}
    />
  );
};

export default App;
