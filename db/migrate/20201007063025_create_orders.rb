class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :table
      t.float :total_price, default: 0

      t.timestamps
    end
  end
end
