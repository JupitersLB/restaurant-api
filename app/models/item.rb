class Item < ApplicationRecord
  has_many :menu_items, dependent: :destroy
  has_one_attached :photo

  validates :name, :description, :category, :price, presence: true
  validates :price, numericality: true

  include PgSearch::Model
  pg_search_scope :search_by_name_and_description,
    against: [ :name, :description ],
    using: {
      tsearch: { prefix: true } # <-- now `superman batm` will return something!
    }

  def item_photo
    if self.photo.attached?
      ActionController::Base.helpers.cl_image_tag self.photo.key, width: 100, height: 100
    else
      ActionController::Base.helpers.image_tag 'jupiter.png', width: 100, height: 100
    end
  end

end
