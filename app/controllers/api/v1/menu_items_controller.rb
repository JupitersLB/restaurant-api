class Api::V1::MenuItemsController < Api::V1::BaseController
  def index
    dishes = policy_scope(MenuItem).includes(:reviews)
    @categorized = MenuFormatter.call(dishes)
  end
end
