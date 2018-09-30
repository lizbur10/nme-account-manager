class CreateCateringAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :catering_accounts do |t|
      t.integer :manager_id
      t.string :company_name
      t.string :company_address
      t.string :company_city
      t.string :company_zip_code
      t.string :contact_name
      t.string :contact_email
      t.string :contact_phone
    end
  end
end
