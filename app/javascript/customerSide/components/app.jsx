import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QueryString from "query-string";

import CategoryList from '../containers/categoryList';
import MenuItemList from '../containers/menuItemList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_email: '',
      user_token: ''
    }
  }

  componentDidMount() {
    if (typeof QueryString.parse(location.search).user_email !== "undefined") {
      const params = QueryString.parse(location.search)
      console.log(params.user_email);
      console.log(params.user_token);
      this.setState({
        user_email: params.user_email,
        user_token: params.user_token
      })
    }
  }


  render() {
    return (
      <div className="container-fluid">
        <CategoryList />
        <MenuItemList />
      </div>
    );
  }
}

export default App;
