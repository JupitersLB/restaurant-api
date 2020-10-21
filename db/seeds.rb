require "open-uri"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Cleaning database"
OrderItem.destroy_all
MenuItem.destroy_all
Order.destroy_all
Menu.destroy_all
User.destroy_all
puts "Cleaned"

puts "Creating users"
params = {}
params[:email] = 'liam@restaurant.com'
params[:password] = 'password'
params[:role] = 'admin'
new_user = User.new(params)
new_user.save
puts "Created user #{new_user.id}"

params = {}
params[:email] = 'markie@restaurant.com'
params[:password] = 'password'
params[:role] = 'staff'
new_user = User.new(params)
new_user.save
puts "Created user #{new_user.id}"

params = {}
params[:email] = 'david@restaurant.com'
params[:password] = 'password'
params[:role] = 'customer'
new_user = User.new(params)
new_user.save
puts "Created user #{new_user.id}"

puts "Users created!"

puts "Creating menus"
menu = Menu.new(name: "Standard")
menu.save
puts "Created menu #{menu.id}"

puts "Menus created!"

puts "Creating menu items"

file = URI.open('https://img.taste.com.au/8-PjS8DG/w720-h480-cfill-q80/taste/2016/11/traditional-caesar-salad-974-1.jpeg')
params = {}
params[:name] = 'Caesar Salad'
params[:description] = 'A delicious salad with chicken'
params[:category] = 'Salad'
params[:price] = 800
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.photo.attach(io: file, filename: "caesar.jpg", content_type: 'image/jpg')
menu_item.save
puts "Created menu item #{menu_item.id}"

file = URI.open('https://www.tasteofhome.com/wp-content/uploads/2018/01/exps109626_SD153321D01_29_4b-696x696.jpg')
params = {}
params[:name] = 'Salad Nicoise'
params[:description] = 'A delicious salad with tuna'
params[:category] = 'Salad'
params[:price] = 1200
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.photo.attach(io: file, filename: "nicoise.jpg", content_type: 'image/jpg')
menu_item.save
puts "Created menu item #{menu_item.id}"

file = URI.open('https://www.simplyrecipes.com/wp-content/uploads/2016/08/2016-08-24-Harissa-Salmon-2-1024x683.jpg')
params = {}
params[:name] = 'Roast salmon with pesto sauce'
params[:description] = 'Baked salmon topped with pesto and sour cream sauce served with grated root vegetables'
params[:category] = 'Fish'
params[:price] = 1800
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.photo.attach(io: file, filename: "salmon.jpg", content_type: 'image/jpg')
menu_item.save
puts "Created menu item #{menu_item.id}"

file = URI.open('https://images-na.ssl-images-amazon.com/images/I/611KsDstzYL._SX679_.jpg')
params = {}
params[:name] = 'Honey & orange roast sea bass'
params[:description] = 'Liven up your midweek meals with this low-calorie, gluten-free fish supper'
params[:category] = 'Fish'
params[:price] = 2100
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.photo.attach(io: file, filename: "sea-bass.jpg", content_type: 'image/jpg')
menu_item.save
puts "Created menu item #{menu_item.id}"

file = URI.open('https://images-gmi-pmc.edge-generalmills.com/b57341e4-5fbf-4413-9445-1aca51a34e57.jpg')
params = {}
params[:name] = 'Glazed gammon'
params[:description] = 'Sticky honey and mustard glaze to gammon for a delicious sweetness that contrasts with the saltiness of the meat'
params[:category] = 'Meat'
params[:price] = 2200
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.photo.attach(io: file, filename: "gammon.jpg", content_type: 'image/jpg')
menu_item.save
puts "Created menu item #{menu_item.id}"

file = URI.open('https://www.newideafood.com.au/media/14174/steak-blue-cheese-pie.jpg')
params = {}
params[:name] = 'Steak & blue cheese pie'
params[:description] = 'Steak pie with tender meat, a deeply savoury gravy and molten blue cheese for an extra hit of flavour'
params[:category] = 'Meat'
params[:price] = 2400
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.photo.attach(io: file, filename: "pie.jpg", content_type: 'image/jpg')
menu_item.save
puts "Created menu item #{menu_item.id}"

file = URI.open('https://www.second8-88.com/wp-hokkaido/wp-content/uploads/2018/06/ES054_L.jpg')
params = {}
params[:name] = 'Sapporo'
params[:description] = 'Malty, hoppy, world-famous Japanese Lager'
params[:category] = 'Drinks'
params[:price] = 700
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.photo.attach(io: file, filename: "sapporo.jpg", content_type: 'image/jpg')
menu_item.save
puts "Created menu item #{menu_item.id}"

file = URI.open('https://www.coffeedesk.com/blog/wp-content/uploads/2020/05/organic-herbata-zaparzona-1920x1280.jpg')
params = {}
params[:name] = 'Oolong Tea'
params[:description] = 'Oolong tea is a traditional Chinese tea.'
params[:category] = 'Drinks'
params[:price] = 450
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.photo.attach(io: file, filename: "oolong.jpg", content_type: 'image/jpg')
menu_item.save
puts "Created menu item #{menu_item.id}"

file = URI.open('https://images.sweetauthoring.com/recipe/9103_2054.jpg')
params = {}
params[:name] = 'Cheesecake'
params[:description] = 'This creamy, fluffy cheesecake recipe is perfectly sweet with a light and delicate texture'
params[:category] = 'Dessert'
params[:price] = 1100
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.photo.attach(io: file, filename: "cheesecake.jpg", content_type: 'image/jpg')
menu_item.save
puts "Created menu item #{menu_item.id}"

file = URI.open('https://www.thespruceeats.com/thmb/yW4KN2d6VGwysQauBsmX9-lOkaQ=/2471x1853/smart/filters:no_upscale()/super-easy-fudge-102016-58188f0c3df78cc2e893a23f.jpg')
params = {}
params[:name] = 'Fudge'
params[:description] = 'Old Fashioned Chocolate Fudge, creamy and slightly crumbly this melt in your mouth homemade fudge'
params[:category] = 'Dessert'
params[:price] = 1300
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.photo.attach(io: file, filename: "fudge.jpg", content_type: 'image/jpg')
menu_item.save
puts "Created menu item #{menu_item.id}"

puts "Menu Items created!"

puts "Creating Orders"

order = Order.new(table: '1A', user: User.find_by(email: 'david@restaurant.com'))
order.save
puts "Created order #{menu_item.id}"

puts "Created Orders"

