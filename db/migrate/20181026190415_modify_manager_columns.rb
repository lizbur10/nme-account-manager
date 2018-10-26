class ModifyManagerColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :managers, :contact_info, :email
    add_column :managers, :phone, :text
  end
end
