import consumer from "./consumer";

const initOrderItemCable = () => {
  const ordersContainers = document.querySelectorAll('#orders');
  if (ordersContainers) {
    ordersContainers.forEach((container) => {
      const id = container.dataset.orderId;
      consumer.subscriptions.create({ channel: "OrderChannel", id: id }, {
        received(data) {
          container.insertAdjacentHTML('afterbegin', data); // called when data is broadcast in the cable
        },
      });
    });
  }
}

export { initOrderItemCable };
