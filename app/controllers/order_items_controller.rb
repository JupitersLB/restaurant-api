class OrderItemsController < ApplicationController
  def index
    @orders = Order.where(paid: false)
    # @order_items = OrderItem.includes(:order).includes(:menu_item).order(created_at: :desc)
  end

  def served
    @order_item = OrderItem.find(params[:id])
    @order_item.status = 'served'
    if @order_item.save
      @order = @order_item.order
      @order_item
    end
    redirect_to order_path(@order)
  end
end
