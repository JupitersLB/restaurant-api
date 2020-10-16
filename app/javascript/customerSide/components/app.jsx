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
      isLoaded: false,
      category: ''
    }
  }

  componentDidMount() {
    this.checkUser();
    fetchMenu().promise.then(r => r.map(menu => this.setState({
      menu: [...this.state.menu, menu]
    }, () => this.setState({
      category: this.state.menu[0],
      isLoaded: true
      }))));
  }

  checkUser = () => {
    if (typeof QueryString.parse(location.search).user_email !== "undefined") {
      const params = QueryString.parse(location.search)
      this.setState({
        userEmail: params.user_email,
        userToken: params.user_token
      })
    }
  }

  changeCategory = (idx) => {
    this.setState({ category: this.state.menu[idx] });
  }

  render() {
    const {userEmail, userToken, menu, category, isLoaded} = this.state
    return (
      <div>
        <CategoryList menu={menu} changeCategory={this.changeCategory} />
        <MenuItemList menu={menu} email={userEmail} token={userToken} isLoaded={isLoaded} category={category} />
      </div>
    );
  }
}

export default App;
