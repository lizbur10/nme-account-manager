class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.integer :manager_id
      t.string :customer_name
      t.string :customer_address
      t.string :customer_city
      t.string :customer_email
      t.string :customer_phone
      t.string :delivery_day
      t.text :order
      t.string :add_ons
      t.text :special_instructions

      t.timestamps
    end
  end
end
