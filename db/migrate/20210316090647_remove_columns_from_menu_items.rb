class RemoveColumnsFromMenuItems < ActiveRecord::Migration[6.0]
  def change
    remove_column :menu_items, :name, :string
    remove_column :menu_items, :description, :string
    remove_column :menu_items, :category, :string
    remove_column :menu_items, :price, :decimal
  end
end
