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

ActiveRecord::Schema.define(version: 2018_09_30_132910) do

  create_table "catering_accounts", force: :cascade do |t|
    t.integer "manager_id"
    t.string "company_name"
    t.string "company_address"
    t.string "company_city"
    t.string "company_zip_code"
    t.string "contact_name"
    t.string "contact_email"
    t.string "contact_phone"
    t.text "special_instructions"
  end

  create_table "home_delivery_accounts", force: :cascade do |t|
    t.integer "manager_id"
    t.boolean "active"
    t.string "customer_name"
    t.string "customer_address"
    t.string "customer_city"
    t.string "customer_zip_code"
    t.string "customer_email"
    t.string "customer_phone"
    t.string "delivery_day"
    t.string "add_ons"
    t.text "special_instructions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "managers", force: :cascade do |t|
    t.integer "market_id"
    t.string "name"
    t.string "username"
    t.string "password"
    t.string "contact_info"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "markets", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workplace_accounts", force: :cascade do |t|
    t.integer "manager_id"
    t.boolean "active"
    t.string "company_name"
    t.string "company_address"
    t.string "company_city"
    t.string "company_zip_code"
    t.string "ctct_email_list"
    t.string "scheduling_contact_name"
    t.string "scheduling_contact_phone"
    t.string "scheduling_contact_email"
    t.string "hr_contact_name"
    t.string "hr_contact_phone"
    t.string "hr_contact_email"
    t.string "delivery_day"
    t.string "delivery_time"
    t.text "special_instructions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
