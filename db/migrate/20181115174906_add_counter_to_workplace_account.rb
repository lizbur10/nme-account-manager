class AddCounterToWorkplaceAccount < ActiveRecord::Migration[5.2]
  def change
    add_column :workplace_accounts, :counter, :integer, :default => 0
  end
end
