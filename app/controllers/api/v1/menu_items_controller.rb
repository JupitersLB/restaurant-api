class Api::V1::MenusController < Api::V1::BaseController
  def index
    dishes = policy_scope(MenuItems)
    render json: dishes
  end
end
