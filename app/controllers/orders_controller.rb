class OrdersController < ApplicationController
  before_action :set_order, only: :update

  def index
    @orders = Order.where(paid: false).includes(:menu_items)
  end

  def new
    @order = Order.new()
  end

  def show
    @order = Order.where(id: params[:id]).includes(:user).first
    menu_id = Menu.active.id
    qrcode = RQRCode::QRCode.new("http://localhost:3000/api/v1/menus/#{menu_id}/menu_items?user_email=#{@order.user.email}&user_token=#{@order.user.authentication_token}")

    @svg = qrcode.as_svg(
      offset: 0,
      color: '000',
      shape_rendering: 'crispEdges',
      module_size: 6,
      standalone: true
    )
  end

  def create
    @order = Order.new(order_params)
    @order.user = User.create(role: 'customer', email: "#{@order.table}#{(0...8).map { (65 + rand(26)).chr }.join}@gmail.com", password: 'password')
    if @order.save
      redirect_to orders_path
    else
      render :new
    end
  end

  def update
    @order.update(paid: true)
    if @order.save
      redirect_to orders_path
    else
      render :index
    end
  end

  private

  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:table)
  end
end
