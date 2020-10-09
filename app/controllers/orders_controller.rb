class OrdersController < ApplicationController
  def index
    @orders = Order.includes(:menu_items)
  end
end
