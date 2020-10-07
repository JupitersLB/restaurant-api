# json.array! @dishes do |dish|
#   json.set! dish.category do
#     json.partial! 'dish', dish: dish
#   end
# end

json.array! @categorized do |k, v|
  json.set! k do
    json.partial! 'dish', dishes: v
  end
end
