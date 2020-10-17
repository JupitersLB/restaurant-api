json.extract! @order, :id, :table, :total_price, :user_id
json.order_items @order.menu_items do |menu|
  json.extract! menu, :name, :description, :price
end
