class Api::V1::OrdersController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User

  def index
    orders = policy_scope(Order)
    render json: orders
  end

  def show
    order = Order.find(params[:id])
    authorize order
    render json: order
  end
end
