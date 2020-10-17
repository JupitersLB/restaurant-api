class Api::V1::OrdersController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User

  def index
    orders = policy_scope(Order)
    render json: orders
  end

  def show
    user = User.find_by(email: request.headers["X-User-Email"])
    @order = Order.where(user: user).includes(:menu_items).order(created_at: :desc).first
    authorize @order
  end
end
