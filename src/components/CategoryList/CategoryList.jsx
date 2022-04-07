import React from "react";
import "./style.css";

class CategoryList extends React.Component {

  componentDidMount() {
    this.props.categories.addListener(this._listenCallback.bind(this));
  }

  _listenCallback() {
    console.log('_listenCallback');
  }

  _handleCategory(event) {
    if(event.key === "Enter") {
      if(!this.props.categories.categories.includes(event.target.value)) {
        this.props.categories.addCategory(event.target.value);
      } else {
        console.log('Already exists.')
      }
    }
  }
  
  render() {
    return (
      <section className="category-list">
        <ul className="category-list_ul">
          {this.props.categories.categories.map(category => {
            return(
              <li key={category} className="category-list_li">{category}</li>
            );
          })}
        </ul>
        <input type="text"
          placeholder="New category"
          className="category-list_input"
          onKeyUp={this._handleCategory.bind(this)}
        />
      </section>
    )
  }
}

export default CategoryList;
