import React from "react";
import "./style.css";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.title = "";
    this.text = "";
    this.category = "";

    this._handleListener = this._handleListener.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.props.categories.addListener(this._handleListener);
  }

  componentWillUnmount() {
    this.props.categories.removeListener(this._handleListener);
  }

  _handleListener(categories) {
    this.setState({categories});
  }

  _handleTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _handleCategory(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }

  _handleCreate(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text, this.category);
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
          {this.state.categories.map((category, index) => {
            return <option key={index} value={category}>{category}</option>
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
