class OrdersController < ApplicationController
  def index
    @orders = Order.includes(:menu_items)
  end

  def new
    @order = Order.new()
  end

  def create
    @order = Order.new(order_params)
    @order.user = User.create(role: 'customer', email: "#{@order.table}#{(0...8).map { (65 + rand(26)).chr }.join}@gmail.com", password: 'password')
    if @order.save
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def order_params
    params.require(:order).permit(:table)
  end
end
