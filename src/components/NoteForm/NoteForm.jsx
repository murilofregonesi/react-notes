import React from "react";
import "./style.css";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.title = "";
    this.text = "";
    this.category = "";
  }

  _handleTitle(event) {
    this.title = event.target.value;
    event.stopPropagation();
  }

  _handleText(event) {
    this.text = event.target.value;
    event.stopPropagation();
  }

  _handleCategory(event) {
    this.category = event.target.value;
    event.stopPropagation();
  }

  _handleCreate(event) {
    this.props.createNote(this.title, this.text, this.category);
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
        <select name="category"
          className="note-form_input"
          onChange={this._handleCategory.bind(this)}
        >
          {this.props.categories.map(category => {
            return <option value={category}>{category}</option>
          })}
        </select>
        <textarea
          cols="30"
          rows="10"
          placeholder="Insira uma nota aqui..."
          className="note-form_input"
          onChange={this._handleText.bind(this)}
        />
        <button className="note-form_input note-form_submit">Criar nota</button>
      </form>
    );
  }
}

export default NoteForm;
