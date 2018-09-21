class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.integer :manager_id
      t.string :company_name
      t.string :company_address
      t.string :company_city
      t.string :ctct_email_list
      t.string :contact_name
      t.string :contact_email
      t.string :contact_phone
      t.string :delivery_day
      t.string :delivery_time
      t.text :special_instructions

      t.timestamps
    end
  end
end
