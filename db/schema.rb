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

ActiveRecord::Schema.define(version: 2019_08_09_201010) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "holdings", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "symbol", null: false
    t.integer "shares", null: false
    t.integer "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stock_watches", force: :cascade do |t|
    t.string "symbol", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["symbol", "user_id"], name: "index_stock_watches_on_symbol_and_user_id", unique: true
  end

  create_table "stocks", force: :cascade do |t|
    t.string "symbol", null: false
    t.string "name", null: false
    t.text "about", null: false
    t.string "ceo", null: false
    t.string "founded", null: false
    t.string "hq", null: false
    t.string "industry", null: false
    t.string "exchange", null: false
    t.string "products", null: false
    t.integer "employees", null: false
    t.integer "valuation", null: false
    t.float "mkt_price", null: false
    t.string "youtube_query", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["symbol"], name: "index_stocks_on_symbol", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "gold", default: 500000
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
