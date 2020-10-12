const BASE_URL = '/api/v1/';

export function fetchMenu() {
  const url = `${BASE_URL}/menus/1/menu_items`
  const promise = fetch(url, { credentials: "same-origin"}).then(r => r.json());

  return { promise }
}

export function updateOrder(item, email, token) {
  const url = `${BASE_URL}/orders/1/`;
  const body = { "order_item": { "menu_item_id": item.id, "order_id": ""} };
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
