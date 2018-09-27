class CreateCoffeeCups < ActiveRecord::Migration[5.2]
  def change
    create_table :coffee_cups do |t|
      t.belongs_to :human, foreign_key: true
      t.integer :size

      t.timestamps
    end
  end
end
