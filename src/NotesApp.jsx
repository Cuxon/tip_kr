import { useState } from "react";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addNote = () => {
    if (!inputValue.trim()) return;
    setNotes([...notes, inputValue]);
    setInputValue("");
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Список заметок</h2>
      <div>
        <input
          type="text"
          placeholder="Введите заметку..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addNote}>Добавить</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {notes.map((note, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {note}{" "}
            <button onClick={() => deleteNote(index)} style={{ marginLeft: "10px" }}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
