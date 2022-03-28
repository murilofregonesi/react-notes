import React from "react";
import "./style.css";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.title = "";
    this.text = "";
  }

  _handleTitle(event) {
    this.title = event.target.value;
    event.stopPropagation();
  }

  _handleText(event) {
    this.text = event.target.value;
    event.stopPropagation();
  }

  _handleCreate(event) {
    this.props.createNote(this.title, this.text);
    event.preventDefault();
    event.stopPropagation();
  }

  render() {
    return (
      <form className="note-form"
        onSubmit={this._handleCreate.bind(this)}
      >
        <input type="text"
          placeholder="Título"
          className="note-form_input"
          onChange={this._handleTitle.bind(this)}
        />
        <textarea
          cols="30"
          rows="10"
          defaultValue="Insira uma nota aqui..."
          className="note-form_input"
          onChange={this._handleText.bind(this)}
        />
        <button className="note-form_input note-form_submit">Criar nota</button>
      </form>
    );
  }
}

export default NoteForm;
