# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Cleaning database"
Menu.delete_all
User.delete_all
MenuItem.delete_all
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
params = {}
params[:name] = 'Ceaser Salad'
params[:description] = 'A delicious salad with chicken'
params[:category] = 'Salad'
params[:price] = 800
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.save
puts "Created menu item #{menu_item.id}"

params = {}
params[:name] = 'Salad Nicoise'
params[:description] = 'A delicious salad with tuna'
params[:category] = 'Salad'
params[:price] = 1200
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.save
puts "Created menu item #{menu_item.id}"

params = {}
params[:name] = 'Roast salmon with pesto sauce & beetroot slaw'
params[:description] = 'Baked salmon topped with pesto and sour cream sauce served with grated root vegetables makes a quick and wholesome midweek meal'
params[:category] = 'Fish'
params[:price] = 1800
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.save
puts "Created menu item #{menu_item.id}"

params = {}
params[:name] = 'Honey & orange roast sea bass with lentils'
params[:description] = 'Liven up your midweek meals with this low-calorie, gluten-free fish supper'
params[:category] = 'Fish'
params[:price] = 2100
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.save
puts "Created menu item #{menu_item.id}"

params = {}
params[:name] = 'Glazed gammon'
params[:description] = 'Add a sticky honey and mustard glaze to gammon for a delicious sweetness that contrasts with the saltiness of the meat. It\'s great for a celebration supper'
params[:category] = 'Meat'
params[:price] = 2200
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.save
puts "Created menu item #{menu_item.id}"

params = {}
params[:name] = 'Steak & blue cheese pie'
params[:description] = 'Bake a comforting steak pie with tender meat, a deeply savoury gravy and molten blue cheese for an extra hit of flavour. The ideal winter warmer'
params[:category] = 'Meat'
params[:price] = 2400
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.save
puts "Created menu item #{menu_item.id}"

params = {}
params[:name] = 'Sapporo'
params[:description] = 'Malty, hoppy, world-famous Japanese Lager'
params[:category] = 'Drinks'
params[:price] = 700
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.save
puts "Created menu item #{menu_item.id}"

params = {}
params[:name] = 'Oolong Tea'
params[:description] = 'Oolong tea is a traditional Chinese tea. It\'s made from the leaves of the Camellia sinensis plant, the same plant used to make green tea and black tea'
params[:category] = 'Drinks'
params[:price] = 450
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.save
puts "Created menu item #{menu_item.id}"

params = {}
params[:name] = 'Cheesecake'
params[:description] = 'This creamy, fluffy cheesecake recipe is perfectly sweet with a light and delicate texture'
params[:category] = 'Dessert'
params[:price] = 1100
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.save
puts "Created menu item #{menu_item.id}"

params = {}
params[:name] = 'Fudge'
params[:description] = 'Old Fashioned Chocolate Fudge, creamy and slightly crumbly this melt in your mouth homemade fudge is the best'
params[:category] = 'Dessert'
params[:price] = 1300
menu_item = MenuItem.new(params)
menu_item.menu = menu
menu_item.save
puts "Created menu item #{menu_item.id}"

