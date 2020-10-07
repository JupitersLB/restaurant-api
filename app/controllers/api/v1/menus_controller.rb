class Api::V1::MenusController < Api::V1::BaseController
  def show
    menu = Menu.active
    authorize menu
    render json: menu
  end
end
