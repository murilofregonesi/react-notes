import React from "react";

class NoteForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título" />
        <textarea cols="30" rows="10">
          Insira uma nota aqui...
        </textarea>
        <button>Criar nota</button>
      </form>
    );
  }
}

export default NoteForm;
