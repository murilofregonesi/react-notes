import React from "react";
import "./style.css";

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this._listenCallback = this._listenCallback.bind(this);

    this.state = {
      categories: [],
    }
  }

  componentDidMount() {
    this.props.categories.addListener(this._listenCallback);
  }

  componentWillUnmount() {
    this.props.categories.removeListener(this._listenCallback);
  }

  _listenCallback(categories) {
    this.setState({categories});
  }

  _handleCategory(event) {
    if(event.key === "Enter") {
      if(!this.state.categories.includes(event.target.value)) {
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
          {this.state.categories.map((category, index) => {
            return(
              <li key={index} className="category-list_li">{category}</li>
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
