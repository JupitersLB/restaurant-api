class MenuItem < ApplicationRecord
  belongs_to :menu
  has_one_attached :photo
  validates :name, :description, :category, :price, presence: true
  validates :price, numericality: true

  include PgSearch::Model
  pg_search_scope :search_by_name_and_description,
    against: [ :name, :description ],
    using: {
      tsearch: { prefix: true } # <-- now `superman batm` will return something!
    }
end
