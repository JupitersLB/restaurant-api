class MenuItem < ApplicationRecord
  belongs_to :menu
  belongs_to :order
  validates :name, :description, :category, :price, presence: true
  validates :price, numericality: true
end
