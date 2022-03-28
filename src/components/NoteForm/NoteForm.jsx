import React from "react";
import "./style.css";

class NoteForm extends React.Component {
  render() {
    return (
      <form className="note-form">
        <input type="text" placeholder="Título" className="note-form_input" />
        <textarea
          cols="30"
          rows="10"
          defaultValue="Insira uma nota aqui..."
          className="note-form_input"
        />
        <button className="note-form_input note-form_submit">Criar nota</button>
      </form>
    );
  }
}

export default NoteForm;
