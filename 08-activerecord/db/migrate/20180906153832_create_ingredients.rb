class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.boolean :has_salt
      t.string :name
      t.belongs_to :cake
    end
  end
end
