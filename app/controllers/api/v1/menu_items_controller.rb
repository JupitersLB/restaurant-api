class Api::V1::MenuItemsController < Api::V1::BaseController
  def index
    dishes = policy_scope(MenuItem).includes(:reviews)

    # Sends all the dishes to a service for formatting

    @categorized = MenuFormatter.call(dishes)
  end
end
