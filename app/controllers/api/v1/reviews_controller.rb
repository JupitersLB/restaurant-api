class Api::V1::ReviewsController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User, only: %i[create update]

  def create
    @review = Review.new(review_params)
    authorize @review
    if @review.save
      render json: @review
    else
      render_error
    end
  end

  def update
    @review = Review.find_by(order_item_id: params[:id])
    @review.update(review_params)
    authorize @review
    if @review.save
      render json: @review
    else
      render_error
    end
  end

  def review_params
    params.require(:review).permit(:order_item_id, :rating)
  end

  def render_error
    render json: { errors: @review.errors.full_messages },
      status: :unprocessable_entity
  end
end
