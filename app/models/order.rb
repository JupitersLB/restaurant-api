class Order < ApplicationRecord
  belongs_to :user
  has_many :menu_items

  validates :table, presence: true, uniqueness: true
end
