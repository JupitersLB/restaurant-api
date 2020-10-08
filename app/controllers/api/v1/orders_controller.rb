class Api::V1::OrdersController < Api::V1::BaseController
  before_action :set_order, only: [ :show, :update ]
  acts_as_token_authentication_handler_for User

  def index
    orders = policy_scope(Order)
    render json: orders
  end

  def show
    render json: order
  end

  def update
    if order.update(order_params)
      render 'menu_items/show'
    else
      render_error
  end

  private

  def set_order
    @order = Order.find(params[:id])
    authorize order
  end

  def order_params
    params.require(:order).permit(:menu_item)
  end

  def render_error
    render json: { errors: @order.errors.full_messages },
      status: :unprocessable_entity
  end
end
