const BASE_URL = '/api/v1';

export function fetchMenu() {
  const url = `${BASE_URL}/menus/1/menu_items`
  const promise = fetch(url, { credentials: "same-origin"}).then(r => r.json());

  return { promise }
}

export function fetchOrder(email, token) {
  const url = `${BASE_URL}/orders/1`
  const promise = fetch(url, {
    headers: {
      'X-User-Email': email,
      'X-User-Token': token
    },
    credentials: "same-origin"
  }).then(r => r.json());

  return { promise }
}

export function fetchHeaders() {
  const url = window.location.href
  const promise = fetch(url, { credentials: "same-origin"}).then(r => r);
  return { promise }
}

export function cancelOrder(itemId, email, token) {
  const url = `${BASE_URL}/order_items/${itemId}/cancel`;
  // const body = { "order_item": { "menu_item_id": itemId, "order_id": ""} };
  // const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'X-CSRF-Token': csrfToken
      'X-User-Email': email,
      'X-User-Token': token
    },
    credentials: 'same-origin',
  });
  return {
    promise
  };
}

export function addReview(itemId, email, token, value) {
  const url = `${BASE_URL}/order_items/${itemId}/reviews`;
  const body = { "review": { "rating": value, "order_item_id": itemId } };
  // const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'X-CSRF-Token': csrfToken
      'X-User-Email': email,
      'X-User-Token': token
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    promise
  };
}

export function updateReview(itemId, email, token, value) {
  const url = `${BASE_URL}/reviews/${itemId}`;
  const body = { "review": { "rating": value } };
  // const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'X-CSRF-Token': csrfToken
      'X-User-Email': email,
      'X-User-Token': token
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    promise
  };
}


export function addOrderItem(itemId, email, token) {
  const url = `${BASE_URL}/orders/1/order_items`;
  const body = { "order_item": { "menu_item_id": itemId, "order_id": ""} };
  // const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'X-CSRF-Token': csrfToken
      'X-User-Email': email,
      'X-User-Token': token
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    promise
  };
}


