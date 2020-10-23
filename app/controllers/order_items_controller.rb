class OrderItemsController < ApplicationController
  def index
    @orders = Order.all
    @order_items = OrderItem.includes(:order).includes(:menu_item).order(created_at: :desc)
  end
end
