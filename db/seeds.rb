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

