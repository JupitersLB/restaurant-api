class OrderItemsController < ApplicationController
  def index
    @order_items = OrderItem.includes(:order).includes(:menu_item).order(created_at: :desc)
  end
end
