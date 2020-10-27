class Review < ApplicationRecord
  belongs_to :order_item

  validates :rating, presence: true
end
