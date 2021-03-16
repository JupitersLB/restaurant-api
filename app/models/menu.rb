class Menu < ApplicationRecord
  has_many :menu_items, dependent: :destroy
  has_many :items, through: :menu_items
  validates :name, presence: true, uniqueness: true
  scope :active, -> { where(active: true).first }

  accepts_nested_attributes_for :menu_items, reject_if: :all_blank
  accepts_nested_attributes_for :items, reject_if: :all_blank

end
