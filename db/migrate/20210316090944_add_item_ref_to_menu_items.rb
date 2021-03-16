class AddItemRefToMenuItems < ActiveRecord::Migration[6.0]
  def change
    add_reference :menu_items, :item, null: false, foreign_key: true
  end
end
