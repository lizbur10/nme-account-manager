class CreateManagers < ActiveRecord::Migration[5.2]
  def change
    create_table :managers do |t|
      t.integer :market_id
      t.string :name
      t.string :contact_info

      t.timestamps
    end
  end
end
