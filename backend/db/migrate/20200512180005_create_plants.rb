class CreatePlants < ActiveRecord::Migration[5.2]
  def change
    create_table :plants do |t|
      t.string :name
      t.text :description
      t.text :optimal_sun
      t.text :optimal_soil
      t.text :planting_considerations
      t.text :when_to_plant
      t.text :growing_from_seed
      t.text :transplanting
      t.text :spacing
      t.text :watering
      t.text :feeding
      t.text :other_care
      t.text :diseases
      t.text :pests
      t.text :harvesting
      t.text :storage_use
      t.text :image_url
    end
  end
end
