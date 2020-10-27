class MenuFormatter < ApplicationService
  attr_reader :dishes

  def initialize(dishes)
    @dishes = dishes
  end

  def call
    categorize_dishes
  end

  private

  def categorize_dishes

    # Makes sure restaurant staff can create items with any category and have it still presented to customers.

    categorized_dishes = {}
    @dishes.each do |dish|
      categorized_dishes[dish.category] ? categorized_dishes[dish.category] << dish : categorized_dishes[dish.category] = [dish]
    end
    categorized_dishes
  end
end
