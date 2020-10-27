json.array! dishes do |dish|
  json.id dish.id
  json.name dish.name
  json.description dish.description
  json.price dish.price
  json.image_url cloudinary_url(dish.photo.key)
  json.rating dish.reviews.average(:rating).to_f.round
end
