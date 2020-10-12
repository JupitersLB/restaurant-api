import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QueryString from "query-string";

import CategoryList from '../containers/categoryList';
import MenuItemList from '../containers/menuItemList';

import { fetchMenu } from '../actions/index';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userToken: '',
      menu: [],

    }
  }

  componentDidMount() {
    if (typeof QueryString.parse(location.search).user_email !== "undefined") {
      const params = QueryString.parse(location.search)
      console.log(params.user_email);
      console.log(params.user_token);
      this.setState({
        userEmail: params.user_email,
        userToken: params.user_token
      })
    }

    fetchMenu().promise.then(r => r.map(menu => this.setState({
      menu: [...this.state.menu, menu]
    })));
  }


  render() {
    const {userEmail, userToken, menu} = this.state
    return (
      <div>
        <CategoryList menu={menu} />
        <MenuItemList menu={menu} />
      </div>
    );
  }
}

export default App;
