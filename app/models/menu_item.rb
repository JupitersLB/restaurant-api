class MenuItem < ApplicationRecord
  belongs_to :menu
  has_one_attached :photo
  validates :name, :description, :category, :price, presence: true
  validates :price, numericality: true
end
