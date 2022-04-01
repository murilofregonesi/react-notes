import React from "react";
import "./style.css";

class CategoryList extends React.Component {

  _handleCategory(event) {
    if(event.key === "Enter") {
      if(!this.props.categories.includes(event.target.value)) {
        this.props.createCategory(event.target.value);
      } else {
        console.log('Already exists.')
      }
    }
  }
  
  render() {
    return (
      <section className="category-list">
        <ul className="category-list_ul">
          {this.props.categories.map(category => {
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
