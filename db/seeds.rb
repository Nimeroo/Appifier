require 'faker' 
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Game.destroy_all
User.destroy_all

10.times do Game.create(
  [{
    title: Faker::Game.title,
    genre: Faker::Game.genre,
    platform: Faker::Game.platform,
  }]
)
end

User.create(
  { username: 'ShrekLord',
  email: "ogreguy@swamp.com",
  profile_image_url: "https://johnnyalucard.com/wp-content/uploads/2020/04/shrek.jpg",
  password: "ogreWithLayers" }
) 
User.create(
  { username: "Bee_dude",
  email: "thebigbee@gmail.com",
  profile_image_url: "https://static.wikia.nocookie.net/the-best-anime-in-the-world/images/b/b9/BarryBBenson.jpg/revision/latest/top-crop/width/360/height/450?cb=20180607153601",
  password: "buzzbuzz" }
) 

User.create(
  { username: "Pops_the_egg",
  email: "eggmon@gmail.com",
  profile_image_url: "https://static.wikia.nocookie.net/sonic/images/c/c9/TSR_Dr_Eggman.png/revision/latest/scale-to-width-down/810?cb=20201121151851",
  password: "eggmanland" }
) 

User.create(
  { username: "Obabama",
  email: "yeswecan@gmail.com",
  profile_image_url: "https://www.whitehouse.gov/wp-content/uploads/2021/01/44_barack_obama.jpg",
  password: "inTheBaracks" } 
)

puts "#{Game.count} Games created"
puts "#{User.count} Users created"
