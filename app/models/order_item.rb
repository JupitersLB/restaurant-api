class OrderItem < ApplicationRecord
  has_one :review
  belongs_to :menu_item
  belongs_to :order
end
