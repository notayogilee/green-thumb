# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# TABLE PLANTS 
connection = ActiveRecord::Base.connection
sql = File.read('db/plants.sql') # Change path and filename as necessary
# statements = sql.split(/;$/)
# statements.pop

ActiveRecord::Base.transaction do
  connection.execute(sql)
  # statements.each do |statement|
  #   connection.execute(statement)
  # end
end


# TABLE USERS
# User.create([{ name: '', email: '@labber.ca', password: 'labber' }])
User.create([
  { name: 'Andy', email: 'andy@labber.ca', password: 'labber', password_confirmation: 'labber' },
  { name: 'Sheldon', email: 'sheldon@labber.ca', password: 'labber', password_confirmation: 'labber' },
  { name: 'Felix', email: 'felix@labber.ca', password: 'labber', password_confirmation: 'labber' },
  { name: 'Ray', email: 'ray@labber.ca', password: 'labber', password_confirmation: 'labber' }
  ])

# TABLE GARDENS
# { title: '', location: 'Montreal', user_id:  },
Garden.create([
  { title: 'The House Garden', location: 'Montreal', user_id: 1 },
  { title: 'Back yard', location: 'Vancouver', user_id: 2 },
  { title: 'LaFontaine', location: 'Montreal', user_id: 3 },
  { title: 'Mont-Royale', location: 'Montreal', user_id: 3 }
])

# TABLE Garden_Plants
# { garden_id: , plant_id: , watering_time: '' },
GardenPlant.create([
  { garden_id: 1, plant_id: 39, watering_time: 1 },
  { garden_id: 1, plant_id: 3, watering_time: 2 },
  { garden_id: 1, plant_id: 9, watering_time: 3 },
  { garden_id: 2, plant_id: 18, watering_time: 1 },
  { garden_id: 2, plant_id: 21, watering_time: 2 },
  { garden_id: 2, plant_id: 38, watering_time: 3 },
  { garden_id: 3, plant_id: 1, watering_time: 4 },
  { garden_id: 3, plant_id: 3, watering_time: 1 },
  { garden_id: 3, plant_id: 30, watering_time: 5 }
])