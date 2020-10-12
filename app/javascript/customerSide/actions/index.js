const BASE_URL = '/api/v1/';

export function fetchMenu() {
  const url = `${BASE_URL}/menus/1/menu_items`
  const promise = fetch(url, { credentials: "same-origin"}).then(r => r.json());

  return { promise }
}
