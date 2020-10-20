import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QueryString from "query-string";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


import CategoryList from '../containers/categoryList';
import MenuItemList from '../containers/menuItemList';
import OrderItem from '../components/orderItem';

import { fetchMenu, fetchOrder, fetchHeaders } from '../actions/index';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userToken: '',
      menu: [],
      isLoaded: false,
      category: '',
      order: '',
      show: false
    }
  }

  componentDidMount() {
    fetchHeaders().promise.then(r => this.setState({
      userEmail: r.headers.get('X-User-Email'),
      userToken: r.headers.get('X-User-Token')
    }));
    // this.checkUser();
    fetchMenu().promise.then(r => r.map(menu => this.setState({
      menu: [...this.state.menu, menu]
    }, () => this.setState({
      category: this.state.menu[0],
      isLoaded: true
      }))));
  }

  // gets user by query string
  // checkUser = () => {
  //   if (typeof QueryString.parse(location.search).user_email !== "undefined") {
  //     const params = QueryString.parse(location.search)
  //     this.setState({
  //       userEmail: params.user_email,
  //       userToken: params.user_token
  //     })
  //   }
  // }

  handleClick = () => {
    fetchOrder(this.state.userEmail, this.state.userToken).promise.then(order => this.setState({
      order: order,
      show: true
    }));
  }

  handleClose = () => {
    this.setState({ show: false });
  }



  changeCategory = (idx) => {
    this.setState({ category: this.state.menu[idx] });
  }

  render() {
    const {userEmail, userToken, menu, category, isLoaded, order, show} = this.state;
    const table = order.table;
    // needs to be order.order_items with a new component
    let items = [];
    if (show) {
      items = order.order_items;
    }
    const total = order.total_price;
    return (
      <div>
        <CategoryList menu={menu} changeCategory={this.changeCategory} />
        <MenuItemList menu={menu} email={userEmail} token={userToken} isLoaded={isLoaded} category={category} />
        <div className="order-list-button">
          <FontAwesomeIcon icon={faShoppingBasket} onClick={this.handleClick} />

          <Modal show={show} onHide={this.handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Your Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p> Table : {table} </p>
              <p><b>Items:</b></p>
              { items.map( (item, idx) => <OrderItem item={item} key={idx} />)}
              <p> Total : ¥{total} </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

        </div>

      </div>
    );
  }
}

export default App;
