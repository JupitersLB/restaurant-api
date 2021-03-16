class MenuItem < ApplicationRecord
  belongs_to :menu, dependent: :destroy
  belongs_to :item, dependent: :destroy
  # has_many :order_items, dependent: :destroy
  # has_many :reviews, through: :order_items
  accepts_nested_attributes_for :item, reject_if: :all_blank
end
