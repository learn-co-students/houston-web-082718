class AddSecretToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :secret, :string
  end
end
