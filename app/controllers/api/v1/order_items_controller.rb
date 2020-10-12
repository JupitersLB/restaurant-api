class Api::V1::OrderItemsController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User, only: :create

  def create
    user = User.find_by(email: request.headers["X-User-Email"])
    order = Order.find_by(user: user)
    @order_item = OrderItem.new(order_params)
    @order_item.order = order
    authorize @order_item
    if @order_item.save
      order.total_price += @order_item.menu_item.price
      order.save
      redirect_to api_v1_order_path(@order_item.order)
    else
      render_error
    end
  end

  private

  def order_params
    params.require(:order_item).permit(:order_id, :menu_item_id)
  end

  def render_error
    render json: { errors: @order_item.errors.full_messages },
      status: :unprocessable_entity
  end
end
