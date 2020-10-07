class MenuItem < ApplicationRecord
  belongs_to :menu
  validates :name, :description, :category, :price, presence: true
  validates :price, numericality: true
end
