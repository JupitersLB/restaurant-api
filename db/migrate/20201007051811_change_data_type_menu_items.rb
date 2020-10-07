class ChangeDataTypeMenuItems < ActiveRecord::Migration[6.0]
  def change
    change_column :menu_items, :price, :float
  end
end
