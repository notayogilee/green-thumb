# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_11_232404) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "gardens", force: :cascade do |t|
    t.string "title"
    t.string "location"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_gardens_on_user_id"
  end

  create_table "plants", id: false, force: :cascade do |t|
    t.integer "list_id"
    t.text "list_name"
    t.text "list_description"
    t.text "list_optimal_sun"
    t.text "list_optimal_soil"
    t.text "list_planting_considerations"
    t.text "list_when_to_plant"
    t.text "list_growing_from_seed"
    t.text "list_transplanting"
    t.text "list_spacing"
    t.text "list_watering"
    t.text "list_feeding"
    t.text "list_other_care"
    t.text "list_diseases"
    t.text "list_pests"
    t.text "list_harvesting"
    t.text "list_storage_use"
    t.text "list_image_url"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
  end

  add_foreign_key "gardens", "users"
end
