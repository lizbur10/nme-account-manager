class AddActiveToManagers < ActiveRecord::Migration[5.2]
  def change
    add_column :managers, :active, :boolean
  end
end
