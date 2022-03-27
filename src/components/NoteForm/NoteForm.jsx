import React from "react";
import "./style.css";

class NoteForm extends React.Component {
  render() {
    return (
      <form className="note-form">
        <input type="text" placeholder="Título" className="note-form_title" />
        <textarea
          cols="30"
          rows="10"
          defaultValue="Insira uma nota aqui..."
          className="note-form_text"
        />
        <button className="note-form_btn">Criar nota</button>
      </form>
    );
  }
}

export default NoteForm;
