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

import { fetchMenu, fetchOrder, fetchHeaders, cancelOrder, addOrderItem } from '../actions/index';

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
      items: [],
      show: false
    }
    this.getOrder();
    this.getMenu();
  }

  getOrder = () => {
    fetchHeaders().promise.then(r => this.setState({
      userEmail: r.headers.get('X-User-Email'),
      userToken: r.headers.get('X-User-Token')
    }, () => fetchOrder(this.state.userEmail, this.state.userToken).promise.then(order => this.setState({
      order: order
    }, () => this.setState({items: this.state.order.order_items})))));
  }


  getMenu = () => {
    fetchMenu().promise.then(r => r.map(menu => this.setState({
      menu: [...this.state.menu, menu]
    }, () => this.setState({
      category: this.state.menu[0],
      isLoaded: true
      }))));
  }

  updateOrder = (id, email, token, action) => {
    const promise = action === 'add' ? addOrderItem(id, email, token).promise : cancelOrder(id, token, action).promise
    promise.then(() => {
      fetchOrder(this.state.userEmail, this.state.userToken).promise
        .then(order => this.setState({
          order: order
        }, () => this.setState({items: this.state.order.order_items})))
    });
  }

  handleClick = () => { this.setState({ show: true }); }

  handleClose = () => { this.setState({ show: false }); }

  changeCategory = (idx) => { this.setState({ category: this.state.menu[idx] }); }

  render() {
    const {userEmail, userToken, menu, category, isLoaded, order, items, show} = this.state;
    const table = order.table;
    const total = order.total_price;
    // console.log(order);
    return (
      <div>
        <CategoryList menu={menu} changeCategory={this.changeCategory} />
        <MenuItemList menu={menu} email={userEmail} token={userToken} isLoaded={isLoaded} category={category} updateOrder={this.updateOrder} />
        <div className="order-list-button">
          <FontAwesomeIcon icon={faShoppingBasket} onClick={this.handleClick} />

          <Modal show={show} onHide={this.handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Your Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p> Table : {table} </p>
              <p><b>Items:</b></p>
              { items.map( (item, idx) => <OrderItem item={item} key={idx} updateOrder={this.updateOrder} />)}
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
