json.extract! @order, :id, :table, :total_price, :user_id
json.order_items @order.order_items do |item|
  json.extract! item, :id, :status
  json.extract! item.menu_item, :name, :description, :price
end
